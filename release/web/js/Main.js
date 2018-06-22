// // 用drawTexture方法显示与切换图片
// // //初始化舞台
// // Laya.init(1334,750);
// // //切换的图片路径
// // this.monkey2 = 'res/img/animal/monkey2.png';
// // this.monkey3 = 'res/img/animal/monkey3.png';
// // //切换状态
// // this.flag = false;
// // //设置舞台背景色
// // Laya.stage.bgColor = '#fff';
// // //先加载图片资源，图片资源加载后，通过回调方法绘制图片并添加到舞台
// // Laya.loader.load([this.monkey2,this.monkey3],Laya.Handler.create(this,graphicsImg));
// // function graphicsImg(){
// //     this.img = new Laya.Sprite();

// //     //添加到舞台
// //     Laya.stage.addChild(img);
// //     //显示初始化绘制的图片
// //     switchImg();
// //     //监听switchImg的图片区域点击事件,触发后执行siwtchImg切换图片
// //     this.img.on(Laya.Event.CLICK,this,switchImg);
// //     //设置图片坐标
// //     this.img.pos(100,50);
// // }
// // function switchImg(){
// //     //清空绘制
// //     this.img.graphics.clear();
// //     //获取切换图片的路径
// //     var imgUrl = (this.flag = !this.flag) ? this.monkey2 : this.monkey3;
// //     //获取图片资源
// //     var texture = Laya.loader.getRes(imgUrl);
// //     //绘制纹理
// //     this.img.graphics.drawTexture(texture);
// //     //设置纹理宽高
// //     this.img.size(texture.width,texture.height);
// // }

// //  用loadImage切换图片的示例
// //初始化舞台
// Laya.init(1334, 750);
// //需要切换的图片资源路径
// this.monkey2 = 'res/img/animal/monkey2.png';
// this.monkey3 = 'res/img/animal/monkey3.png';
// //切换状态
// this.flag = false;
// //设置舞台背景色
// Laya.stage.bgColor = "#ffffff";
// this.img = new Laya.Sprite();
// //显示绘制的图片
// switchImg();
// //侦听switchImg中图片区域的点击事件，触发后执行switchImg切换图片
// this.img.on(Laya.Event.CLICK,this,switchImg);
// //添加到舞台
// Laya.stage.addChild(img);
// function switchImg(){
//     //清空图片
//     this.img.graphics.clear();
//     //获得要切换的图片资源路径
//     var imgUrl = (this.flag = !this.flag)? this.monkey2:this.monkey3;
//     //加载显示图片，坐标位于100,50
//     this.img.loadImage(imgUrl, 100, 50);
// }