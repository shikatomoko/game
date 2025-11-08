// シナリオ04: 研究室
const SCENARIO_04 = {
    id: 'scenario_04',
    title: '研究室',
    objective: '研究室の詳細を調査する',
    lines: [
        {
            character: '研究者',
            text: 'ああ...また来たのか、観測者よ。',
            sprite: 'images/characters/researcher_normal.png',
            background: 'images/backgrounds/laboratory.jpg'
        },
        {
            character: 'あなた',
            text: 'あなたは...?',
            sprite: null,
            background: 'images/backgrounds/laboratory.jpg'
        },
        {
            character: '研究者',
            text: '私はかつてここで研究をしていた者だ。今は...もう存在しないがね。',
            sprite: 'images/characters/researcher_sad.png',
            background: 'images/backgrounds/laboratory.jpg'
        },
        {
            character: '研究者',
            text: 'この研究所で起きたこと...全てを記録してくれ。それが君の使命だ。',
            sprite: 'images/characters/researcher_normal.png',
            background: 'images/backgrounds/laboratory.jpg'
        }
    ],
    unlocks: []
};
