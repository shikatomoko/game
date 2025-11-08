// シナリオ01: 廃墟の入口
const SCENARIO_01 = {
    id: 'scenario_01',
    title: '拷問屋',
    objective: '廃墟の入口を調査する',
    lines: [
        {
            character: 'ヒトヨ',
            text: 'まずは試しにこの廃墟を調べてみるとよ',
            sprite: 'images/characters/hitoyo.png',
            background: 'images/backgrounds/red/broken/torture.png'
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
        {
            character: '風花',
            text: '陽炎さん、何寝てるんですか！　もうお昼ですよ！　仕事の時間です！',
            sprite: 'images/characters/huuka.png',
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'あれ～なに？　耳元で騒がないでよ。せっかく俺、気持ちよく寝てたところだったのに',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
    ],
    unlocks: ['scenario_02', 'scenario_03']
};
