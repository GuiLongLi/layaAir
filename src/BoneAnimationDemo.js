// //骨骼动画
// var templet;
// Laya.init(1000,900,Laya.WebGL);
// //创建动画模板
// templet = new Laya.Templet();
// templet.on(Laya.Event.COMPLETE,this,parseComplete);
// templet.on(Laya.Event.ERROR,this,onError);
// //加载动画文件
// templet.loadAni('res/spine/spineRes2/goblins.sk');
// function onError(){
//     console.log('parse error');
// }
// function parseComplete(){
//     //创建第一个动画
//     var skeleton0;
//     //从动画模板创建动画播放对象
//     skeleton0=templet.buildArmature(0);
//     skeleton0.pos(200,700);
//     //切换动画皮肤
//     skeleton0.showSkinByIndex(1);
//     //播放
//     skeleton0.play(0,true);
//     Laya.stage.addChild(skeleton0);

//     ///创建第二个动画
//     var skeleton1;
//     skeleton1=templet.buildArmature(0);
//     skeleton1.pos(500,700);
//     skeleton1.showSkinByIndex(1);
//     skeleton1.play(0,true);
//     Laya.stage.addChild(skeleton1);
// }

// //切换皮肤
// var templet;
// Laya.init(1000,900,Laya.WebGL);
// //创建动画模板
// templet = new Laya.Templet();
// templet.on(Laya.Event.COMPLETE,this,parseComplete);
// templet.on(Laya.Event.ERROR,this,onError);
// templet.loadAni('res/spine/spineRes1/dragon.sk');
// function onError(){
//     console.log('parse error');
// }
// function parseComplete(){
//     //创建第一个动画
//     var skeleton0;
//     //从动画模板创建动画播放对象
//     skeleton0 = templet.buildArmature(0);
//     skeleton0.pos(200,700);
//     //切换动画皮肤 使用标号为0 的皮肤
//     skeleton0.showSkinByIndex(0);
//     //播放
//     skeleton0.play(0,true);
//     Laya.stage.addChild(skeleton0);

//     //创建第二个动画
//     var skeleton1;
//     skeleton1 = templet.buildArmature(0);
//     skeleton1.pos(450,700);
//     //切换动画皮肤 使用标号为1的皮肤
//     skeleton1.showSkinByIndex(1);
//     skeleton1.play(0,true);
//     Laya.stage.addChild(skeleton1);

//     //创建第三个动画
//     var skeleton2;
//     skeleton2 = templet.buildArmature(0);
//     skeleton2.pos(700,700);
//     //切换动画皮肤，使用标号为2的皮肤
//     skeleton2.showSkinByIndex(2);
//     skeleton2.play(0,true);
//     Laya.stage.addChild(skeleton2);
// }

// //切换动作
// var templet;
// Laya.init(1000,900,Laya.WebGL);
// Laya.Stat.show();
// test();
// var skeleton,
// text;
// function test(){
//     skeleton = new Laya.Skeleton();
//     skeleton.url='res/spine/spineRes6/alien.sk';
//     skeleton.pos(300,700);
//     Laya.stage.addChild(skeleton);

//     text = new Laya.Text();
//     Laya.stage.addChild(text);
//     text.color = '#00ff00';
//     text.fontSize = 30;
//     Laya.stage.addChild(text);
//     Laya.stage.on(Laya.Event.MOUSE_DOWN,this,changeAction);
// }

// var tActionID = 0;
// function changeAction(){
//     tActionID++;
//     var aniCount;
//     //获取动画动作数量
//     aniCount = skeleton.getAnimNum();
//     tActionID = tActionID%aniCount;
//     //显示当前要播放的动画名
//     text.text=skeleton.getAniNameByIndex(tActionID);
//     skeleton.play(tActionID,true);
// }