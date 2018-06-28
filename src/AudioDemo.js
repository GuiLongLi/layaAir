// //js播放声音
// var audioCtx = new (window.AudioContext||window.webkitAudioContext);
// var channels = 2;
// var frameCount = audioCtx.sampleRate * 2.0;
// var myArrayBuffer = audioCtx.createBuffer(2,frameCount,audioCtx.sampleRate);
// window.onclick = function (){
//     for(var channel = 0; channel < channels;channel++){
//         var nowBuffering = myArrayBuffer.getChannelData(channel);
//         for(var i = 0;i < frameCount;i++){
//             nowBuffering[i] = Math.random() * 2 - 1;
//         }
//     }

//     var source = audioCtx.createBufferSource();
//     source.buffer = myArrayBuffer;
//     source.connect(audioCtx.destination);
//     source.start();
// }

// //Laya播放声音
// //初始化
// Laya.init(500,500);
// Laya.stage.bgColor = '#f00';
// var audioCtx = new (Laya.Browser.window.AudioContext||Laya.Browser.window.webkitAUdioContext)();
// var channels = 2;
// var frameCount = audioCtx.sampleRate * 2.0;
// var myArrayBuffer = audioCtx.createBuffer(2,frameCount,audioCtx.sampleRate);
// Laya.stage.on(Laya.Event.CLICK,this,function(){
//     for(var channel = 0;channel < channels;channel ++){
//         var nowBuffering = myArrayBuffer.getChannelData(channel);
//         for(var i = 0;i < frameCount;i++){
//             nowBuffering[i] = Math.random() * 2 -1;
//         }
//     }
//     var source = audioCtx.createBufferSource();
//     source.buffer = myArrayBuffer;
//     source.connect(audioCtx.destination);
//     source.start();
// })

// //加载外部声音+频谱
// Laya.init(500,500);
// AudioContext = Laya.Browser.window.AudioContext || Laya.Browser.window.webkitAudioContext;
// this.audioContext = new AudioContext();
// this.analyser = this.audioContext.createAnalyser();
// this.analyser.fftSize = 256;
// Laya.stage.once(Laya.Event.CLICK,this,clickHandler);
// function clickHandler(e){
//     var http = new Laya.HttpRequest();
//     http.on(Laya.Event.COMPLETE, this, completeHandler);
//     http.on(Laya.Event.ERROR,this,errorHandler);
//     http.send('res/sounds/bgm.mp3','','get',Laya.Loader.BUFFER);
// }
// function completeHandler(e){
//     this.audioContext.decodeAudioData(e,decodeAudioData.bind(this));
// }
// function errorHandler(e){
//     console.log('错误了..');
// }
// function decodeAudioData(buffer){
//     this.audioBufferSourceNode = this.audioContext.createBufferSource();
//     this.audioBufferSourceNode.connect(this.analyser);
//     this.analyser.connect(this.audioContext.destination);
//     this.audioBufferSourceNode.buffer = buffer;
//     this.audioBufferSourceNode.start(0);
//     Laya.timer.loop(1,this,drawHandler);
// }
// function drawHandler(){
//     Laya.stage.graphics.clear();
//     var dataArray = new Uint8Array(this.analyser.frequencyBinCount);
//     this.analyser.getByteFrequencyData(dataArray);
//     var step = Math.round(dataArray.length/60);
//     for(var i = 0;i < 40;i++){
//         var energy = (dataArray[step * i]/256.0)*50;
//         for(var j = 0;j < energy;j++){
//             Laya.stage.graphics.drawLine(20 * i + 2,200+4*j,20*(i+1) - 2,200 + 4*j,'#f00',1);
//             Laya.stage.graphics.drawLine(20 * i + 2,200-4*j,20*(i+1) - 2,200 - 4*j,'#ff0',1);
//         }
//         Laya.stage.graphics.drawLine(20*i+2,200,20*(i+1)-2,200,'#f00',1);
//     }
// }