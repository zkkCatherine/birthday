// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "最亲爱的萱",
        "终于",
        "拖欠你这么久的生日礼物",
        "可以送上了",
        "你是我相识最久的闺蜜",
        "是除了我妈外",
        "最能包容我坏脾气的人",
        "（hhh现在还得除了我npy）",
        "你也是知道我悄悄话最多的人",
        "你是任何时候",
        "都站在我这边的人",
        "这么多年",
        "不管怎么变",
        "你对我从不曾改变",
        "人生能有你这样一个闺蜜",
        "幸运至极",
        "你温暖 单纯 善良",
        "不管我什么时候找你",
        "你都能给我最温暖的回应",
        "我们不常聊天",
        "但只要聊起来就会聊很久",
        "你会给我讲你这么久以来的经历",
        "我也会跟你说我遇到的烦恼",
        "你也总会想尽一切办法帮我解决",
        "在我有了喜欢的人之后",
        "我第一个告诉了你",
        "你也是这样",
        "有了快乐的事情",
        "就想要和彼此分享",
        "我们知道",
        "不管什么时候",
        "对方都在",
        "所以",
        "余生还长",
        "咱们还要一起过很多很多的生日",
        "我还要见证你的真爱hh",
        "姐妹！",
        "咱们永远18！",
        "致：",
        "草草",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "亲爱的草草": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
