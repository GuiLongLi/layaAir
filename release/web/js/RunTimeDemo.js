// //初始化引擎
// Laya.init(800,700);
// //预加载资源
// Laya.loader.load('res/atlas/ui.atlas',Laya.Handler.create(this,onLoaded));
// Laya.loader.load('res/atlas/comp.atlas',Laya.Handler.create(this,onLoaded));

// function onLoaded(){
//     //实例化BGPageUI页面
//     var bgPage = new ui.BGPageUI();
//     //设置背景色
//     bgPage.graphics.drawRect(0,0,300,300,'#fcc');
//     //添加到舞台
//     Laya.stage.addChild(bgPage);

//     //实例化MonkeyPageUi页面
//     var monkeyPage = new ui.MonkeyPageUI();
//     //在设置背景色
//     monkeyPage.graphics.drawRect(0,0,300,300,'#fcc');
//     //添加到stage
//     Laya.stage.addChild(monkeyPage);
//     //设置第二个页面坐标
//     monkeyPage.x = 350;
// }