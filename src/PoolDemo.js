// 每隔100帧使用对象池方法创建100个雪花，当雪花移动超出边界或缩放小于0时进行了移除舞台，并调用Pool.recover()法方，使指定的对象回收至对象池内。
//初始化
Laya.init(1136,640,Laya.WebGL);
//等比缩放
Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
//背景色
Laya.stage.bgColor = '#232628';
//帧循环
Laya.timer.frameLoop(1,this,onFrame);
this.createTime = 0;

function onFrame(){
    //如果创建对象时间为100帧间隔后
    if(this.createTime >= 100){
        //每200帧间隔创建300个雪花
        for(var i = 0;i < 100;i++){
            //img:Image = new Image(); //不使用对象池的写法
            //通过对象池创建图片,如对象池中无相应的对象，则根据image类型执行 new Image()创建
            var img = Laya.Pool.getItemByClass('img',Laya.Image);
            //通过锚点设置轴心点
            img.anchorX = img.anchorY = 0.5;
            //图片资源
            img.skin = 'res/img/scenery/snow0.png';
        }
    }
}
