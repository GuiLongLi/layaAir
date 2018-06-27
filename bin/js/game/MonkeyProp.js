var game;
(function(game){
    var MonkeyProp = (function(_super){
        //攻击速度
        var speed = 0;
        //人物名称
        var userName = '';
        //记录状态
        MonkeyProp.boo = false;
        function MonkeyProp(){
            MonkeyProp.super(this);
            //自定义的脚本会有时序问题，所以在此添加一个延时
            this.frameOnce(2,this,onFrame);
        }
        Laya.class(MonkeyProp,"game.MonkeyProp",_super);
        function onFrame(){
            //通过子元素的name值获取该对象
            var userN = this.getChildByName('userN');
            //设置文本内容为属性栏中给的值
            userN.text = this.userName;
            this.frameLoop(1,this,onLoop);
        }
        //设置帧循环，实现左右移动
        function onLoop(){
            // console.log(this.x);
            if(this.x <= 0){
                MonkeyProp.boo = false;
                this.x += this.speed;
            }
            else if(this.x < Laya.stage.width - this.width && MonkeyProp.boo == false){
                this.x += this.speed;
            }
            else if(this.x >= Laya.stage.width - this.width || MonkeyProp.boo == true){
                this.x -= this.speed;
                MonkeyProp.boo = true;
            }
        }

        return MonkeyProp;
    })(Laya.Box);
})(game || (game = {}));