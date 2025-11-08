// シナリオ01-2: 風花と陽炎の会話
const SCENARIO_01_2 = {
    id: 'scenario_01-2',
    title: '拷問屋２',
    objective: '拷問屋を調査する',
    sections: 1,
    lines: [
         {
            character: '風花',
            text: '陽炎さん、何寝てるんですか！　もうお昼ですよ！　仕事の時間です！',
            sprite: 'images/characters/huuka.png',
            background: 'images/backgrounds/red/torture/Torture Chamber (inside).png',
            section: 1
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
    ],
    unlocks: ['scenario_01-3']
};