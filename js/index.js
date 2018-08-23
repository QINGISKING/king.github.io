
// 规定好每张图片处于的位置和状态
var states=[
    {Zindex:1,width:120,height:150,top:69,left:134,opacity:0.2},
    {Zindex:2,width:130,height:170,top:59,left:0,opacity:0.5},
    {Zindex:3,width:170,height:218,top:35,left:110,opacity:0.7},
    {Zindex:4,width:224,height:288,top:0,left:263,opacity:1},
    {Zindex:3,width:170,height:218,top:35,left:470,opacity:0.7},
    {Zindex:2,width:130,height:170,top:59,left:620,opacity:0.5},
    {Zindex:1,width:120,height:150,top:69,left:500,opacity:0.2},

]
var lis = $('#box li');
function set(){
    lis.each(function(index,ele){
        var state = states[index];
        // $(ele).css({
        //     'z-index':state.Zindex,
        //     'width':state.width,
        //     'height':state.height,
        //     'top':state.top,
        //     'left':state.left,
        //     'opacity':state.opacity
        // })
        $(ele).css('z-index',state.Zindex).finish().animate(state,1000);
        // $(ele).stop().animate(state,1000);
    })
}
set();
$('.prev').click(function(){
    var space = states[0];
    states.shift();
    states.push(space);
    set();
})
$('.next').click(function(){
    var space = states[states.length-1];
    states.pop();
    states.unshift(space);
    set();
})

// 自动轮播
var time = null;
function autoPlay(){
    time = setInterval(function(){
        var space = states[states.length-1];
        states.pop();
        states.unshift(space);
        set();
    },2000)
}
autoPlay();

$('#box section').add('#box li').hover(function(){
    clearInterval(time);
},function(){
    autoPlay();
})

// 封装为插件，能够使得只要使用这个插件，就能被重复的使用效果，会产生什么样的问题？
// 1.插件中最好不要使用 ID，因为插件就是为了能重复使用，但是ID具有唯一性
// 2.变量命名和方法命名：用户使用这个插件的时候，可能还会引入其他的东西，有时命名会产生冲突
// 3.标签class的命名问题:更上面一样，容易跟其他的插件中的class名冲突，所以命名的时候不要太大众化
// 4.插件的文件命名问题：命名不能太大众化
