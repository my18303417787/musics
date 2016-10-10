$(function(){
  var music=[
        {src:'mp3/1.mp3',name:'渡红尘',geshou:'张碧晨',zsj:'04:47',yinzhi:'无损',lyrs:[
            {time:"00:01",lyr:"渡红尘"},
            {time:"00:04",lyr:"网游《蜀山缥缈录》主题曲"},
            {time:"00:07",lyr:"作词：潇彬"},
            {time:"00:10",lyr:"作曲：覃桢  编曲：薛琳可"},
            {time:"00:13",lyr:"演唱：张碧晨"},
            {time:"00:24",lyr:"荒草枯木 雪纷纷"},
            {time:"00:27",lyr:"萧索多少青春"},
            {time:"00:30",lyr:"寒夜茫茫 一盏残灯"},
            {time:"00:36",lyr:"照不尽离别的人"},
            {time:"00:39",lyr:"谁前世用尽缘分"},
            {time:"00:42",lyr:"今生相遇 不能相认"},
            {time:"00:48",lyr:"荒烟孤城 记忆深"},
            {time:"00:51",lyr:"爱勾走痴人魂"},
            {time:"00:54",lyr:"琴声阵阵 缥缈红尘"},
            {time:"01:00",lyr:"我用千年的情深"},
            {time:"01:03",lyr:"几世修炼这一生"},
            {time:"01:06",lyr:"只为寻回 你的人"},
            {time:"01:12",lyr:"我过蜀山 渡过爱和恨"},
            {time:"01:18",lyr:"却渡不过 命中和你的离分"},
            {time:"01:24",lyr:"而关于你的回忆 一步一生根"},
            {time:"01:31",lyr:"是我还过分的认真"},
            {time:"01:36",lyr:"我拿三生 用来渡红尘"},
            {time:"01:42",lyr:"爱上你不问苦海多深"},
            {time:"01:48",lyr:"我在轮回里等"},
            {time:"01:51",lyr:"等你的承认"},
            {time:"01:54",lyr:"等你的一个 转身"},
            {time:"02:21",lyr:"荒烟孤城 记忆深"},
            {time:"02:24",lyr:"爱勾走痴人魂"},
            {time:"02:27",lyr:"琴声阵阵 缥缈红尘"},
            {time:"02:33",lyr:"我用千年的情深"},
            {time:"02:36",lyr:"几世修炼这一生"},
            {time:"02:39",lyr:"只为寻回 你的人"},
            {time:"02:45",lyr:"我过蜀山 渡过爱和恨"},
            {time:"02:51",lyr:"却渡不过 命中和你的离分"},
            {time:"02:57",lyr:"而关于你的回忆 一步一生根"},
            {time:"03:04",lyr:"是我还过分的认真"},
            {time:"03:09",lyr:"我拿三生 用来渡红尘"},
            {time:"03:15",lyr:"爱上你不问苦海多深"},
            {time:"03:21",lyr:"我在轮回里等"},
            {time:"03:24",lyr:"等你的承认"},
            {time:"03:27",lyr:"等你的一个 转身"},
            {time:"03:33",lyr:"我过蜀山 渡过爱和恨"},
            {time:"03:40",lyr:"却渡不过 命中和你的离分"},
            {time:"03:46",lyr:"而关于你的回忆 一步一生根"},
            {time:"03:52",lyr:"是我还过分的认真"},
            {time:"03:57",lyr:"我拿三生 用来渡红尘"},
            {time:"04:03",lyr:"爱上你不问苦海多深"},
            {time:"04:09",lyr:"我在轮回里等"},
            {time:"04:12",lyr:"等你的承认"},
            {time:"04:15",lyr:"等你的一个 转身"}
        ]},
    {src:'mp3/2.mp3',name:'白芍花开',geshou:'张碧晨',zsj:'05:08',yinzhi:'无损',lyrs:[
        {time:"00:03",lyr:"白芍花开"},
        {time:"00:08",lyr:"词曲：程堃"},
        {time:"00:12",lyr:"演唱：张碧晨"},
        {time:"00:24",lyr:"总梦见那年白芍花开"},
        {time:"00:32",lyr:"我们牵着手走在白色花海"},
        {time:"00:40",lyr:"那时天空那么蓝"},
        {time:"00:44",lyr:"时间那么慢"},
        {time:"00:47",lyr:"记忆中的味道那么甜"},
        {time:"00:56",lyr:"再次梦见那片白色海洋"},
        {time:"01:04",lyr:"仿佛一切停止在那瞬间"},
        {time:"01:11",lyr:"刻着你我的青春"},
        {time:"01:16",lyr:"白色的约定"},
        {time:"01:19",lyr:"我不愿醒过来"},
        {time:"01:23",lyr:"这是最美丽的永远"},
        {time:"01:28",lyr:"转眼多年青涩渐远"},
        {time:"01:32",lyr:"一切恍如昨天"},
        {time:"01:36",lyr:"转过身去依然清晰的笑脸"},
        {time:"01:43",lyr:"就像那白色的约定"},
        {time:"01:48",lyr:"纯洁而美丽"},
        {time:"01:51",lyr:"牵挂着彼此之间"},
        {time:"01:55",lyr:"不变的誓言"},
        {time:"02:00",lyr:"再次相遇白色花海"},
        {time:"02:04",lyr:"拥抱纯洁的爱"},
        {time:"02:08",lyr:"淡淡的绽放在初恋的地点"},
        {time:"02:15",lyr:"思念落在纯净之源"},
        {time:"02:20",lyr:"不变的誓言"},
        {time:"02:23",lyr:"再次回头发现"},
        {time:"02:26",lyr:"身后的人是你"},
        {time:"02:48",lyr:"再次梦见那片白色海洋"},
        {time:"02:56",lyr:"仿佛一切停止在那瞬间"},
        {time:"03:04",lyr:"刻着你我的青春"},
        {time:"03:08",lyr:"白色的约定"},
        {time:"03:11",lyr:"我不愿醒过来"},
        {time:"03:15",lyr:"这是最美丽的永远"},
        {time:"03:20",lyr:"转眼多年青涩渐远"},
        {time:"03:24",lyr:"一切恍如昨天"},
        {time:"03:28",lyr:"转过身去依然清晰的笑脸"},
        {time:"03:35",lyr:"就像那白色的约定"},
        {time:"03:40",lyr:"纯洁而美丽"},
        {time:"03:43",lyr:"牵挂着彼此之间"},
        {time:"03:47",lyr:"不变的誓言"},
        {time:"04:08",lyr:"再次相遇白色花海"},
        {time:"04:12",lyr:"拥抱纯洁的爱"},
        {time:"04:16",lyr:"淡淡的绽放在初恋的地点"},
        {time:"04:23",lyr:"思念落在纯净之源"},
        {time:"04:28",lyr:"不变的誓言"},
        {time:"04:31",lyr:"再次回头发现"},
        {time:"04:34",lyr:"身后的人是你"},
        {time:"04:47",lyr:"再次回头发现"},
        {time:"04:50",lyr:"身后的人是你"}
    ] },
    {src:'mp3/3.mp3',name:'红玫瑰',geshou:'陈奕迅',zsj:'04:00',yinzhi:'无损',lyrs:[
        {time:"00:02",lyr:"红玫瑰"},
        {time:"00:04",lyr:"演唱：陈奕迅"},
        {time:"00:16",lyr:"梦里梦到醒不来的梦"},
        {time:"00:18",lyr:"红线里被软禁的红"},
        {time:"00:23",lyr:"所有刺激剩下疲乏的痛"},
        {time:"00:26",lyr:"再无动于衷"},
        {time:"00:30",lyr:"从背后抱你的时候 "},
        {time:"00:34",lyr:"期待的却是她的面容"},
        {time:"00:37",lyr:"说来实在嘲讽"},
        {time:"00:40",lyr:"我不太懂"},
        {time:"00:41",lyr:"偏渴望你懂"},
        {time:"00:44",lyr:"是否幸福轻得太沉重"},
        {time:"00:48",lyr:"过度使用不痒不痛 "},
        {time:"00:52",lyr:"烂熟透红空洞了的瞳孔"},
        {time:"00:56",lyr:"终于掏空 终于有始无终"},
        {time:"00:59",lyr:"得不到的永远在骚动"},
        {time:"01:03",lyr:"被偏爱的 都有恃无恐"},
        {time:"01:07",lyc:"玫瑰的红 容易受伤的梦"},
        {time:"01:11",lyr:"握在手中却流失于指缝"},
        {time:"01:15",lyr:"又落空"},
        {time:"01:31",lyr:"红是朱砂痣烙印心口"},
        {time:"01:34",lyr:"红是蚊子血般平庸"},
        {time:"01:38",lyr:"时间美化那仅有的悸动"},　
        {time:"01:41",lyr:"也磨平激动"},
        {time:"01:45",lyr:"从背后抱你的时候"},
        {time:"01:49",lyr:"期待的却是她的面容"},
        {time:"01:52",lyr:"说来实在嘲讽 "},
        {time:"01:55",lyr:"我不太懂" },
        {time:"01:56",lyr:"偏渴望你懂"},
        {time:"01:59",lyr:"是否幸福轻得太沉重"},
        {time:"02:03",lyr:"过度使用 不痒不痛"},
        {time:"02:07",lyr:"烂熟透红空洞了的瞳孔"},
        {time:"02:11",lyr:"终于掏空 终于有始无终"},
        {time:"02:14",lyr:"得不到的永远在骚动"},
        {time:"02:18",lyr:"被偏爱的都有恃无恐"},
        {time:"02:22",lyr:"玫瑰的红 容易受伤的梦"},
        {time:"02:26",lyr:"握在手中却流失于指缝"},
        {time:"02:29",lyr:"又落空"},
        {time:"02:44",lyr:"是否说爱都太过沉重"},
        {time:"02:48",lyr:"过度使用不痒不痛"},
        {time:"02:52",lyr:"烧得火红 蛇行缠绕心中"},
        {time:"02:56",lyr:"终于冷冻终于有始无终"},
        {time:"02:59",lyr:"得不到的永远在骚动"},
        {time:"03:03",lyr:"被偏爱的都有恃无恐"},
        {time:"03:07",lyr:"玫瑰的红 容易受伤的梦"},
        {time:"03:11",lyr:"握在手中却流失于指缝"},
        {time:"03:15",lyr:"得不到的永远在骚动"},
        {time:"03:18",lyr:"被偏爱的 都有恃无恐"},
        {time:"03:22",lyr:"玫瑰的红 伤口绽放的梦"},
        {time:"03:26",lyr:"握在手中却流失于指缝"},
        {time:"03:30",lyr:"再落空"}
    ]},
    {src:'mp3/4.mp3',name:'时间都去哪了',geshou:'金霖',zsj:'04:18',yinzhi:'无损',lyrs:[
        {time:"00:01",lyr:"时间都去哪儿了"},
        {time:"00:04",lyr:"演唱：金霖"},
        {time:"00:23",lyr:"门前老树长新芽 "},
        {time:"00:28",lyr:"院里枯木又开花 "},
        {time:"00:32",lyr:"半生存了好多话"},
        {time:"00:37",lyr:"藏进了满头白发"},
        {time:"00:46",lyr:"记忆中的小脚丫"},
        {time:"00:50",lyr:"肉嘟嘟的小嘴巴"},
        {time:"00:55",lyr:"一生把爱交给他"},
        {time:"01:00",lyr:"只为那一声爸妈"},
        {time:"01:06",lyr:"时间都去哪儿了"},
        {time:"01:10",lyr:"还没好好感受年轻就老了"},
        {time:"01:16",lyr:"生儿养女一辈子"},
        {time:"01:22",lyr:"满脑子都是孩子哭了笑了"},
        {time:"01:26",lyr:"时间都去哪儿了"},
        {time:"01:31",lyr:"还没好好看看你眼睛就花了"},
        {time:"01:36",lyr:"柴米油盐半辈子"},
        {time:"01:42",lyr:"转眼就只剩下满脸的皱纹了"},
        {time:"02:11",lyr:"记忆中的小脚丫"},
        {time:"02:16",lyr:"肉嘟嘟的小嘴巴"},
        {time:"02:21",lyr:"一生把爱交给他"},
        {time:"02:26",lyr:"只为那一声爸妈"},
        {time:"02:32",lyr:"时间都去哪儿了"},
        {time:"02:37",lyr:"还没好好感受年轻就老了"},
        {time:"02:43",lyr:"生儿养女一辈子"},
        {time:"02:48",lyr:"满脑子都是孩子哭了笑了"},
        {time:"02:53",lyr:"时间都去哪儿了"},
        {time:"02:57",lyr:"还没好好看看你眼睛就花了"},
        {time:"03:03",lyr:"柴米油盐半辈子"},
        {time:"03:08",lyr:"转眼就只剩下满脸的皱纹了"},
        {time:"03:18",lyr:"时间都去哪儿了"},
        {time:"03:23",lyr:"还没好好感受年轻就老了"},
        {time:"03:29",lyr:"生儿养女一辈子"},
        {time:"03:34",lyr:"满脑子都是孩子哭了笑了"},
        {time:"03:39",lyr:"时间都去哪儿了"},
        {time:"03:43",lyr:"还没好好看看你眼睛就花了"},
        {time:"03:49",lyr:"柴米油盐半辈子"},
        {time:"03:55",lyr:"转眼就只剩下满脸的皱纹了"},
    ]},
    {src:'mp3/5.mp3',name:'为什么',geshou:'印子月',zsj:'03:27',yinzhi:'无损',lyrs:[
        {time:"00:01",lyr:"为什么"},
        {time:"00:05",lyr:"词曲：印子月"},
        {time:"00:07",lyr:"演唱：印子月&徐乐同"},
        {time:"00:11",lyr:"印子月："},
        {time:"00:12",lyr:"我曾不止一次彷徨"},
        {time:"00:15",lyr:"可能不自量力了吧"},
        {time:"00:18",lyr:"期待的爱情太远太难实现啦"},
        {time:"00:23",lyr:"做着王子公主的梦"},
        {time:"00:26",lyr:"现实中我只是观众"},
        {time:"00:29",lyr:"等待着像童话般 浪漫的邂逅"},
        {time:"00:34",lyr:"徐乐同："},
        {time:"00:34",lyr:"直到遇见了你"},
        {time:"00:38",lyr:"我才更坚定"},
        {time:"00:41",lyr:"做更完美的自己"},
        {time:"00:45",lyr:"请你容许我这般任性的勇气"},
        {time:"00:50",lyr:"合："},
        {time:"00:51",lyr:"只想只想要追到你"},
        {time:"00:55",lyr:"别再问为什么 问为什么"},
        {time:"00:58",lyr:"只管奔跑吧"},
        {time:"01:00",lyr:"我还能为什么 能为什么"},
        {time:"01:03",lyr:"只因你是我方向"},
        {time:"01:06",lyr:"别再问为什么 问为什么"},
        {time:"01:09",lyr:"放肆去爱吧"},
        {time:"01:11",lyr:"你是我最强大的力量"},
        {time:"01:16",lyr:"印子月："},
        {time:"01:23",lyr:"给你的爱太过明显"},
        {time:"01:26",lyr:"我藏不住的小胆怯"},
        {time:"01:29",lyr:"每次见面我就控制不了心跳"},
        {time:"01:34",lyr:"朋友们都早已发现"},
        {time:"01:37",lyr:"为什么你还没察觉"},
        {time:"01:40",lyr:"还是故意考验我对你的坚决"},
        {time:"01:45",lyr:"徐乐同："},
        {time:"01:45",lyr:"只要一想到你"},
        {time:"01:49",lyr:"我就更用心"},
        {time:"01:52",lyr:"做更美好的自己"},
        {time:"01:55",lyr:"请你容许我这般任性的勇气"},
        {time:"02:01",lyr:"合："},
        {time:"02:02",lyr:"一定一定要追到你"},
        {time:"02:06",lyr:"别再问为什么 问为什么"},
        {time:"02:09",lyr:"只管奔跑吧"},
        {time:"02:11",lyr:"我还能为什么 能为什么"},
        {time:"02:14",lyr:"只因你是我方向"},
        {time:"02:17",lyr:"别再问为什么 问为什么"},
        {time:"02:20",lyr:"放肆去爱吧"},
        {time:"02:22",lyr:"你是我最强大的力量"},
        {time:"02:50",lyr:"别再问为什么 问为什么"},
        {time:"02:53",lyr:"只管奔跑吧"},
        {time:"02:55",lyr:"我还能为什么 能为什么"},
        {time:"02:58",lyr:"只因你是我方向"},
        {time:"03:00",lyr:"别再问为什么 问为什么"},
        {time:"03:03",lyr:"放肆去爱吧"},
        {time:"03:06",lyr:"你是我最强大的力量"}
    ]},
    {src:'mp3/6.mp3',name:'我可以忘记你',geshou:'张碧晨',zsj:'04:00',yinzhi:'无损',lyrs:[
        {time:"00:00",lyr:"我可以忘记你 - 张碧晨"},
        {time:"00:01",lyr:"词：张楚翘"},
        {time:"00:02",lyr:"曲：伍乐城"},
        {time:"00:18",lyr:"付出的受伤的通通都是你"},
        {time:"00:23",lyr:"自私的残忍的似乎只有我"},
        {time:"00:28",lyr:"可惜我并不难过"},
        {time:"00:31",lyr:"我仅存的失落 是再不怕寂寞"},
        {time:"00:35",lyr:"想见的不见的都失去联络"},
        {time:"00:40",lyr:"剩下的多余的都不要再说"},
        {time:"00:45",lyr:"得到的已经太多"},
        {time:"00:48",lyr:"你安然去生活 我安静来存活"},
        {time:"00:56",lyr:"没有爱过你 我最爱是自己"},
        {time:"01:00",lyr:"借感情满足我好奇"},
        {time:"01:05",lyr:"我只敢玩游戏"},
        {time:"01:09",lyr:"对不起 不要介意"},
        {time:"01:12",lyr:"我没有爱过你"},
        {time:"01:15",lyr:"只是爱怀念着你"},
        {time:"01:17",lyr:"试一试我能多痴迷"},
        {time:"01:22",lyr:"我可以忘记你"},
        {time:"01:26",lyr:"不怕想起 才算是胜利"},
        {time:"01:53",lyr:"愚蠢的疯狂的有没有白费"},
        {time:"01:57",lyr:"幸福的痛苦的一样掉眼泪"},
        {time:"02:03",lyr:"就缺了一句再会"},
        {time:"02:05",lyr:"我们没有机会 为道别而伤悲"},
        {time:"02:10",lyr:"为什么我们总是觉得好疲惫"},
        {time:"02:14",lyr:"为什么我们走得这样的狼狈"},
        {time:"02:22",lyr:"我没有爱过你 我最爱是自己"},
        {time:"02:26",lyr:"借感情满足我好奇"},
        {time:"02:31",lyr:"我只敢玩游戏"},
        {time:"02:35",lyr:"对不起 不要介意"},
        {time:"02:39",lyr:"我没有爱过你 只是爱怀念着你"},
        {time:"02:44",lyr:"试一试我能多痴迷"},
        {time:"02:49",lyr:"我可以忘记你"},
        {time:"02:53",lyr:"不怕想起 才算是胜利"},
        {time:"03:01",lyr:"没有爱过你 我最爱是自己"},
        {time:"03:05",lyr:"再苦也与你没关系"},
        {time:"03:10",lyr:"不管你在哪里"},
        {time:"03:14",lyr:"那回忆 留在心底"},
        {time:"03:18",lyr:"我没有爱过你 只是爱怀念着你"},
        {time:"03:22",lyr:"试一试谁能不放弃"},
        {time:"03:28",lyr:"我可以忘记你"},
        {time:"03:32",lyr:"不过更想 保守这秘密"},
        {time:"03:41",lyr:"不过更想 保守这秘密"}

    ]},
      {src:'mp3/7.mp3',name:'我的梦想',geshou:'王小袁',zsj:'04:05',yinzhi:'无损',lyrs:[

          {time:"00:00",lyr:"我的梦想"},
          {time:"00:06",lyr:"词曲：王小袁 "},
          {time:"00:11",lyr:"演唱：王小袁 "},
          {time:"00:17",lyr:"动人的旋律 记得 在指尖弹奏 梦想"},
          {time:"00:21",lyr:"谁弹奏旋律 自由 这节奏让谁 停留"},
          {time:"00:25",lyr:"梦想的舞台 期待 沿路的风景 心情"},
          {time:"00:29",lyr:"生活的背景 瓶颈 没有了努力 不行"},
          {time:"00:32",lyr:"My Dream 梦想拉开帷幕"},
          {time:"00:37",lyr:"这 脚 步 抛开所有包袱"},
          {time:"00:40",lyr:"那 温 度 雾前方依然会清楚"},
          {time:"00:50",lyr:"我的付出 牵引着我飞向远处"},
          {time:"00:54",lyr:"唱出来不会麻木"},
          {time:"00:58",lyr:"坚信着梦不能荒芜"},
          {time:"01:04",lyr:"My Dream 梦想拉开帷幕"},
          {time:"01:08",lyr:"这 脚 步 抛开所有包袱"},
          {time:"01:12",lyr:"那 温 度 雾前方依然会清楚"},
          {time:"01:19",lyr:"我的付出 牵引着我飞向远处"},
          {time:"01:27",lyr:"相信梦想 绝不能认输"},
          {time:"01:34",lyr:"因为花季诗意在风中"},
          {time:"01:38",lyr:"因为雨季忧伤在天空"},
          {time:"01:42",lyr:"而我才会分秒都被感动"},
          {time:"01:49",lyr:"有种花开会心痛"},
          {time:"01:53",lyr:"雨过之后的从容"},
          {time:"01:57",lyr:"而我才明白眼泪都不懂"},
          {time:"02:08",lyr:"动人的旋律 记得 在指尖弹奏 梦想"},
          {time:"02:10",lyr:"谁弹奏旋律 自由 这节奏让谁 停留"},
          {time:"02:13",lyr:"梦想的舞台 期待 沿路的风景 心情"},
          {time:"02:17",lyr:"生活的背景 瓶颈 没有了努力 不行"},
          {time:"02:52",lyr:"My Dream 梦想拉开帷幕"},
          {time:"02:56",lyr:"这 脚 步 抛开所有包袱"},
          {time:"03:00",lyr:"那 温 度 雾前方依然会清楚"},
          {time:"03:07",lyr:"我的付出 牵引着我飞向远处"},
          {time:"03:15",lyr:"相信梦想 绝不能认输"},
          {time:"03:22",lyr:"因为花季绽放的笑容"},
          {time:"03:26",lyr:"因为雨季错过的相拥"},
          {time:"03:30",lyr:"而我才会时刻拥有感动"},
          {time:"03:37",lyr:"仰望同一片天空"},
          {time:"03:41",lyr:"有些人眼里朦胧"},
          {time:"03:46",lyr:"而我才明白梦想我最懂"}

      ]},
      {src:'mp3/8.mp3',name:'和你在一起',geshou:'乔任梁',zsj:'04:47',yinzhi:'无损',lyrs:[
          {time:"00:01",lyr:"乔任梁"},
          {time:"00:09",lyr:"和你在一起"},
          {time:"00:20",lyr:"新组合〈琴〉"},
          {time:"00:25",lyr:"和你在一起    乔任梁"},
          {time:"00:30",lyr:"凝视着你的背影"},
          {time:"00:34",lyr:"就快要接近透明"},
          {time:"00:37",lyr:"哭不出来的声音"},
          {time:"00:41",lyr:"它困在心底"},
          {time:"00:44",lyr:"临别时你的眼睛"},
          {time:"00:48",lyr:"像隔着无边距离"},
          {time:"00:52",lyr:"我是真的不忍心"},
          {time:"00:55",lyr:"把你困在原地"},
          {time:"00:59",lyr:"你想给我的美丽"},
          {time:"01:02",lyr:"我只能屏住呼吸"},
          {time:"01:06",lyr:"却隔着空气感受你的痛心"},
          {time:"01:11",lyr:"如果在你明亮的世界里面"},
          {time:"01:15",lyr:"我只是阴影"},
          {time:"01:18",lyr:"如果在你轻柔的嘴角眉间"},
          {time:"01:22",lyr:"装满了风雨"},
          {time:"01:25",lyr:"原谅我实在没有这个勇气对你说一句"},
          {time:"01:32",lyr:"我只想和你永远在一起"},
          {time:"02:00",lyr:"临别时你的眼睛"},
          {time:"02:03",lyr:"像隔着无边的距离"},
          {time:"02:07",lyr:"我是真的不忍心"},
          {time:"02:10",lyr:"把你困在原地"},
          {time:"02:14",lyr:"你想给我的美丽"},
          {time:"02:18",lyr:"我只能屏住呼吸"},
          {time:"02:21",lyr:"却隔着空气感受你的痛心"},
          {time:"02:27",lyr:"如果我不能给你披上一件幸福的外衣"},
          {time:"02:34",lyr:"如果我不能把你捧在手心"},
          {time:"02:37",lyr:"不让你受委屈"},
          {time:"02:40",lyr:"原谅我实在没有这个勇气对你说一句"},
          {time:"02:48",lyr:"我只想和你永远在一起"},
          {time:"02:55",lyr:"如果在你明亮的世界里面"},
          {time:"02:59",lyr:"我只是阴影"},
          {time:"03:02",lyr:"如果在你轻柔的嘴角眉间"},
          {time:"03:06",lyr:"装满了风雨"},
          {time:"03:09",lyr:"原谅我实在没有这个勇气对你说一句"},
          {time:"03:17",lyr:"我只想和你永远在一起"},
          {time:"03:23",lyr:"就在一起 wu……ha….wu…"},
          {time:"03:49",lyr:"只想和你永远在一起"},
          {time:"03:55",lyr:"wu…..ha….wu…"},
          {time:"04:18",lyr:"只想和你永远在一起"},
          {time:"04:23",lyr:"wu….我只想和你永远在一起"}

      ]},
      {src:'mp3/9.mp3',name:'微微一笑很倾城',geshou:'杨洋',zsj:'03:24',yinzhi:'无损'
          ,lyrs:[

          {time:"00:01",lyr:"微微一笑很倾城"},
          {time:"00:04",lyr:"电视剧《微微一笑很倾城》片尾曲 - 杨洋"},
          {time:"00:07",lyr:"词：汪苏泷&唯乙安"},
          {time:"00:10",lyr:"曲：汪苏泷&刘颜嘉"},
          {time:"00:16",lyr:"雨水滴在我的外套"},
          {time:"00:19",lyr:"思念浸透我的衣角"},
          {time:"00:24",lyr:"你给的暗号"},
          {time:"00:25",lyr:"微微一笑"},
          {time:"00:27",lyr:"出现的刚刚好"},
          {time:"00:30",lyr:"擦肩而过你的发梢"},
          {time:"00:34",lyr:"像是春风吹绿青草"},
          {time:"00:37",lyr:"浪漫在发酵"},
          {time:"00:39",lyr:"只愿为你"},
          {time:"00:41",lyr:"赶走所有烦恼"},
          {time:"00:45",lyr:"带你到天涯海角"},
          {time:"00:48",lyr:"听你的心跳"},
          {time:"00:52",lyr:"想给你一个拥抱"},
          {time:"00:55",lyr:"让全世界知道"},
          {time:"00:59",lyr:"遇见你我才知道你对我多重要"},
          {time:"01:03",lyr:"没有人能感觉到你最甜美的笑"},
          {time:"01:06",lyr:"我再不用把别人寻找"},
          {time:"01:10",lyr:"因为我已经找到"},
          {time:"01:13",lyr:"我们的缘分刚好不许别人打扰"},
          {time:"01:17",lyr:"搭配爱情的美妙只有我们知道"},
          {time:"01:20",lyr:"紧紧围绕你每分每秒"},
          {time:"01:24",lyr:"你对我多么重要"},
          {time:"01:35",lyr:"擦肩而过你的发梢"},
          {time:"01:38",lyr:"像是春风吹绿青草"},
          {time:"01:42",lyr:"浪漫在发酵"},
          {time:"01:44",lyr:"只愿为你"},
          {time:"01:45",lyr:"赶走所有烦恼"},
          {time:"01:49",lyr:"带你到天涯海角"},
          {time:"01:53",lyr:"听你的心跳"},
          {time:"01:56",lyr:"想给你一个拥抱"},
          {time:"02:00",lyr:"让全世界知道"},
          {time:"02:04",lyr:"遇见你我才知道你对我多重要"},
          {time:"02:07",lyr:"没有人能感觉到你最甜美的笑"},
          {time:"02:11",lyr:"我再不用把别人寻找"},
          {time:"02:14",lyr:"因为我已经找到"},
          {time:"02:18",lyr:"我们的缘分刚好不许别人打扰"},
          {time:"02:21",lyr:"搭配爱情的美妙只有我们知道"},
          {time:"02:25",lyr:"紧紧围绕你每分每秒"},
          {time:"02:28",lyr:"你对我多么重要"},
          {time:"02:32",lyr:"遇见你我才知道你对我多重要"},
          {time:"02:36",lyr:"没有人能感觉到你最甜美的笑"},
          {time:"02:39",lyr:"我再不用把别人寻找"},
          {time:"02:43",lyr:"因为我已经找到"},
          {time:"02:46",lyr:"我们的缘分刚好不许别人打扰"},
          {time:"02:50",lyr:"搭配爱情的美妙只有我们知道"},
          {time:"02:54",lyr:"紧紧围绕你每分每秒"},
          {time:"02:57",lyr:"你对我多么重要"},
          {time:"03:01",lyr:"紧紧围绕你每分每秒"},
          {time:"03:04",lyr:"你对我多么重要"},
          {time:"03:08",lyr:"你对我多么重要"},
      ]

      }
    ]
  var audio=$('audio').get(0);
    var index;
    $.each(music,function(i,v){
            $('<ul class="header-box2" data='+i+'><li class="name"><div class="pinpu"></div>'+v.name+'</li><li class="geshou">'+v.geshou+'</li><li class="zsj">'+v.zsj+'</li><li class="yinzhi">'+v.yinzhi+'</li><div class="del"></div></ul>').appendTo('.header');

        })

    $('.header-box2').on('click',function(){
      //index=parseInt($(this).attr('data'));
        index=$(this).index()-1;
        audio.src=music[index].src;
        $('.gqname').text(music[index].name);
        $('.gsname').text(music[index].geshou);
        $('.zshijian').text(music[index].zsj);
        audio.play();

        //产生随机的高
        randomHeight()
    });

    // 开始暂停
    $('.zt').on('click',function(){
        if(audio.paused){  // 属性
            audio.play()     // 方法

            //产生随机的高
            randomHeight()
        }else{
            audio.pause()

            //暂停随机的高
            clearrandomHeight()
        }


    });


// flomat是一个处理时分秒的函数
    function flomat(v) {
        var m=parseInt(v/60);
            var s=parseInt(v%60);
            s=(s < 10)?( '0' + s):s;
            m=(m<10)?('0'+m):m;
            var time=m + ":" + s;
            return time;
    };

    //播放过程中

    $(audio).on('timeupdate',function(){
        $('.ybfsj').text(flomat(audio.currentTime))
        $('.zshijian').text(flomat(audio.duration))
        $('.jdtiao').css({width:$('.jingdu').width()*(audio.currentTime/audio.duration)})

$(music[index].lyrs).each(function(i,v) {
    //歌词往下滚动
    if (flomat(audio.currentTime) === v.time) {

        var a = i;
        $(".lyr").empty()
        if (i - 4<= 0) {
            i = 0;
        } else {
            i = i - 4
        }
        for (var j = i; j < music[index].lyrs.length; j++) {
            $("<p class=" + j + ">" + music[index].lyrs[j].lyr + "</p>").appendTo(".geci_box1 .lyr")
        }
        $("." + a).addClass("act")
    }
});
})


    $('.jingdu').on('click',function(e){
          /*歌曲当前的播放时长=点击到事件源的left/总长度的宽*歌曲的总长度*/
         audio.currentTime=(e.offsetX-$(this).find('.jdzhishi').width()/2)/$('.jingdu').width()*audio.duration;
     })

    /*当点击小圆点时阻止冒泡事件*/
   $('.jdzhishi').on('click',false);

    $(audio).on('play',function(){
         $('.zt').addClass('paused');
        $('.footer2').addClass('footer2s')
        // 当前播放字体变绿色
       $('.header-box2').removeClass('playgreen')
       $('.header-box2').eq(index).addClass('playgreen')
        $('.header-box2 .pinpu').removeClass('gif');
        $('.header-box2 .pinpu').eq(index).addClass('gif');
        // 更换头像旁边的信息



    })

    $(audio).on('pause',function(){
        $('.zt').removeClass('paused')
        $('.footer2').removeClass('footer2s')

    })
//切换歌曲
    if(!index){
         index=1;}
    // 向左切
   $('.zuo').on('click',function(){
       index-=1;
        if(index<0){
            index=music.length-1
        }
        audio.src=music[index].src;
       audio.play()
       $('.gqname').text(music[index].name);
       $('.gsname').text(music[index].geshou);
       $('.zshijian').text(music[index].zsj);
    })

    ////下一首
    $('.you').on('click',function(){
        if($('.xh ').hasClass('xhc')){

        }else if($('.xh').hasClass('xhd')){

            index++;
        }else if($('.xh').hasClass('xhe')){

            index=Math.floor(Math.random()*music.length);
        }
       index++;
        if(index===music.length){
            index=0;
        }
        audio.src=music[index].src;
        //var img=music[index].img;
        //$('.songers img').attr('src',img);
        $('.gqname').text(music[index].name);
        $('.gsname').text(music[index].geshou);
        $('.zshijian').text(music[index].zsj);
        audio.play();
    })

// 音量
    $('.yl').on('click',function(e){
        audio.volume=e.offsetX/$(this).width()

    })

    ///*当音量变化时执行事件*/
    $('audio').on('volumechange',function(){
     if(audio.volume===0){
    //        /*给音量添加一个类静音键*/
        $('.ylj').addClass('bs');
     }else{
         $('.ylj').removeClass('bs');
    }
    //    /*获取位置w =当前的音量*事件源的宽度*/
    var w=audio.volume*$('.yl').width();
        $('.ylt').width(w+$('.ylzhishi').width()/2);
    })
    ///*清除圆点的冒泡事件*/
    $('.ylzhishi').on('click',false)

/*当点击音量键时*/
    $('.ylj').on('click',function(){
        $(this).toggleClass('bs');
      if($('.ylj').hasClass('bs')) {
          $('.ylj').attr('zhi',audio.volume);
          audio.volume=0;
        }else{
         /*否则取消静音把保存的音量复原*/
          audio.volume=$('.ylj').attr('zhi');
          /*然后移除保存的音量*/
        $('.ylj').removeAttr('zhi');
      }
    })


// 当歌曲还没开始播放时，时间就出现
    $(audio).on('canplay',function () {
        $(audio).triggerHandler('timeupdate')
    })
    //拖动进度条

    $('.jdzhishi').on('mousedown',function(){
        $(document).on('mousemove',function(e){
            var g=(e.pageX-$('.jingdu').offset().left)/$('.jingdu').width()*audio.duration;
            g=g>=audio.duration?audio.duration:g;
            g=g<=0?0:g;
            audio.currentTime=g;
        });
        $(document).on('mouseup',function(){
            $(document).off('mousemove')
            $(document).off('mouseup')
        })

    })

    $('.ylzhishi').on('mousedown',function(e){
            $(document).on('mousemove',function(e){
                var v=(e.pageX-$('.ylt').offset().left)/$('.ylt').width();
                v=(v>1)?1:v;
                v=(v<0)?0:v;
                audio.volume=v
            })
            $(document).on('mouseup',function(){
                $(document).off('mousemove')
                $(document).off('mouseup')
            })
    })

//循环
    $('.xh').on('mouseenter',function(){
        $('.xhbox').css({display:'block'})
    })
    $('.xh').on('mouseleave',function(){
        $('.xhbox').css({display:'none'})
    })

//清空

    $('.qingk').on('click',function(){
        $('.header-box2').empty()
        audio.pause()
    })
    /*当点击del时移除当前的ul*/
    $('.header-box2').on('click','.del',function(){
           $(this).closest('ul').remove();
       var dell=$(this).parent().attr('data')
        music.splice(dell,1);
    })


//点击出现歌词版
    $('.ci').on('click',function() {
        $('.gdgc1').css('display', 'block');

    });
    //    $('.ci').on('click',function(){
    //
    //        //$(".geci_box").append("<div class=geci_box1><div class=lyr><div class=float></div></div></div>")
    //$(music[index].lyrs).each(function(i,v){
    //    $('.geci_box1 .lyr').empty();
    //    console.log(i,v)
    //    $("<p class="+ i +">"+v.lyr+"</p>").appendTo($(".geci_box1 .lyr"))
    //    //$("<div>").appendTo(".float")
    //}) })



$('.gdgc1').on('click',function(){
    $('.gdgc1').css('display', 'none')

})

    //清除随机变化的高
    function clearrandomHeight() {
        clearInterval(t)
    }

    //随机变化的高
    var t;
    function randomHeight() {

    $('.float').empty();
    for ( var i=0; i<41; i++ ) {
        $('<div>').appendTo('.float')
    };

    t = setInterval(function(){
        var num;
        var shijian;
        $('.float div').height(function(){
           num =  parseInt(Math.random()*300+50

           );
        if(  num < 500  ) {
            //shijian = parseInt((500-num)/500*500)
            //console.log(num)
            return num;
        }
    });

},200)
}



});
