// //初始化Laya.Worker
// Laya.init(600,400,Laya.WebGL);
// //设置worker.js路径
// Laya.WorkerLoader.workerPath = 'libs/worker.js';
// //开启worker线程
// Laya.WorkerLoader.enable = true;
// Laya.loader.load('res/atlas/ui.atlas',Laya.Handler.create(this,onLoaded));

// function onLoaded(){
//     //实例ui界面
//     var testView = new ui.MonkeyPageUI();
//     Laya.stage.addChild(testView);
// }

// // //初始化原生方法调用worker
// Laya.init(600,400,Laya.WebGL);
// var worker = new Laya.Browser.window.Worker("libs/my_task.js");
// worker.onmessage = function(oEvent){
//     console.log("Called back by the worker!\n");
// };
// worker.postMessage("start"); // start the worker.