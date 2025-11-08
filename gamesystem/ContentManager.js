// コンテンツ画面管理
class ContentManager {
    constructor(game) {
        this.game = game;
    }

    // ホーム画面更新
    updateHome() {
        // 解放済みシナリオの表示
        const scenarioList = document.getElementById('unlocked-scenarios');
        scenarioList.innerHTML = '';
        
        this.game.state.unlockedScenarios.forEach(scenarioId => {
            const scenario = SCENARIOS.find(s => s.id === scenarioId);
            if (scenario) {
                const item = document.createElement('div');
                item.className = 'scenario-item';
                item.textContent = scenario.title;
                item.addEventListener('click', () => this.game.scenarioManager.playScenario(scenarioId));
                scenarioList.appendChild(item);
            }
        });

        // 次の目標
        document.getElementById('next-objective').textContent = this.game.state.currentObjective;

        // お気に入りキャラクター
        if (this.game.state.favoriteCharacter) {
            const character = CHARACTERS.find(c => c.id === this.game.state.favoriteCharacter);
            if (character) {
                // 立ち絵を表示
                const spriteElement = document.getElementById('favorite-sprite');
                const spriteImage = `images/characters/${this.game.state.favoriteCharacter}.png`;
                spriteElement.style.backgroundImage = `url('${spriteImage}')`;
                
                // メッセージを表示
                if (character.messages) {
                    const randomMessage = character.messages[Math.floor(Math.random() * character.messages.length)];
                    document.getElementById('favorite-message').textContent = randomMessage;
                }
            }
        }
    }

    // マップ画面更新
    updateMap() {
        const mapPins = document.getElementById('map-pins');
        mapPins.innerHTML = '';

        MAP_LOCATIONS.forEach(location => {
            if (this.game.state.mapLocations.some(loc => loc.id === location.id)) {
                const pin = document.createElement('div');
                pin.className = 'map-pin';
                pin.style.left = location.x + '%';
                pin.style.top = location.y + '%';
                pin.textContent = '📍';
                
                const isCompleted = this.game.state.completedScenarios.includes(location.scenarioId);
                if (isCompleted) {
                    pin.classList.add('completed');
                }

                pin.addEventListener('click', () => {
                    if (!isCompleted) {
                        this.game.scenarioManager.playScenario(location.scenarioId);
                    }
                });

                mapPins.appendChild(pin);
            }
        });
    }

    // 録音データ更新
    updateAudioLog() {
        const logList = document.getElementById('scenario-log');
        logList.innerHTML = '';

        // チュートリアルが完了している場合は最初に追加
        if (this.game.state.tutorialCompleted) {
            const tutorialItem = document.createElement('div');
            tutorialItem.className = 'log-item';
            
            const title = document.createElement('div');
            title.className = 'log-item-title';
            title.textContent = 'チュートリアル';
            
            const preview = document.createElement('div');
            preview.className = 'log-item-preview';
            preview.textContent = TUTORIAL_STEPS[0].text.substring(0, 50) + '...';
            
            tutorialItem.appendChild(title);
            tutorialItem.appendChild(preview);
            tutorialItem.addEventListener('click', () => this.showTextLog('tutorial'));
            
            logList.appendChild(tutorialItem);
        }

        // 完了済みシナリオを追加
        this.game.state.completedScenarios.forEach(scenarioId => {
            const scenario = SCENARIOS.find(s => s.id === scenarioId);
            if (scenario) {
                const item = document.createElement('div');
                item.className = 'log-item';
                
                const title = document.createElement('div');
                title.className = 'log-item-title';
                title.textContent = scenario.title;
                
                const preview = document.createElement('div');
                preview.className = 'log-item-preview';
                preview.textContent = scenario.lines[0].text.substring(0, 50) + '...';
                
                item.appendChild(title);
                item.appendChild(preview);
                item.addEventListener('click', () => this.showTextLog(scenarioId));
                
                logList.appendChild(item);
            }
        });

        if (!this.game.state.tutorialCompleted && this.game.state.completedScenarios.length === 0) {
            logList.innerHTML = '<p style="color: #888; text-align: center; padding: 40px;">まだ録音データがありません</p>';
        }
    }

