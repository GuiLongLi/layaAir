//WebSocket数据交换
// 初始化引擎
Laya.init(600,400,Laya.WebGL);
this.byte = new Laya.Byte();
//这里我们使用小端
this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
this.socket= new Laya.Socket();
//这里我们采用小端
this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
//建立连接
this.socket.connectByUrl("ws://localhost:8989");
this.socket.on(Laya.Event.OPEN,this,openHandler);
this.socket.on(Laya.Event.MESSAGE,this,receiveHandler);
this.socket.on(Laya.Event.CLOSE,this,closeHandler);
this.socket.on(Laya.Event.ERROR,this,errorHandler);
function openHandler(event){
    //正确建立连接
    console.log('正确建立连接');
}
function receiveHandler(msg){
    //接受到数据触发函数
    console.log('接受到数据触发函数');
}
function closeHandler(e){
    //关闭事件
    console.log('关闭事件');
}
function errorHandler(e){
    //连接出错
    console.log('连接出错');
}
