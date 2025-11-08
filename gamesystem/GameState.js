// ゲーム状態管理
class GameState {
    constructor() {
        this.currentScreen = 'tutorial';
        this.tutorialStep = 0;
        this.tutorialCompleted = false;
        this.unlockedScenarios = [];
        this.completedScenarios = [];
        this.unlockedCharacters = [];
        this.favoriteCharacter = null;
        this.currentObjective = '';
        this.mapLocations = [];
        this.playingScenarioId = null; // 再生中のシナリオID（リロード対策）
        this.scenarioProgress = {}; // シナリオごとの進捗（セクション番号）
        this.loadState();
    }

    // ローカルストレージから状態をロード
    loadState() {
        const saved = localStorage.getItem('gameState');
        if (saved) {
            const data = JSON.parse(saved);
            Object.assign(this, data);
        }
        // scenarioProgressが存在しない場合は初期化
        if (!this.scenarioProgress) {
            this.scenarioProgress = {};
        }
    }

    // ローカルストレージに状態を保存
    saveState() {
        localStorage.setItem('gameState', JSON.stringify({
            currentScreen: this.currentScreen,
            tutorialStep: this.tutorialStep,
            tutorialCompleted: this.tutorialCompleted,
            unlockedScenarios: this.unlockedScenarios,
            completedScenarios: this.completedScenarios,
            unlockedCharacters: this.unlockedCharacters,
            favoriteCharacter: this.favoriteCharacter,
            currentObjective: this.currentObjective,
            mapLocations: this.mapLocations,
            playingScenarioId: this.playingScenarioId,
            scenarioProgress: this.scenarioProgress
        }));
    }

    // シナリオをアンロック
    unlockScenario(scenarioId) {
        if (!this.unlockedScenarios.includes(scenarioId)) {
            this.unlockedScenarios.push(scenarioId);
            this.saveState();
        }
    }

    // シナリオを完了
    completeScenario(scenarioId) {
        if (!this.completedScenarios.includes(scenarioId)) {
            this.completedScenarios.push(scenarioId);
            this.saveState();
        }
    }

    // キャラクターをアンロック
    unlockCharacter(characterId) {
        if (!this.unlockedCharacters.includes(characterId)) {
            this.unlockedCharacters.push(characterId);
            this.saveState();
        }
    }

    // シナリオ進捗を更新
    updateScenarioProgress(scenarioId, section) {
        if (!this.scenarioProgress[scenarioId] || this.scenarioProgress[scenarioId] < section) {
            this.scenarioProgress[scenarioId] = section;
            this.saveState();
        }
    }

    // シナリオ進捗を取得
    getScenarioProgress(scenarioId) {
        return this.scenarioProgress[scenarioId] || 0;
    }
}
