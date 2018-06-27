var game;
(function(game){
    var MonkeyScript = (function(_super){
        function MonkeyScript(){
            //攻击速度
            this.speed = 0;
            //人物名称
            this.userName = '';
            //记录状态
            this.boo = false;
        }
        
        //设置owner函数，可以直接获取到添加附加脚本的组件实例
        MonkeyScript.prototype = {
            set owner(value){
                this.monkeyBox = value;
                //自定义的脚本会有时序问题，所以在此添加一个延时
                this.monkeyBox.frameOnce(2,this,this.onLoaded);
            }
        } 
        MonkeyScript.prototype.onLoaded = function(){
            //通过子元素的name值获取该对象
            var userN = this.monkeyBox.getChildByName('userN');
            //设置文本内容为属性栏中给的值
            userN.text = this.userName;
            this.monkeyBox.frameLoop(1,this,this.onLoop);
        }
        //设置帧循环，实现左右移动
        MonkeyScript.prototype.onLoop = function(){
            if(this.monkeyBox.x <= 0){
                this.boo = false;
                this.monkeyBox.x += this.speed;
            }
            else if(this.monkeyBox.x < Laya.stage.width - this.monkeyBox.width && this.boo == false){
                this.monkeyBox.x += this.speed;
            }
            else if(this.monkeyBox.x >= Laya.stage.width - this.monkeyBox.width || this.boo == true){
                this.monkeyBox.x -= this.speed;
                this.boo = true;
            }
        }

        return MonkeyScript;
    })();
    game.MonkeyScript = MonkeyScript;
})(game || (game = {}));