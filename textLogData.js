// テキストログデータ
const TEXT_LOGS = {
    tutorial: {
        title: 'チュートリアル',
        lines: []
    }
};

// チュートリアルのテキストログを生成
if (typeof TUTORIAL_STEPS !== 'undefined') {
    TEXT_LOGS.tutorial.lines = TUTORIAL_STEPS.map(step => ({
        character: step.character,
        text: step.text
    }));
}

// シナリオのテキストログを生成
if (typeof SCENARIOS !== 'undefined') {
    SCENARIOS.forEach(scenario => {
        TEXT_LOGS[scenario.id] = {
            title: scenario.title,
            lines: scenario.lines.map(line => ({
                character: line.character,
                text: line.text
            }))
        };
    });
}
