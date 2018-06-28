// /*
// * 初始化LayaAir 引擎。
// * 加载一个图片资源，加载完成后，创建一个使用了自定义着色器的显示对象类实例，将加载好的图片纹理对象传递给这个实例，然后将这个显示对象添加到舞台上进行显示。
// */
// Laya.init(900,700,Laya.WebGL);
// Laya.stage.bgColor = '#cfcfcf';
// //加载一张图片
// Laya.loader.load('res/img/bg2.png',Laya.Handler.create(this,loadComplete));
// function loadComplete(){
//     var texture = Laya.Loader.getRes('res/img/bg2.png');
//     var spe = new myShaderSprite();
//     spe.init(texture);
//     spe.pos(50,50);
//     Laya.stage.addChild(spe);
// }