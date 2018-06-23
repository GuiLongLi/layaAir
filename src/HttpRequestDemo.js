// //httpRequest请求
// //初始化舞台
// Laya.init(1136,640);
// var xhr = new Laya.HttpRequest();
// xhr.http.timeout = 3; //超时时间
// xhr.once(Event.COMPLETE,this,completeHandler);
// xhr.once(Event.ERROR,this,errorHandler);
// xhr.on(Event.PROGRESS,this,processHandler);
// xhr.send("http://localhost",'','get','text');
// function processHandler(data){
//     console.log(data);
// }
// function errorHandler(data){
//     console.log(data);
// }
// function completeHandler(data){
//     console.log(data);
// }