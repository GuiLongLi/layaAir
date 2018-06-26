var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var EffectAnimation=laya.display.EffectAnimation;
var BGPageUI=(function(_super){
		function BGPageUI(){
			

			BGPageUI.__super.call(this);
		}

		CLASS$(BGPageUI,'ui.BGPageUI',_super);
		var __proto__=BGPageUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("game.ImageRunTime",game.ImageRunTime);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(BGPageUI.uiView);

		}

		BGPageUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":188,"x":274,"skin":"comp/bg.png","runtime":"game.ImageRunTime"}}]};
		return BGPageUI;
	})(View);
var EffectAnimationUI=(function(_super){
		function EffectAnimationUI(){
			

			EffectAnimationUI.__super.call(this);
		}

		CLASS$(EffectAnimationUI,'ui.EffectAnimationUI',_super);
		var __proto__=EffectAnimationUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("EffectAnimation",laya.display.EffectAnimation);
			View.regComponent("ui.scaleUI",ui.scaleUI);
			View.regComponent("ui.scale2UI",ui.scale2UI);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(EffectAnimationUI.uiView);

		}

		EffectAnimationUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Button","props":{"y":200,"x":200,"width":300,"skin":"comp/button.png","sizeGrid":"6,7,6,7","label":"label","height":300,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Script","props":{"playEvent":"mousedown","name":"big","runtime":"ui.scaleUI"}},{"type":"Script","props":{"playEvent":"mouseup","name":"small","runtime":"ui.scale2UI"}}]}]};
		return EffectAnimationUI;
	})(View);
var ExpandPageUI=(function(_super){
		function ExpandPageUI(){
			

			ExpandPageUI.__super.call(this);
		}

		CLASS$(ExpandPageUI,'ui.ExpandPageUI',_super);
		var __proto__=ExpandPageUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("game.MonkeyProp",game.MonkeyProp);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ExpandPageUI.uiView);

		}

		ExpandPageUI.uiView={"type":"View","props":{"width":800,"height":800},"child":[{"type":"Box","props":{"y":10,"x":0,"userName":"小a","speed":1,"runtime":"game.MonkeyProp"},"child":[{"type":"Image","props":{"y":32,"skin":"ui/monkey2.png"}},{"type":"Label","props":{"x":6,"width":100,"text":"1","name":"userN","fontSize":30,"color":"#fff","align":"center"}}]},{"type":"Box","props":{"y":200,"x":0,"userName":"小b","speed":2,"runtime":"game.MonkeyProp"},"child":[{"type":"Image","props":{"y":32,"skin":"ui/monkey2.png"}},{"type":"Label","props":{"x":6,"width":100,"text":"1","name":"userN","fontSize":30,"color":"#fff","align":"center"}}]},{"type":"Box","props":{"y":400,"x":0,"userName":"小c","speed":3,"runtime":"game.MonkeyProp"},"child":[{"type":"Image","props":{"y":32,"skin":"ui/monkey2.png"}},{"type":"Label","props":{"x":6,"width":100,"text":"1","name":"userN","fontSize":30,"color":"#fff","align":"center"}}]}]};
		return ExpandPageUI;
	})(View);
var ExpandPageScriptUI=(function(_super){
		function ExpandPageScriptUI(){
			

			ExpandPageScriptUI.__super.call(this);
		}

		CLASS$(ExpandPageScriptUI,'ui.ExpandPageScriptUI',_super);
		var __proto__=ExpandPageScriptUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("game.MonkeyScript",game.MonkeyScript);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ExpandPageScriptUI.uiView);

		}

		ExpandPageScriptUI.uiView={"type":"View","props":{"width":800,"height":800},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Label","props":{"x":3,"width":100,"text":"1","name":"userN","fontSize":30,"color":"#fff","align":"center"}},{"type":"Image","props":{"y":31,"skin":"ui/monkey2.png"}},{"type":"Script","props":{"userName":"小a","speed":1,"runtime":"game.MonkeyScript"}}]},{"type":"Box","props":{"y":200,"x":0},"child":[{"type":"Label","props":{"x":3,"width":100,"text":"1","name":"userN","fontSize":30,"color":"#fff","align":"center"}},{"type":"Image","props":{"y":31,"skin":"ui/monkey2.png"}},{"type":"Script","props":{"userName":"小b","speed":2,"runtime":"game.MonkeyScript"}}]},{"type":"Box","props":{"y":400,"x":0},"child":[{"type":"Label","props":{"x":3,"width":100,"text":"1","name":"userN","fontSize":30,"color":"#fff","align":"center"}},{"type":"Image","props":{"y":31,"skin":"ui/monkey2.png"}},{"type":"Script","props":{"userName":"小c","speed":3,"runtime":"game.MonkeyScript"}}]}]};
		return ExpandPageScriptUI;
	})(View);
var MonkeyPageUI=(function(_super){
		function MonkeyPageUI(){
			

			MonkeyPageUI.__super.call(this);
		}

		CLASS$(MonkeyPageUI,'ui.MonkeyPageUI',_super);
		var __proto__=MonkeyPageUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("game.ImageRunTime",game.ImageRunTime);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(MonkeyPageUI.uiView);

		}

		MonkeyPageUI.uiView={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":168,"x":256,"skin":"ui/monkey2.png","runtime":"game.ImageRunTime"}}]};
		return MonkeyPageUI;
	})(View);
var scaleUI=(function(_super){
		function scaleUI(){
			
		    this.ani1=null;

			scaleUI.__super.call(this);
			this.effectData =ui.scaleUI.uiView;;
		}

		CLASS$(scaleUI,'ui.scaleUI',_super);
		var __proto__=scaleUI.prototype;
		scaleUI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/monkey2.png"},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":13}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":13}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
		return scaleUI;
	})(EffectAnimation);
var scale2UI=(function(_super){
		function scale2UI(){
			
		    this.ani1=null;

			scale2UI.__super.call(this);
			this.effectData =ui.scale2UI.uiView;;
		}

		CLASS$(scale2UI,'ui.scale2UI',_super);
		var __proto__=scale2UI.prototype;
		scale2UI.uiView={"type":"View","props":{},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/monkey2.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":1},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":12}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":1},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":12}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
		return scale2UI;
	})(EffectAnimation);