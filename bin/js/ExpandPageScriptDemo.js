// //附加脚本的使用
// //初始化
// Laya.init(600,700);
// //开启debugpanel调式面板
// Laya.DebugPanel.init();
// //调用debugtool调试工具
// Laya.DebugTool.init();
// //设置背景色
// Laya.stage.bgColor = '#fcc';
// //预加载资源
// Laya.loader.load('res/atlas/ui.atlas',Laya.Handler.create(this,onLoaded));

// function onLoaded(){
//     //实例化ui
//     var ExpandPage = new ui.ExpandPageScriptUI();
//     //添加到stage
//     Laya.stage.addChild(ExpandPage);
// }