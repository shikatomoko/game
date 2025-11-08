// 画面管理
class ScreenManager {
    constructor(game) {
        this.game = game;
    }

    // 画面切り替え
    showScreen(screenName) {
        // シナリオ画面から別の画面に切り替える場合、再生中のシナリオIDをクリア
        if (this.game.state.currentScreen === 'scenario' && screenName !== 'scenario') {
            this.game.state.playingScenarioId = null;
        }
        
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(`${screenName}-screen`).classList.add('active');
        this.game.state.currentScreen = screenName;
        this.game.state.saveState();
    }

    // コンテンツ切り替え
    switchContent(contentName) {
        // メニューボタンのアクティブ状態更新
        document.querySelectorAll('.menu-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-content') === contentName) {
                btn.classList.add('active');
            }
        });

        // コンテンツの切り替え
        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${contentName}-content`).classList.add('active');

        // コンテンツに応じて更新
        switch(contentName) {
            case 'home':
                this.game.updateHome();
                break;
            case 'map':
                this.game.updateMap();
                break;
            case 'audio':
                this.game.updateAudioLog();
                break;
            case 'camera':
                this.game.updateCameraGallery();
                break;
        }
    }
}
