// //二进制图片
// Laya.init(500,500);
// var xhr = new XMLHttpRequest();
// xhr.open('get','res/atlas/ui.png',true);
// xhr.responseType = 'arraybuffer';
// xhr.onload = function(){
//     if(this.status == 200){
//         var blob = new Blob([this.response],{type:'image/png'});
//         var img = document.createElement('img');
//         img.onload = function(e){
//             window.URL.revokeObjectURL(img.src);//清除释放
//         };
//         img.src = window.URL.createObjectURL(blob);
//         document.body.appendChild(img);
//     }
// }
// xhr.send();

// //Laya使用二进制图片
// Laya.init(1136,640);
// var sp = new Laya.Sprite();
// var xhr = new Laya.HttpRequest();
// xhr.once(Laya.Event.COMPLETE,this,completeHandler);
// xhr.once(Laya.Event.ERROR,this.errorHandler);
// xhr.send('res/img/animal/monkey2.png','','get','arraybuffer');

// //第一种
// function completeHandler(data){
//     //加载完成后，返回的是arraybuffer
//     //处理我们加密的图片数据，假设我们的图片加密数据是在图片前面写入4个字节的数据
//     //解密逻辑开始处理数据
//     var byte = new Laya.Byte(data); //Byte数组接受arraybuffer
//     byte.writeArrayBuffer(data,4); //从第四个字节开始读取数据
//     var blob = new Laya.Browser.window.Blob([data],{type:'image/png'});
//     var url = Laya.Browser.window.URL.createObjectURL(blob);//创建一个url对象
//     //现用第一种方式显示图片
//     var sp = new Laya.Sprite();
//     sp.loadImage(url);
//     Laya.stage.addChild(sp);//添加到舞台
// }

// function errorHandler(url){
//     console.log(url);
// }

// // 第二种我们可以绘制一个纹理来显示：
// function completeHandler(data){
//     //加载完成后，返回的data是arraybuffer
//     //这里处理我们加密的图片数据，假设我们的图片加密数据是在图片的前面写入4个字节的数据
//     //解密逻辑开始处理
//     var byte = new Laya.Byte(data); //byte数组接受arraybuffer
//     byte.writeArrayBuffer(data,4);  //从第四个字节开始读取数据
//     var blob = new Laya.Browser.window.Blob([data],{type:'image/png'});
//     var url = Laya.Browser.window.URL.createObjectURL(blob);//创建一个url对象
//     //显示图片到舞台
//     var sp = new Laya.Sprite();
//     sp.loadImage(url);
//     Laya.stage.addChild(sp); //添加到舞台 用loader来加载url
//     Laya.loader.load(url,Laya.Handler.create(this,showImg,[url]),null,Laya.loader.IMAGE);
// }
// function errorHandler(url){
//     var t = new Laya.loader.getRes(url);
//     var ape = new Laya.Sprite();
//     ape.graphics.drawTexture(t,0,0);
//     Laya.stage.addChild(ape);
//     ape.pos(200,0);
// }

//第三种我们直接创建一个纹理来显示
// function completeHandler(data){
//     //加载完成后，返回的data是arraybuffer
//     //......这里处理我们加密的图片数据，假设我们的图片加密数据是在图片前面写入了四个字节的数据
//     //......解密逻辑开始处理数据
//     var byte = new Laya.Byte(data);
//     byte.writeArrayBuffer(data,4);
//     var blob = new Laya.Browser.window.Blob([byte.buffer],{type:'image/png'});
//     var url = Laya.Browser.window.URL.createObjectURL(blob);
//     var htmlImg = Laya.HTMLImage.create(url);
//     htmlImg.onload = function(){
//         var t= new Laya.Texture(htmlImg);
//         var ape = new Laya.Sprite();
//         ape.graphics.drawTexture(t,0,0);
//         Laya.stage.addChild(ape);
//         ape.pos(200,0);
//     }
// }

