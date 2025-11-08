// シナリオ02: 研究棟への道
const SCENARIO_02 = {
    id: 'scenario_02',
    title: '研究棟への道',
    objective: '研究棟を調査する',
    lines: [
        {
            character: 'あなた',
            text: '左の通路を進んでいくと...研究棟の入口が見えてきた。',
            sprite: null,
            background: 'images/backgrounds/research_hallway.jpg'
        },
        {
            character: '???',
            text: '...誰か...いるの?',
            sprite: 'images/characters/mysterious_girl_shadow.png',
            background: 'images/backgrounds/research_hallway.jpg'
        },
        {
            character: 'あなた',
            text: '!? 誰かの声が聞こえた気がする...',
            sprite: null,
            background: 'images/backgrounds/research_hallway.jpg'
        },
        {
            character: 'あなた',
            text: '(カメラで周囲を撮影しておこう)',
            sprite: null,
            background: 'images/backgrounds/research_hallway.jpg'
        }
    ],
    unlocks: ['scenario_04']
};
