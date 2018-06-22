//httpRequest请求
//初始化引擎
Laya.init(1136,640);
var xhr = new Laya.HttpRequest();
xhr.http.timeout = 3;//设置超时时间；
xhr.once(Event.COMPLETE,this,completeHandler);
xhr.once(Event.ERROR,this,errorHandler);
xhr.on(Event.PROGRESS,this,processHandler);
xhr.send("http://localhost","123","get","text");
function processHandler(data){
    console.log(data);
}
function errorHandler(data){
}
function completeHandler(e){
}