    // カメラデータ更新
    updateCameraGallery() {
        const gallery = document.getElementById('character-gallery');
        gallery.innerHTML = '';

        this.game.state.unlockedCharacters.forEach(characterId => {
            const character = CHARACTERS.find(c => c.id === characterId);
            if (character) {
                const item = document.createElement('div');
                item.className = 'gallery-item';
                
                // お気に入りキャラクターの場合は特別なスタイルを追加
                if (this.game.state.favoriteCharacter === characterId) {
                    item.classList.add('favorite');
                }
                
                const img = document.createElement('div');
                img.className = 'gallery-image';
                
                // アイコンが画像パスの場合は背景画像として表示、絵文字の場合はテキストとして表示
                if (character.icon && (character.icon.endsWith('.png') || character.icon.endsWith('.jpg') || character.icon.endsWith('.jpeg'))) {
                    img.style.backgroundImage = `url('${character.icon}')`;
                    img.style.backgroundSize = 'cover';
                    img.style.backgroundPosition = 'center';
                    img.style.backgroundRepeat = 'no-repeat';
                } else {
                    img.textContent = character.icon || '👤';
                    img.style.fontSize = '80px';
                    img.style.display = 'flex';
                    img.style.alignItems = 'center';
                    img.style.justifyContent = 'center';
                }
                
                const info = document.createElement('div');
                info.className = 'gallery-info';
                
                const name = document.createElement('div');
                name.className = 'gallery-name';
                name.textContent = character.name;
                
                // お気に入りアイコンを追加
                const favoriteIcon = document.createElement('div');
                favoriteIcon.className = 'favorite-icon';
                favoriteIcon.textContent = this.game.state.favoriteCharacter === characterId ? '★' : '☆';
                
                info.appendChild(name);
                info.appendChild(favoriteIcon);
                item.appendChild(img);
                item.appendChild(info);
                
                // クリックでお気に入りに設定
                item.addEventListener('click', () => this.setFavoriteCharacter(characterId));
                
                gallery.appendChild(item);
            }
        });

        if (this.game.state.unlockedCharacters.length === 0) {
            gallery.innerHTML = '<p style="color: #888; text-align: center; padding: 40px; grid-column: 1/-1;">まだキャラクターデータがありません</p>';
        }
    }

    // お気に入りキャラクターを設定
    setFavoriteCharacter(characterId) {
        this.game.state.favoriteCharacter = characterId;
        this.game.state.saveState();
        this.updateCameraGallery();
        this.updateHome();
    }

    // テキストログを表示
    showTextLog(logId) {
        const logData = TEXT_LOGS[logId];
        if (!logData) return;

        // タイトルを設定
        document.getElementById('text-log-title').textContent = logData.title;

        // テキストログコンテンツを生成
        const content = document.getElementById('text-log-content');
        content.innerHTML = '';

        logData.lines.forEach(line => {
            const lineDiv = document.createElement('div');
            lineDiv.className = 'text-log-line';

            const characterSpan = document.createElement('span');
            characterSpan.className = 'text-log-character';
            characterSpan.textContent = line.character + '：';

            const textSpan = document.createElement('span');
            textSpan.className = 'text-log-text';
            textSpan.textContent = line.text;

            lineDiv.appendChild(characterSpan);
            lineDiv.appendChild(textSpan);
            content.appendChild(lineDiv);
        });

        // モーダルを表示
        document.getElementById('text-log-modal').classList.add('active');
    }

    // テキストログを閉じる
    closeTextLog() {
        document.getElementById('text-log-modal').classList.remove('active');
    }
}
