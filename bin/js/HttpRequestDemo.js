//httpRequest请求
//初始化舞台
Laya.init(1136,640);
var xhr = new Laya.HttpRequest();
xhr.http.timeout = 3; //超时时间
xhr.once(Laya.Event.COMPLETE,Laya,completeHandler);
xhr.once(Laya.Event.ERROR,Laya,errorHandler);
xhr.on(Laya.Event.PROGRESS,Laya,processHandler);
xhr.send("http://localhost",'','get','text');
function processHandler(data){
    console.log(11);
}
function errorHandler(data){
    console.log(22);
}
function completeHandler(data){
    console.log(33);
}