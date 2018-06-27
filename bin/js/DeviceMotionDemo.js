// //陀螺仪和加速计
// //舞台初始化
// Laya.init(550,400);
// this.info = new Laya.Text();
// this.info.fontSize = 50;
// this.info.color = '#fff';
// this.info.size(Laya.stage.width,Laya.stage.height);
// Laya.stage.addChild(this.info);

// //陀螺仪
// Laya.Gyroscope.instance.on(Laya.Event.CHANGE,this,onDeviceorientation);
// function onDeviceorientation(absolute,rotationInfo){
//     this.info.text = 
//         'alpah:' + Math.floor(rotationInfo.alpha) + '\n' + 
//         'beta :' + Math.floor(rotationInfo.beta) + '\n' +
//         'gamma:' + Math.floor(rotationInfo.gamma);
// }

// //加速计
// Laya.Accelerator.instance.on(Laya.Event.CHANGE,this,onMotion);
// function onMotion(acceleration,accelerationIncludingGravity,rotationRate,interval){
//     this.info.text = 
//         'acceleration:(' + acceleration.x.toFixed(3) + ',' + acceleration.y.toFixed(3) + ',' + acceleration.z.toFixed(3) + ')\n' +
//         'accelerationIncludingGravity:(' + accelerationIncludingGravity.x.toFixed(3) + ',' + accelerationIncludingGravity.y.toFixed(3) + ',' + accelerationIncludingGravity.z.toFixed(3) + ')\n' +
//         'rotationRate:alpha ' + Math.floor(rotationRate.alpha) + ', beta ' + Math.floor(rotationRate.beta) + ',gamma ' + Math.floor(rotationRate.gamma) + '\n' + 
//         'interval: '  + interval;
// }