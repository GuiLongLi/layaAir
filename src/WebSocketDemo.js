// //WebSocket数据交换
// // 初始化引擎
// Laya.init(600,400,Laya.WebGL);
// this.byte = new Laya.Byte();
// //这里我们使用小端
// this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
// this.socket= new Laya.Socket();
// //这里我们采用小端
// this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
// //建立连接
// this.socket.connectByUrl("ws://localhost:8989");
// this.socket.on(Laya.Event.OPEN,this,openHandler);
// this.socket.on(Laya.Event.MESSAGE,this,receiveHandler);
// this.socket.on(Laya.Event.CLOSE,this,closeHandler);
// this.socket.on(Laya.Event.ERROR,this,errorHandler);
// function openHandler(event){
//     //正确建立连接
//     console.log('正确建立连接');
//     this.socket.send("hello world");//这是发送字符串的形式。

//     //实例化一个二进制数组Byte
//     var byte = new Laya.Byte();
//     console.log(byte);
//     //或者传入一个类型化数组
//     var uint8Byte = new Uint8Array(10);
//     var byte = new Laya.Byte(uint8Byte);
//     console.log(byte);
//     //或者传入一个ArrayBuffer类型
//     var buffer = new ArrayBuffer(20);
//     var byte = new Laya.Byte(buffer);
//     console.log(byte);

//     var byte = new Laya.Byte();
//     var byte1 = new Laya.Byte();
//     byte1.writeFloat32(20.0);//写入一个四个字节的浮点数
//     byte1.writeInt16(16);//写入一个两个字节的整数
//     byte1.writeUTFString("hell world");//写入一个字符串；
//     byte.writeArrayBuffer(byte1.buffer,6);//把byte1的数据从第六个字节开始读入byte中。省略其中的浮点数20.0和整数16
//     byte.pos = 0;//当前读取到的位置。
//     console.log(byte.readUTFString())//从byte中读出字符串。
//     byte1.pos = 0;//当前读取到的位置。
//     console.log(byte1.getFloat32())//在指定字节偏移量位置处读取 Float32 值。
// }
// function receiveHandler(msg){
//     //接受到数据触发函数
//     console.log('接受到数据触发函数');
// }
// function closeHandler(e){
//     //关闭事件
//     console.log('关闭事件');
// }
// function errorHandler(e){
//     //连接出错
//     console.log('连接出错');
// }
