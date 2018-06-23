// // JSONP跨域读取数据
// var LayaSample = (function(){
//     function LayaSample(){
//         Laya.init(100,100);
//         var script = Laya.Browser.createElement("script");
//         Laya.Browser.document.body.appendChild(script);
//         script.src = "http://localhost:80/?a=1";
//     }
//     LayaSample.onComplete = function(){
//         console.log("JSONP执行到这里");
//     }
//     return LayaSample;
// })();
// new LayaSample();