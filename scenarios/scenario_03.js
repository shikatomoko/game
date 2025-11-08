// シナリオ03: 居住区への道
const SCENARIO_03 = {
    id: 'scenario_03',
    title: '居住区への道',
    objective: '居住区を調査する',
    lines: [
        {
            character: 'あなた',
            text: '右の通路には生活用品が散乱している...',
            sprite: null,
            background: 'images/backgrounds/residence_hallway.jpg'
        },
        {
            character: 'あなた',
            text: '誰かが急いでここを出て行ったのだろうか?',
            sprite: null,
            background: 'images/backgrounds/residence_hallway.jpg'
        },
        {
            character: 'あなた',
            text: '床に日記が落ちている。「最後の日まであと3日...実験は失敗だった」',
            sprite: null,
            background: 'images/backgrounds/residence_hallway.jpg'
        }
    ],
    unlocks: ['scenario_05']
};
