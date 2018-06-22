// //画矢量图线
// (function(){
//     var Sprite = Laya.Sprite;
//     var Stage = Laya.Stage;
//     var WebGL = Laya.WebGL;
//     var sp;

//     (function(){
//         //初始化舞台
//         Laya.init(500,300,WebGL);
//         drawSomething();
//     })();

//     function drawSomething(){
//         sp = new Sprite();
//         Laya.stage.addChild(sp);
//         //画直线
//         sp.graphics.drawLine(10,58,167,58,"#ff0000",5);
//         //画折线
//         sp.graphics.drawLines(20,88,[0,0,39,-50,78,0,120,-50],"#ff0000",5);
//     }
// })();

// //画曲线
// (function(){
//     var Sprite = Laya.Sprite;
//     var Stage = Laya.Stage;
//     var WebGL = Laya.WebGL;
//     var sp;

//     (function(){
//         //初始化舞台，不支持WebGL时启动切换至canvas
//         Laya.init(500,300,WebGL);
//         drawSomething();
//     })();

//     function drawSomething(){
//         sp = new Sprite();
//         Laya.stage.addChild(sp);
//         //画二次曲线
//         sp.graphics.drawCurves(10,58,[0,0,19,-100,39,0],'#ff0000',3);
//         //画三次曲线
//         sp.graphics.drawCurves(10,88,[0,0,35,-100,65,0,95,100,125,0],'#ff0000',3);
//     }
// })();

// //绘制三角形，多边形，数据绘形
// (function(){
//     var Sprite = Laya.Sprite;
//     var Stage = Laya.Stage;
//     var WebGL = Laya.WebGL;
//     var sp;

//     (function(){
//         //消除矢量绘制的锯齿，但会增加性能消耗
//         // Laya.Config.isAntialias=true;
//         //初始化舞台，不支持WebGL时自动切换至Canvas
//         Laya.init(500,300,WebGL);
//         drawSomething();
//     })();

//     function drawSomething(){
//         sp = new Sprite();
//         Laya.stage.addChild(sp);
//         //画三角形
//         sp.graphics.drawPoly(350,28,[0,100,50,0,100,100],'#ffff00');
//         //画多边形
//         sp.graphics.drawPoly(30,28,[0,100,50,0,100,100,75,150,25,150],'#ffff00');
//         //画五角星

//         var path = [];
//         path.push(0,-130);//五角星a点 ,最顶点
//         path.push(33,-33); //五角星b点
//         path.push(137,-30);//c点，右上角点
//         path.push(55,32);//d点
//         path.push(85,130);//e点，右下角点
//         path.push(0,73);//f点
//         path.push(-85,130);//g点，左下角点
//         path.push(-55,32);//h点
//         path.push(-137,-30);//i点
//         path.push(-33,-33); //j点，左上角点
//         sp.graphics.drawPoly(Laya.stage.width/2,Laya.stage.height/2,path,'#ff7f50');
//     }
// })();

// //画圆形
// (function(){
//     var Sprite = Laya.Sprite;
//     var Stage = Laya.Stage;
//     (function(){
//         //初始化舞台
//         Laya.init(1136,640);
//         drawSomething();
//     })();

//     function drawSomething(){
//         var sp = new Sprite();
//         Laya.stage.addChild(sp);
//         //画圆
//         sp.graphics.drawCircle(80,80,50,'#f00');

//         //画扇形
//         sp.graphics.drawPie(180,80,50,90,180,'#f00');

//         //画矩形
//         sp.graphics.drawRect(20,130,100,50,'#ff0');

//         //drawPath 画不规则图形
//         //矩形
//         var path = [
//             ['moveTo',0,0], //画笔移动a点，起始点
//             ['lineTo',100,0], //b点
//             ['lineTo',100,50], //c点
//             ['lineTo',0,50], //d点
//             ['closePath'] //闭合路径
//         ];
//         sp.graphics.drawPath(180,20,path,{fillStyle:'#f00'});
//         //圆弧
//         var path = [
//             ['moveTo',30,0],//起始点
//             ['arcTo',500,0,500,30,30], //p1(500,0)为夹角b , (500,30) 为端点p2
//             ['arcTo',500,300,470,300,30], //p1(500,300)为夹角c , (470,300) 为端点p2
//             ['arcTo',0,300,0,270,30], //p1(0,300)为夹角d , (0,270) 为端点p2
//             ['arcTo',0,0,30,0,30], //p1(0,0)为夹角ba , (30,0) 为端点p2
//         ];
//         sp.graphics.drawPath(200,100,path,{fillStyle:'#f00'},{'strokeStyle':'#fff',"lineWidth":'10'});


//     }
// })();