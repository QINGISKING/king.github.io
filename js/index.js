// 首先可以将整体封装成一个匿名自运行函数
(function () {
    // 规定好每张图片处于的位置和状态
    var states = [{
            Zindex: 1,
            width: 120,
            height: 150,
            top: 69,
            left: 134,
            opacity: 0.2
        },
        {
            Zindex: 2,
            width: 130,
            height: 170,
            top: 59,
            left: 0,
            opacity: 0.5
        },
        {
            Zindex: 3,
            width: 170,
            height: 218,
            top: 35,
            left: 110,
            opacity: 0.7
        },
        {
            Zindex: 4,
            width: 224,
            height: 288,
            top: 0,
            left: 263,
            opacity: 1
        },
        {
            Zindex: 3,
            width: 170,
            height: 218,
            top: 35,
            left: 470,
            opacity: 0.7
        },
        {
            Zindex: 2,
            width: 130,
            height: 170,
            top: 59,
            left: 620,
            opacity: 0.5
        },
        {
            Zindex: 1,
            width: 120,
            height: 150,
            top: 69,
            left: 500,
            opacity: 0.2
        },

    ]
    var lis = $('#box li');

    function set() {
        lis.each(function (index, ele) {
            var state = states[index];
            // $(ele).css({
            //     'z-index':state.Zindex,
            //     'width':state.width,
            //     'height':state.height,
            //     'top':state.top,
            //     'left':state.left,
            //     'opacity':state.opacity
            // })
            $(ele).css('z-index', state.Zindex).finish().animate(state, 1000);
            // $(ele).stop().animate(state,1000);
        })
    }
    set();
    $('.prev').click(function () {
        var space = states[0];
        states.shift();
        states.push(space);
        set();
    })
    $('.next').click(function () {
        var space = states[states.length - 1];
        states.pop();
        states.unshift(space);
        set();
    })

    // 自动轮播
    var time = null;

    function autoPlay() {
        time = setInterval(function () {
            var space = states[states.length - 1];
            states.pop();
            states.unshift(space);
            set();
        }, 2000)
    }
    autoPlay();

    $('#box section').add('#box li').hover(function () {
        clearInterval(time);
    }, function () {
        autoPlay();
    })
})()

// 变量的作用域问题：
// 1.全局域（window）     2.函数域（function）
// 全局域：从页面被打开之后到页面关闭之前始终都是存在的
// 函数域：存在函数被调用的一瞬间 （不一定，考虑闭包的存在）
// 闭包作用：可以保留函数的作用域 （所以set可以使用当前自运行函数中的states）
// 闭包产生的必要条件：函数里面套函数（内层的函数要使用外部函数的变量）
// 全局变量不会产生闭包，，因为全局变量的作用域是全局域