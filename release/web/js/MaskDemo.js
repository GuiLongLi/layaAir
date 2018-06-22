// //遮罩效果
// (function()
// {
//     var Sprite = Laya.Sprite;
//     var Texture = Laya.Texture;
//     var Handler = Laya.Handler;
//     var Res;
//     var img;
//     (function()
//     {
//         Laya.init(1136,640);
//         //设置舞台背景色
//         Laya.stage.bgColor = "#fff";
//         //资源路径
//         Res = 'res/img/animal/monkey2.png';
//         //先加载图片资源，加载后，通过回调绘制图片并添加到舞台
//         Laya.loader.load(Res,Handler.create(this,graphicsImg));
//     })();

//     function graphicsImg()
//     {
//         img = new Sprite();
//         //获取图片资源绘制到画布
//         img.graphics.drawTexture(Laya.loader.getRes(Res),150,50);
//         //添加到舞台
//         Laya.stage.addChild(img);

//         //创建遮罩对象
//         var cMask = new Sprite();
//         //画一个圆形的遮罩区域
//         cMask.graphics.drawCircle(80,80,50,'#ff0000');
//         //圆形所在的位置坐标
//         cMask.pos(120,50);

//         //实现img显示对象的遮罩效果
//         img.mask = cMask;
//     }
// })();