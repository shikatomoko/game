// シナリオ管理
class ScenarioManager {
    constructor(game) {
        this.game = game;
        this.currentScenario = null;
        this.currentScenarioIndex = 0;
        this.isPlayingTutorial = false;
        this.photoTaken = false;
    }

    // シナリオ再生
    playScenario(scenarioId) {
        const scenario = SCENARIOS.find(s => s.id === scenarioId);
        if (!scenario) return;

        this.currentScenario = scenario;
        this.currentScenarioIndex = 0;
        this.isPlayingTutorial = false;
        this.photoTaken = false;
        
        // 再生中のシナリオIDを保存（リロード対策）
        this.game.state.playingScenarioId = scenarioId;
        this.game.state.saveState();
        
        this.game.screenManager.showScreen('scenario');
        this.showScenarioLine();
    }

    // チュートリアル再生
    playTutorial() {
        this.currentScenario = {
            id: 'tutorial',
            title: 'チュートリアル',
            lines: TUTORIAL_STEPS
        };
        this.currentScenarioIndex = 0;
        this.isPlayingTutorial = true;
        this.photoTaken = false;
        
        // チュートリアル再生中もマーク
        this.game.state.playingScenarioId = 'tutorial';
        this.game.state.saveState();
        
        this.game.screenManager.showScreen('scenario');
        this.showScenarioLine();
    }

    // シナリオの行を表示
    showScenarioLine() {
        if (!this.currentScenario) return;

        const line = this.currentScenario.lines[this.currentScenarioIndex];
        if (!line) {
            this.endScenario();
            return;
        }

        document.getElementById('scenario-name').textContent = line.character;
        document.getElementById('scenario-text').textContent = line.text;
        
        // 背景画像を設定
        const bgElement = document.getElementById('scenario-background');
        if (line.background) {
            bgElement.style.backgroundImage = `url('${line.background}')`;
        } else {
            bgElement.style.backgroundImage = 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%)';
        }
        
        // 立ち絵を設定（配列対応）
        this.renderSprites('scenario-sprites', line.sprite);
        
        // カメラボタンの表示制御
        const cameraBtn = document.getElementById('camera-btn');
        if (line.cameraEnabled && !this.photoTaken) {
            cameraBtn.style.display = 'block';
            cameraBtn.onclick = () => this.takePhoto(line.cameraData);
        } else {
            cameraBtn.style.display = 'none';
        }
        
        // キャラクター登録
        const character = CHARACTERS.find(c => c.name === line.character);
        if (character) {
            this.game.state.unlockCharacter(character.id);
        }
    }

    // 写真を撮る
    takePhoto(cameraData) {
        if (!cameraData) return;
        
        // 確認ダイアログを表示
        const dialog = document.getElementById('photo-confirm-dialog');
        const messageText = document.getElementById('photo-confirm-text');
        
        messageText.textContent = cameraData.message || '過去データを発見しました。再生しますか？';
        dialog.classList.add('active');
        
        // はいボタン
        document.getElementById('photo-confirm-yes').onclick = () => {
            dialog.classList.remove('active');
            this.photoTaken = true;
            document.getElementById('camera-btn').style.display = 'none';
            this.nextScenarioLine();
        };
        
        // キャンセルボタン
        document.getElementById('photo-confirm-no').onclick = () => {
            dialog.classList.remove('active');
        };
    }

    // 立ち絵をレンダリング
    renderSprites(containerId, sprite) {
        const spritesContainer = document.getElementById(containerId);
        spritesContainer.innerHTML = ''; // 既存の立ち絵をクリア
        
        if (sprite) {
            // spriteが配列の場合と単一の場合の両方に対応
            const sprites = Array.isArray(sprite) ? sprite : [{ image: sprite, position: 'center' }];
            
            sprites.forEach((spriteData) => {
                const spriteElement = document.createElement('div');
                spriteElement.className = 'character-sprite';
                
                // spriteDataがオブジェクトの場合と文字列の場合を処理
                if (typeof spriteData === 'string') {
                    spriteElement.style.backgroundImage = `url('${spriteData}')`;
                    spriteElement.classList.add('position-center');
                } else {
                    spriteElement.style.backgroundImage = `url('${spriteData.image}')`;
                    spriteElement.classList.add(`position-${spriteData.position || 'center'}`);
                }
                
                spriteElement.style.width = '500px';
                spriteElement.style.height = '700px';
                spritesContainer.appendChild(spriteElement);
            });
        }
    }

    // シナリオ次の行
    nextScenarioLine() {
        this.currentScenarioIndex++;
        
        if (this.currentScenarioIndex >= this.currentScenario.lines.length) {
            this.endScenario();
        } else {
            this.showScenarioLine();
        }
    }

    // シナリオ終了
    endScenario() {
        if (!this.currentScenario) return;

        // 再生中のシナリオIDをクリア
        this.game.state.playingScenarioId = null;

        // チュートリアル再生の場合は特別処理
        if (this.isPlayingTutorial) {
            this.game.state.saveState();
            this.game.screenManager.showScreen('game');
            this.isPlayingTutorial = false;
            return;
        }

        // シナリオを完了としてマーク
        this.game.state.completeScenario(this.currentScenario.id);

        // 次のシナリオやマップ位置をアンロック
        if (this.currentScenario.unlocks) {
            this.currentScenario.unlocks.forEach(unlockId => {
                this.game.state.unlockScenario(unlockId);
                
                // マップ位置もアンロック
                const mapLocation = MAP_LOCATIONS.find(loc => loc.scenarioId === unlockId);
                if (mapLocation && !this.game.state.mapLocations.some(loc => loc.id === mapLocation.id)) {
                    this.game.state.mapLocations.push(mapLocation);
                }
            });
        }

        // 目標を更新
        const nextScenario = SCENARIOS.find(s => 
            this.game.state.unlockedScenarios.includes(s.id) && 
            !this.game.state.completedScenarios.includes(s.id)
        );
        if (nextScenario) {
            this.game.state.currentObjective = nextScenario.objective;
        } else {
            this.game.state.currentObjective = '全てのシナリオをクリアしました!';
        }

        this.game.state.saveState();
        this.game.screenManager.showScreen('game');
        this.game.updateHome();
    }
}
