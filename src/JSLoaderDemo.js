// //加载js文件，通过设置src来实现
// Laya.init(500,500);
// var script = Laya.Browser.document.createElement('script');
// script.src = 'libs/Demo1.js';
// script.onload = function(){
//     //加载函数完成后，调用模块的功能
//     //new 一个Js对象
//     var client = new Laya.Browser.window.Demo1();
//     client.start();
// }
// script.onerror = function(e){
//     //加载错误函数
//     console.log(e);
// }
// Laya.Browser.document.body.appendChild(script);

// //通过script的innerHTML设置
// Laya.init(500,500);
// var httpreq = new Laya.HttpRequest();
// httpreq.on(Laya.Event.COMPLETE,this,completeHandler);
// httpreq.on(Laya.Event.ERROR,this,errorHandler);
// httpreq.send('libs/Demo1.js');
// function completeHandler(e){
//     var script = Laya.Browser.document.createElement('script');
//     Laya.Browser.document.body.appendChild(script);
//     script.innerHTML = e;
//     var client = new Laya.Browser.window.Demo1();
//     client.start();
// }
// function errorHandler(e){
//     console.log('错误了..');
// }

// //通过eval方法进行加载
// Laya.init(500,500);
// var httpreq = new Laya.HttpRequest();
// httpreq.on(Laya.Event.COMPLETE,this,completeHandler);
// httpreq.on(Laya.Event.ERROR,this,errorHandler);
// httpreq.send('libs/Demo1.js');

// function completeHandler(e){
//     Laya.Browser.window.eval(e);
//     var client = new Laya.Browser.window.Demo1();
//     client.start();
// }
// function errorHandler(e){
//     console.log('错误了..');
// }