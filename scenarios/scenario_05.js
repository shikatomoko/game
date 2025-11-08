// シナリオ05: 居住区の部屋
const SCENARIO_05 = {
    id: 'scenario_05',
    title: '居住区の部屋',
    objective: '居住区の部屋を調査する',
    lines: [
        {
            character: 'あなた',
            text: 'この部屋には子供のおもちゃがある...',
            sprite: null,
            background: 'images/backgrounds/child_room.jpg'
        },
        {
            character: '???',
            text: 'それ...私のだよ。',
            sprite: 'images/characters/mysterious_girl_normal.png',
            background: 'images/backgrounds/child_room.jpg'
        },
        {
            character: 'あなた',
            text: '君は...?',
            sprite: null,
            background: 'images/backgrounds/child_room.jpg'
        },
        {
            character: '???',
            text: '私も...よく覚えてないの。でも、ここにいたことは確かなの。',
            sprite: 'images/characters/mysterious_girl_sad.png',
            background: 'images/backgrounds/child_room.jpg'
        }
    ],
    unlocks: []
};
