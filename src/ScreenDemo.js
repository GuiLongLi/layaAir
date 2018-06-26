// //屏幕适配
// (function()
// {
//     var Stage  = Laya.Stage;
//     var Text   = Laya.Text;
//     var Image  = Laya.Image;
//     //适配模式
//     var modes = "full";
//     //全局文本信息
//     var txt;
//     (function()
//     {
//         //初始化舞台大小
//         Laya.init(Laya.Browser.width,Laya.Browser.height);
//         //设置适配模式
//         Laya.stage.scaleMode = modes;
//         //设置舞台背景色
//         Laya.stage.bgColor  = "#ffff99";
//         //实例一个背景
//         var bg = new Image();
//         bg.skin = "res/img/bg.jpg";
//         Laya.stage.addChild(bg);
//         //实例一个文本
//         txt = new Text();
//         txt.text = "适配模式("+modes+") ";
//         txt.bold = true;
//         txt.pos(10, 350);
//         txt.fontSize = 60;
//         txt.color   = "#fff000";
//         Laya.stage.addChild(txt);
        
//         showScreen();
//     })();

//     function showScreen(){
//         //自动横屏，游戏的水平方向始终与浏览器屏幕较短边保持垂直
//         Laya.stage.screenMode = 'horizontal';

//         //自动竖屏，游戏的水平方向始终与浏览器屏幕较长边保持垂直
//         // Laya.stage.screenMode = 'vertical';

//         //图片
//         var img = new Laya.Image();
//         img.centerX = 0;
//         img.centerY = -70;
//         img.skin = 'res/img/animal/monkey3.png';
//         Laya.stage.addChild(img);
//         console.log('monkey.x:'+img.x+',monkey.y:'+img.y);

//         //文字
//         var text = new Laya.Label();
//         text.text = '游戏的水平方向';
//         text.color = "gray";
//         text.fontSize = 100;
//         text.centerX = 0;
//         text.centerY = 50;
//         Laya.stage.addChild(text);
//     }
    

// })();




