// //cpu优化
// Laya.init(600,500);
// Laya.stage.pos(100,100);
// Laya.Stat.show();
// Laya.timer.frameLoop(1,this,animateFrameRateBased);
// Laya.stage.on('click',this,dispose);
// var txt = new Laya.Text();
// txt.text = "123";
// txt.color = '#fff';
// Laya.stage.addChild(txt);

// function dispose(){
//     Laya.timer.clear(this,animateFrameRateBased);
// }
// function animateFrameRateBased(){
//     txt.changeText((Math.random()*10).toFixed(0));
// }

// // 使用getBounds/ getGraphicBounds。获取宽高
// var sp = new Laya.Sprite();
// sp.autoSize = true;
// sp.graphics.drawRect(10,10,100,100,'#f00');
// Laya.stage.addChild(sp);

// //oadImage后获取宽高：
// sp = new Laya.Sprite();
// sp.loadImage('res/img/animal/monkey2.png',0,0,0,0,Laya.Handler.create(this,function(){
//     console.log(sp.width,sp.height);
// }));
// Laya.stage.addChild(sp);

// //使用Texture的宽高赋予容器。毋庸置疑，这是最高效的方式。
// Laya.loader.load('res/img/animal/monkey2.png',Laya.Handler.create(this,function(){
//     var texture = Laya.loader.getRes('res/img/animal/monkey2.png');
//     var sp1 = new Laya.Sprite();
//     sp1.graphics.drawTexture(texture,200,0);
//     sp1.size(texture.width,texture.height);
//     Laya.stage.addChild(sp1);
// }));

// //FRAME_SLOW帧率
// Laya.init(Laya.Browser.width,Laya.Browser.height);
// Laya.Stat.show();
// Laya.stage.frameRate = Laya.Stage.FRAME_MOUSE;

// var sp2 = new Laya.Sprite();
// sp2.graphics.drawCircle(0,0,20,'#900');
// Laya.stage.addChild(sp2);
// Laya.stage.on(Laya.Event.MOUSE_MOVE,this,function(){
//     sp2.pos(Laya.stage.mouseX,Laya.stage.mouseY);
// });

// //使用calllater
// Laya.init(500,600);
// var rotation = 0,
// scale=1,
// position=0;

// function setRotation(value){
//     rotation = value;
//     Laya.timer.callLater(this, update);
// }

// function setScale(value){
//     scale = value;
//     Laya.timer.callLater(this, update);
// }

// function setPosition(value){
//     position = value;
//     Laya.timer.callLater(this, update);
// }

// function update(){
//     console.log('rotation: ' + rotation + '\tscale: ' + scale + '\tposition: ' + position);
// }

// setRotation(90);
// setScale(2);
// setPosition(30);