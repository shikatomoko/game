// シナリオ01: 廃墟の入口
const SCENARIO_01 = {
    id: 'scenario_01',
    title: '拷問屋１',
    objective: '廃墟の入口を調査する',
    sections: 4,  // セクション数を定義
    lines: [
        {
            character: 'ヒトヨ',
            text: 'まずは試しにこの廃墟を調べてみるとよ',
            sprite: 'images/characters/hitoyo.png',
            background: 'images/backgrounds/red/broken/torture.png',
            section: 1  // セクション1開始
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
            section: 2  // セクション2開始
        },
        {
            character: '陽炎',
            text: 'ん〜なあに？　耳元で騒ぐなよ。せっかく俺、気持ちよく寝てたところだったのに',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: '騒がれたくないんだったら、ちゃんと私が起こしに来ないで済むように自分でなんとかしたらどうなんですか。',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'ほら、寝てる間に大事な書類も下敷きにしちゃってるし！',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'んー、何そのぐちゃぐちゃの紙。ゴミならそこのゴミ箱に捨てといてよ',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'これ、先週までに提出って言われてた申請書類じゃないですか。ちゃんと出したか私、わざわざ確認してあげたのに',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'そうだったっけ？　えーっと、そんな大事なやつならふ〜ちゃんが代わりに提出しといてよ。俺、その間にここで昼寝の続きしとくから',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'いい加減にしてください。私って別に陽炎さんの雑用係じゃないんですから。私には私の仕事があるし',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'とか言って、ちゃんと毎日俺の世話焼きに来てくれてるのに？',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'うるさい！　私だって好きでやってるわけじゃないんですから',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'とにかく、次の仕事の人ここに置いていきますから。今日中に片付けてください',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'わかったってば。えっと、これ？',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'そう。私も一通り聞き出したけど、でも、無駄に口が固くて',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'ふうん。で、ふ〜ちゃんはこいつから何を聞き出したいの？　そんなに大事そうなこと、知ってそうな顔には見えないけど',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: '確かに明らかに下っ端ですけど、でもあの蒼殉街がわざわざうちの区画まで潜り込ませてきたってことには何かの意味があるはずです',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: '何かって、具体的には？',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'ほら、最近蒼殉街の方で何か揉め事が起きてるって噂になってるでしょ。この前の会議でも話題に上がってたじゃないですか',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'そうだったっけ？',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'そうです！　まさかまた寝てて聞いてなかったなんて言わないですよね',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: '……とにかく、こいつから話を聞き出せばいいんだよね。わかったわかった。りょ〜かい',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: '本当にいい加減にしないと、そのうちちゃんと怒られますよ',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'その時はふ〜ちゃんが庇ってよ。ね？',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'なんで私がそんなことしなきゃいけないの……',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'だってふ〜ちゃんは俺の世話焼き係だから？',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'うるさいし違うって言ってるでしょ！　とにかく早く、仕事してくださいよ',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'はいはい、わかったってば。ね、ふ〜ちゃんは仕事してくとこ見てく？',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: '別に拷問してるところなんて見てても大して面白くないけど……。でもまあ、私もこいつの持ってる情報は気になってるし',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'それに、陽炎さんがちゃんと仕事するか見張ってないといけないし！',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'そうだねえ、ちゃんとふ〜ちゃんが見守ってくれてないと、俺また昼寝の続きしちゃうかも',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'それじゃあ本当に困るんだって。今日中にこの仕事は片付けちゃいたいんですから',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'わかったって。じゃあふ〜ちゃんはその辺の椅子とかに座って見ててよ。ほら、じゃないとせっかくの可愛い服が血とかで汚れちゃうかもしれないから',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: '〜またそうやって、すぐ可愛いとか言うし……！',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'なあに、ふ〜ちゃん',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'なんでもないです！',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'そう？　ならいいけど。ん〜じゃあ俺も久々にちゃんと仕事するか',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'えーっと、とりあえずこいつはここに寝かせといて〜。あれ、まだ気絶してんのかな。',
            sprite: 'images/characters/kagerou.png',
            background: 'images/backgrounds/red/torture/torture.png',
            section: 3  // セクション3開始（拷問シーン）
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
        {
            character: '風花',
            text: 'つまりまとめると、向こうの街の大切な儀式に使う鏡が破損したってことですか？',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
            section: 4  // セクション4開始（後始末シーン）
        },
        {
            character: '陽炎',
            text: 'って言ってたね。まあ俺が聞き出せたのはそんだけ。それのせいでいろいろ上が揉めてて、今度新しい儀式をしなきゃいけないだとかなんだとか',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'ふうん、そんな話初めて聞いたな',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'ふ～ちゃんも聞いたことなかったの？　そんなに耳いいのに',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: '耳が良くても誰かが話してくれなきゃ聞こえないんですよ。うん、だからこれだけのことが分かったのは結構な収穫ですね',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'そう～？　じゃあ今日の俺は結構頑張ったってことで、もう昼寝の続きしていい？',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'だ～め～で～す！　大体終わった死体の後始末はちゃんとつけたんですか？　また部屋の隅から腐ったのが出てくるとか、私絶対嫌ですからね',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'ん～、明日やるから',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: '絶対ダメ！　今すぐやって！',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'わかったって。じゃあさ、代わりにご褒美でふ～ちゃんのしっぽ触らせてよ',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'はあ？　なんで私がそんなこと、',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'ね、ちょっとだけだからさ。ふ～ちゃんのしっぽ、ふさふさで触りごこち良くて好きなんだよね',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: '・・・ちょっとだけですからね',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'わかってるわかってる。ふ～ちゃんのしっぽってさ、この辺も神経通ってたりすんの？',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'こら、勝手にまさぐらないで！',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'え、ふ～ちゃんが触っていいって言ったんじゃん',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'いいって言ったけど、そこはだめっていうか、とにかくだめ！',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'あ～もうそんなに暴れないでよ。結局全然触れなかったじゃん',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: '今日の分はもう売り切れです！',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'なにそれ。ふ～ちゃんのケチ',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'と、に、か、く、そっちの部屋の死体はちゃんと自分でお片付けしといてくださいね。私、この分の報告書上げてきますから',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '陽炎',
            text: 'はーい、じゃあよろしく。それからおやすみ～',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
        {
            character: '風花',
            text: 'だから寝るなって言ってんでしょ！',
            sprite: [
            { image: 'images/characters/huuka.png', position: 'left' },
            { image: 'images/characters/kagerou.png', position: 'right' }
            ],
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
        },
    ],
    unlocks: ['scenario_02', 'scenario_03']
};
