// シナリオ01-1: 拷問屋の調査開始
const SCENARIO_01_1 = {
    id: 'scenario_01-1',
    title: '拷問屋１',
    objective: '拷問屋を調査する',
    sections: 1,
    lines: [
        {
            character: 'ヒトヨ',
            text: 'まずは試しにこの廃墟を調べてみるとよ',
            sprite: 'images/characters/hitoyo.png',
            background: 'images/backgrounds/red/broken/torture.png',
            section: 1
        },
        {
            character: 'ヒトヨ',
            text: 'ほら、そこに看板が落ちてるとよ。ここは昔は拷問屋だったらしいとよね',
            sprite: 'images/characters/hitoyo.png',
            background: 'images/backgrounds/red/broken/torture.png'
        },
        {
            character: 'ヒトヨ',
            text: 'そんなにこの店のことが気になるなら、ここをそのカメラで写真に撮ってみるといいとよ。ヒトヨが説明するよりもその方が早いとよ',
            sprite: 'images/characters/hitoyo.png',
            background: 'images/backgrounds/red/broken/torture.png',
        },
        {
            character: 'ヒトヨ',
            text: 'お前が持ってるカメラは、被写体の過去の記憶を映し出すことができるとよ。それを使って過去の断片を拾い集めて、この街の情報を集めるとよ。',
            sprite: 'images/characters/hitoyo.png',
            background: 'images/backgrounds/red/broken/torture.png'
        },
        {
            character: 'ヒトヨ',
            text: 'それがお前の仕事だって、さっき説明したばっかりだとよ？',
            sprite: 'images/characters/hitoyo.png',
            background: 'images/backgrounds/red/broken/torture.png'
        },
        {
            character: 'ヒトヨ',
            text: '試しにここでやってみるとよ。そうしたらこの街のことだって少しは分かるとよ',
            sprite: 'images/characters/hitoyo.png',
            background: 'images/backgrounds/red/broken/torture.png',
            cameraEnabled: true,
            cameraData: {
                title: '呑紅街０１',
                message: '過去データ:呑紅街０１を発見しました。再生しますか？'
            }
        },
       
    ],

    unlocks: ['scenario_01-2']
};  
