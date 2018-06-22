// //图集动画
// // 初始化舞台
// Laya.init(1334,750,Laya.WebGL);
// //创建动画实例
// this.roleAni = new Laya.Animation();
// //加载动画图集,加载成功后执行回调方法
// this.roleAni.loadAtlas('res/atlas/people.atlas',Laya.Handler.create(this,onLoaded_Frame));

// //重复自动播放全局动画
// function onLoop_Loaded(){
//     //添加到舞台
//     Laya.stage.addChild(this.roleAni);
//     //播放动画
//     this.roleAni.play();
// }

// //播放指定动画
// function onLoaded_Frame(){
//     //添加到舞台
//     Laya.stage.addChild(this.roleAni);
//     //创建动画模板dizziness
//     Laya.Animation.createFrames(aniUrls('die',6),'dizziness');
//     //循环播放动画
//     this.roleAni.play(0,true,'dizziness');
// }

// //创建一组动画的url数组(美术资源地址数组)
// //aniName 动作的名称,用于生成url
// //length 动画最后一帧的索引
// function aniUrls(aniName,length){
//     var urls = [];
//     for(var i = 0;i < length;i++){
//         //动画资源路径要和动画图集打包前的资源命名对应
//         urls.push('people/'+aniName+i+'.png');
//     }
//     return urls;
// }

// //loadImage加载图集动画
// // 初始化舞台
// Laya.init(1334,750,Laya.WebGL);
// //加载完动画的图集后执行回调的方法onLoaded_Frame
// Laya.loader.load('res/atlas/people.atlas',Laya.Handler.create(this,onLoaded_Frame));

// function onLoaded_Frame(){
//     //创建动画实例
//     this.roleAni = new Laya.Animation();
//     //添加到舞台
//     Laya.stage.addChild(this.roleAni);
//     //通过数组加载动画资源，然后用play方法直接播放，由于loadImages方法返回的是animation对象本身，可以使用loadImages().play()的语法
//     this.roleAni.loadImages(aniUrls('move',6)).play();
// }
// // //创建一组动画的url数组(美术资源地址数组)
// // //aniName 动作的名称,用于生成url
// // //length 动画最后一帧的索引
// function aniUrls(aniName,length){
//     var urls = [];
//     for(var i = 0;i < length;i++){
//         //动画资源路径要和动画图集打包前的资源命名对应
//         urls.push('people/'+aniName+i+'.png');
//     }
//     return urls;
// }

