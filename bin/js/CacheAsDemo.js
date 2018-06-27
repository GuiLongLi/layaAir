// //渲染优化
// var Text = Laya.Text,txt;
// Laya.init(550,400,Laya.WebGL);
// Laya.Stat.show();
// var textBox = new Laya.Sprite();
// //文字所在的容器设置为cacheAs之后，如下面的例子所示，性能获得较大的提升，FPS达到到了60帧。
// textBox.cacheAs = 'bitmap';
// for(var i = 0;i < 8000;i++){
//     txt = new Text();
//     txt.text = (Math.random()*100).toFixed(0);
//     txt.color = '#ccc';
//     txt.x = Math.random()*550;
//     txt.y = Math.random()*400;
//     textBox.addChild(txt);
// }
// Laya.stage.addChild(textBox);

// txt=new Text();
// txt.x = Laya.stage.width/2;
// txt.y = Laya.stage.height/2;
// txt.bold = true;
// txt.fontSize = 30;
// txt.color="#ff0000";
// txt.text="text";
// Laya.stage.addChild(txt);

// //后面只是更新文字内容，使用changeText能提高性能
// txt.changeText("text changed.");