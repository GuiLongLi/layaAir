// // //使用TiledMap地图
// // //初始化舞台
// // Laya.init(Laya.Browser.width,Laya.Browser.height,Laya.WebGL);
// // //创建tiledmap实例
// // this.tMap = new Laya.TiledMap();
// // //控制 缩放坐标点
// // // 假设视口大小为800*600
// // // scaleX值0.1 表示x轴缩放中心点的坐标为80（800*0.1）
// // // scaleY值 0.5 表示y轴缩放中心点的坐标为300 （600*0.5）
// // // this.tMap.setViewPortPivotByScale(0.1,0.5);
// // //创建Rectangle实例，视口区域
// // var viewRect = new Laya.Rectangle(0,0,Laya.Browser.width,Laya.Browser.height);
// // //创建tiledMap地图
// // this.tMap.createMap('res/tiledMap/orthogonal-test-movelayer.json',viewRect,Laya.Handler.create(this,onMapLoaded));

// // function onMapLoaded(){
// //     //设置缩放中心点为视图的左上角
// //     this.tMap.setViewPortPivotByScale(0,0);
// //     //将地图放大2倍
// //     this.tMap.scale = 2;
// // }

// //拖动地图
// Laya.init(Laya.Browser.width,Laya.Browser.height,Laya.WebGL);
// //创建TiledMap实例
// this.tMap = new Laya.TiledMap();
// Laya.Stat.show();
// //自动缓存没有动画的地图
// this.tMap.autoCache = true;
// //自动缓存类型，地图较大时建议使用normal
// this.tMap.autoCacheType = 'normal';
// //消除缩放导致的缝隙，也就是去黑边，1,7,7,版本新增的优化属性
// this.tMap.autiCrack = true;
// //开启图层合并
// this.tMap.enableMergeLayer = true;
// //移除被覆盖的开启方式
// this.tMap.removeCoveredTile = true;
// //createMap第二个参数，创建Rectangle实例，视图区域
// var viewRect = new Laya.Rectangle(0,0,Laya.Browser.width,Laya.Browser.height);
// //createMap第四个参数，为gridSize ,创建一个512*512大小的Point对象实例
// var gridSize = new Laya.Point(512,512);
// //创建TiledMap地图，加载orthogonal.json后，执行回调方法onMapLoaded();
// this.tMap.createMap('res/TiledMap/orthogonal-test-movelayer.json',viewRect,Laya.Handler.create(this,onMapLoaded),null,gridSize);
// function onMapLoaded(){
//     //设置初试缩放点为左上角
//     this.tMap.setViewPortPivotByScale(0,0);
//     //将地图放大3倍
//     this.tMap.scale = 3;
//     this.MapX = 0;
//     this.MapY = 0;

//     Laya.stage.on(Laya.Event.RESIZE,this,resize);
//     Laya.stage.on(Laya.Event.MOUSE_DOWN,this,mouseDown);
//     Laya.stage.on(Laya.Event.MOUSE_UP,this,mouseUp);
//     Laya.stage.on(Laya.Event.RIGHT_CLICK,this,mouseRight);
//     resize();
// }

// //移动地图视口
// function mouseMove(){
//     var moveX = this.MapX - (Laya.stage.mouseX - this.mLastMouseX);
//     var moveY = this.MapY - (Laya.stage.mouseY - this.mLastMouseY);
//     //移动地图视口
//     this.tMap.moveViewPort(moveX,moveY);
// }

// function mouseUp(){
//     this.MapX = this.MapX - (Laya.stage.mouseX - this.mLastMouseX);
//     this.MapY = this.MapY - (Laya.stage.mouseY - this.mLastMouseY);
//     Laya.stage.off(Laya.Event.MOUSE_MOVE,this,mouseMove);
// }

// function mouseDown(){
//     this.mLastMouseX = Laya.stage.mouseX;
//     this.mLastMouseY = Laya.stage.mouseY;
//     Laya.stage.on(Laya.Event.MOUSE_MOVE,this,mouseMove);
// }

// function mouseRight(){
//     //右键点击时销毁地图
//     this.tMap.destroy();
// }

// //改变视口大小
// //重设地图视口区域
// function resize(){
//     //改变视口大小
//     this.tMap.changeViewPort(this.MapX,this.MapY,Laya.Browser.width,Laya.Browser.height);
// }