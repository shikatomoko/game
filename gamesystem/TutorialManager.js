// チュートリアル管理
class TutorialManager {
    constructor(game) {
        this.game = game;
    }

    // チュートリアル開始
    startTutorial() {
        this.game.state.tutorialStep = 0;
        this.showTutorialStep();
    }

    // チュートリアルステップ表示
    showTutorialStep() {
        const step = TUTORIAL_STEPS[this.game.state.tutorialStep];
        if (step) {
            document.getElementById('tutorial-name').textContent = step.character;
            document.getElementById('tutorial-text').textContent = step.text;
            
            // 背景画像を設定
            const bgElement = document.getElementById('tutorial-background');
            if (step.background) {
                bgElement.style.backgroundImage = `url('${step.background}')`;
            } else {
                bgElement.style.backgroundImage = 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)';
            }
            
            // 立ち絵を設定（配列対応）
            this.renderSprites('tutorial-sprites', step.sprite);
        }
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

    // チュートリアル次のステップ
    nextTutorialStep() {
        this.game.state.tutorialStep++;
        
        if (this.game.state.tutorialStep >= TUTORIAL_STEPS.length) {
            // チュートリアル完了
            this.completeTutorial();
        } else {
            this.showTutorialStep();
        }
    }

    // チュートリアル完了
    completeTutorial() {
        // チュートリアル完了フラグを立てる
        this.game.state.tutorialCompleted = true;
        
        // 初期シナリオをアンロック
        this.game.state.unlockScenario('scenario_01');
        this.game.state.unlockCharacter('hitoyo');
        this.game.state.favoriteCharacter = 'hitoyo';
        this.game.state.currentObjective = SCENARIOS[0].objective;
        
        // マップ位置を初期化
        this.game.state.mapLocations = MAP_LOCATIONS.filter(loc => loc.unlocked);
        
        this.game.state.saveState();
        this.game.screenManager.showScreen('game');
        this.game.updateHome();
    }
}
