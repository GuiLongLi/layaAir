// //时间轴动画
// //初始化舞台
// Laya.init(1334,750,Laya.WebGL);
// //设置背景色
// Laya.stage.bgColor = '#fff';
// //加装图集后，执行onLoaded回调方法
// Laya.loader.load('res/atlas/ui.atlas',Laya.Handler.create(this,onLoaded));
// function onLoaded(){
//     //创建一个animation实例
//     var tl = new Laya.Animation();
//     //加载动画文件
//     tl.loadAnimation('TimeLine.ani');
//     //添加到舞台
//     Laya.stage.addChild(tl);
//     //播放Animation动画
//     tl.play();

//     //创建一个新的Animation实例
//     var tl2 = new Laya.Animation();
//     //加载动画文件
//     tl2.loadAnimation('TimeLine.ani');
//     //添加到舞台
//     Laya.stage.addChild(tl2);
//     //播放Animation动画的pivot动画
//     tl2.play(0,true,'pivot');
//     //动画的显示位置
//     tl2.pos(300,0);

//     //创建一个新的Animation实例
//     var tl3 = new Laya.Animation();
//     //加载动画文件
//     tl3.loadAnimation('TimeLine.ani');
//     //添加到舞台
//     Laya.stage.addChild(tl3);
//     //播放Animation动画的pivot动画
//     tl3.play(0,true,'skew');
//     //动画的显示位置
//     tl3.pos(0,100);

//     //创建一个新的Animation实例
//     var tl4 = new Laya.Animation();
//     //加载动画文件
//     tl4.loadAnimation('TimeLine.ani');
//     //添加到舞台
//     Laya.stage.addChild(tl4);
//     //播放Animation动画的pivot动画
//     tl4.play(0,true,'skew_0');
//     //动画的显示位置
//     tl4.pos(Laya.stage.width>>1,Laya.stage.height>>1);
// }
