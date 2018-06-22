// //缓动动画
// //tween.from()
// Laya.init(1334,750,Laya.WebGL);
// //背景颜色
// Laya.stage.bgColor = '#1b2436';
// //创建缓动文本
// createTween();

// function createTween(){
//     //layabox字符串的总宽度
//     var w = 800;
//     //文本创建的起始x位置(>> 在此使用右移运算符，相当于/2 用>>效率更高)
//     var offsetX = Laya.stage.width - w >> 1;
//     //显示字符串
//     var demoString = 'LayaBox';
//     var letterText;
//     for(var i = 0,len = demoString.length;i < len;i++){
//         letterText = createLetter(demoString.charAt(i));
//         letterText.x = w/len*i+offsetX;
//         //文本的初始y属性
//         letterText.y = 100;

//         /**
//         * 对象letterText属性y从100缓动到300的位置
//         * 用1000毫秒完成缓动效果
//         * 缓动类型采用bounceIn
//         * 单个字符的缓动效果结束后，使用changeColor回调函数将字符改变为红色
//         * 延迟间隔i*100毫秒执行
//         */
//         // Laya.Tween.to(letterText,{y:300},1000,Laya.Ease.bounceIn,Laya.Handler.create
//         // (this,changeColor,[letterText]),i*100);

//         /**
//         * 对象letterText属性y从100缓动到300的位置，每一帧都通过回调方法更新颜色
//         * 用1000毫秒完成缓动效果
//         * 缓动类型采用bounceIn
//         * 单个字符的缓动效果结束后，使用changeColor回调函数将字符改变为红色
//         * 延迟间隔i*100毫秒执行
//         */
//         Laya.Tween.to(letterText,{y:300,update:new Laya.Handler(this,updateColor,
//             [letterText])},1000,Laya.Ease.bounceIn,Laya.Handler.create
//         (this,changeColor,[letterText]),i*100);
//     }

// }
// //缓动进行时的回调更新方法
// //txt 缓动对象
// function updateColor(txt){
//     var c = Math.floor(Math.random()*3);
//     switch(c){
//         case 0:
//             txt.color = '#eee000';
//             break;
//         case 1:
//             txt.color = '#fff';
//             break;
//         case 2:
//             txt.color = '#f00';
//             break;
//         default:
//             txt.color = '#eee000';
//             break;
//     }
// }

// //缓动完成后的回调方法
// // txt 缓动对象
// function changeColor(txt){
//     //将文本字体改变为红色
//     txt.color = "#f00";
// }

// //创建单个字符文本，并加装到舞台
// function createLetter(char){
//     var letter = new Laya.Text();
//     letter.text = char;
//     letter.color = "#fff";
//     letter.font = "Impact";
//     letter.fontSize = 180;
//     Laya.stage.addChild(letter);
//     return letter;
// }