// //二维码
// Laya.init(600,400);
// Laya.stage.bgColor = '#fcc';
// var div = Laya.Browser.document.createElement('div');
// this.qrcode = new Laya.Browser.window.QRCode(div,{
//     width:100,
//     height:100
// });
// var url = 'http://layabox.com/';
// this.qrcode.makeCode(url);
// Laya.stage.once('click',this,clickHandler);
// this.qrcodeSp = new Laya.Sprite();
// Laya.stage.addChild(this.qrcodeSp);
// function clickHandler(){
//     var url = this.qrcode._oDrawing._elImage.src;//获取，注意这里是异步的，开发者可以价格延时在获取
//     //直接显示在 Laya上
//     // this.qrcodeSp.loadImage(url,0,0,100,100);

//     //用img标签显示
//     var img = Laya.Browser.document.createElement('img');
//     img.src = url;
//     img.setAttribute('style','width:100px;height:100px;position:absolute;z-index:10001')
//     Laya.Browser.document.body.append(img);
// }