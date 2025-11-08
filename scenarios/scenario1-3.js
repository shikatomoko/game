// シナリオ01-3: 拷問シーン
const SCENARIO_01_3 = {
    id: 'scenario_01-3',
    title: '拷問屋３',
    objective: '拷問屋を調査する',
    sections: 1,
    lines: [ 
        {
            character: '陽炎',
            text: 'えーっと、とりあえずこいつはここに寝かせといて〜。あれ、まだ気絶してんのかな。',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
            section: 1
        },
        {
            character: '陽炎',
            text: '起きて、起きろよ。起きないと……そうだな、お前の小指捥いじゃうぞ〜',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: '……や、めろ！',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'やっぱり起きてる。寝たふりなんかするなよ',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: 'なに、お前……ここ、どこだよ',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'ここ？　ここは俺の〜えっと、作業場？　そう、ようこそウチの店に！　誠心誠意を込めて最高のサービスをお届けしてあげるよ',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: 'お前……お前が、陽炎か？',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'あれ、なんで俺の名前知ってんの？　俺ってそんなに有名人だったっけ',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: '誰だってお前のことは知ってるよ。呑紅街の、あの悪名高い陽炎だって',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'そう？　確かに俺の仕事の評判はこの街でも轟いてるかもしれないけど、蒼殉街のやつにまで知られてるとは思わなかったな',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: 'それで、俺に何をするつもりだよ',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: '俺の名前知ってるなら、聞かなくてもそんなことわかるんじゃない？',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'ふ〜ちゃんがさ、お前がすんなりお話ししてくれないから困ってるんだって。だから俺のところに連れて来られちゃったんだってさ',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: '一応聞いとくけど、素直に全部知ってること話すつもりはある？　あるんなら、その綺麗な身体のままで返してやってもいいんだけど',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: '……',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: '了解。交渉決裂ってことな。じゃあ俺もやるしかないかあ',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: '大丈夫。俺がちゃあんと、お前のこと可愛くしてあげるからね',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'ねえふ〜ちゃん、これ、殺したらだめなやつ？',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '風花',
            text: '別に。特に生かしておく価値もないですから。陽炎さんの好きにしていいですよ',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'そっか。なら色々試してみないとな。えっと、じゃあまずは普通に爪でも剥いでみる？',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: '……っ！',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'あれ、案外我慢強いな。蒼殉街の奴らってこういう拷問に耐える教育でも直々にされてんの？',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'まあいっか。まだ一枚目だし。なあ、これ以上痛い思いしたくなかったらさ、早く俺たちにいろいろ教えろよ',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: '最近そっちの街で起きてる揉め事のこととか、そっちの街の「教祖様」の詳細とか、聞きたいことはたくさんあるんだよな',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: '教祖様の御名をお前如きが口にするな！',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'はいはい、わかったわかった。本当蒼殉街の奴らってみんなこうだよな。口を開けば教祖様教祖様って',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'でもさ、多分俺の方がその教祖様ってやつより、お前のこと可愛くしてあげられるよ',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'これで2本目で、3本、4本……キリよく5まで行こうか。どう、話す気になった？',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: '……だま、れ',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: '結構頑張るな。やっぱり信仰は強しってやつ？　俺そういう信仰とかよく分かんねえんだけど',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: 'お前のような穢れた人間に、我らの信仰の理解などできるはずもない……！',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'お、まだまだ元気じゃん。じゃあ次はどうしようか、骨とか折る？',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: '……っ、やめ、',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'これでもう右腕は動かせないな。どう、まだ話す気にならない？',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'だめそうだね。じゃあちょっと趣向を変えよう。最近俺、こういうのハマっててさ',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'こうやって濡らした布を鼻と口の上に置くわけ。ほら、そうするとちょっとずつ息が吸いにくくなって、苦しくなって、ね？',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'いいじゃん。どうしたの、そんな泣きそうな顔して',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: 'や、だ……いやだたすけて',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'ちゃんとお前がいろんなこと教えてくれれば助けてあげられるんだけど',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: '死にたくない、やだ、たすけてきょうそ、さま……！　俺もう、水槽は嫌だ、！',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: 'なんで。おれ、ちゃんと、教祖様の言う通りにしたの、に',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: 'ごめんなさい。ちゃんと、罪はつぐなうから、',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'あれ、急に壊れちゃった？　こういう苦しいの苦手だった？　それとも、う〜ん、何かのトラウマだったとか？',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'そっちの教祖様ってさ、信者を水槽の中に沈めるとかいういい趣味してたりすんの？',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '男',
            text: 'ごめんなさい、だって、おれ・・・',
            background: 'images/backgrounds/red/torture/torture.png',
        },
        {
            character: '陽炎',
            text: 'あ～もう、まともに話もしてくれないじゃん。まあいっか、なあ、ここまで壊れたならいろいろ俺に、洗いざらい教えてくれたっていいよな',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
        },
    ],
    unlocks: ['scenario_01-4']
};