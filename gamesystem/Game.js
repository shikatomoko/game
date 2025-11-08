// ゲーム管理クラス
class Game {
    constructor() {
        this.state = new GameState();
        this.screenManager = new ScreenManager(this);
        this.tutorialManager = new TutorialManager(this);
        this.scenarioManager = new ScenarioManager(this);
        this.contentManager = new ContentManager(this);
        this.init();
    }

    init() {
        this.setupEventListeners();
        
        // シナリオ再生中にリロードした場合は、ゲーム画面に戻す
        if (this.state.currentScreen === 'scenario' && this.state.playingScenarioId) {
            this.state.currentScreen = 'game';
            this.state.playingScenarioId = null;
            this.state.saveState();
        }
        
        // チュートリアルが未完了の場合は開始
        if (this.state.currentScreen === 'tutorial') {
            this.screenManager.showScreen('tutorial');
            this.tutorialManager.startTutorial();
        } else {
            this.screenManager.showScreen(this.state.currentScreen);
            // ゲーム画面の場合はホーム画面を初期化
            if (this.state.currentScreen === 'game') {
                this.contentManager.updateHome();
            }
        }
    }

    // イベントリスナーの設定
    setupEventListeners() {
        // 下部メニューボタン
        document.querySelectorAll('.menu-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const content = e.currentTarget.getAttribute('data-content');
                this.screenManager.switchContent(content);
            });
        });

        // チュートリアル次へボタン
        document.getElementById('tutorial-next').addEventListener('click', () => {
            this.tutorialManager.nextTutorialStep();
        });

        // シナリオ次へボタン
        document.getElementById('scenario-next').addEventListener('click', () => {
            this.scenarioManager.nextScenarioLine();
        });

        // テキストログモーダルを閉じる
        document.getElementById('close-text-log').addEventListener('click', () => {
            this.contentManager.closeTextLog();
        });
    }

    // 各マネージャーのメソッドへのショートカット
    updateHome() {
        this.contentManager.updateHome();
    }

    updateMap() {
        this.contentManager.updateMap();
    }

    updateAudioLog() {
        this.contentManager.updateAudioLog();
    }

    updateCameraGallery() {
        this.contentManager.updateCameraGallery();
    }
}

// ゲーム開始
let game;
window.addEventListener('DOMContentLoaded', () => {
    game = new Game();
});
