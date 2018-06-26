// //httpRequest请求
// var HttpRequestExtension = (function (_super) {
//      function HttpRequestExtension() {
//          HttpRequestExtension.__super.call(this);
//      }
//      Laya.class(HttpRequestExtension, 'HttpRequestExtension', _super);
//      var __proto = HttpRequestExtension.prototype;
//      __proto.send = function (url, data, method, responseType, headers) {
//          (method === void 0) && (method = "get");
//          (responseType === void 0) && (responseType = "text");
//          _super.prototype.send.call(this, url, data, method, responseType, headers);
//          this._http.upload.onprogress = function (e) { 
//              console.log(11);
//          }
//          this._http.upload.onloadend = function (e) { 
//              console.log(555);
//          }
//          this._http.upload.onload = function (e) { 
//              console.log(22);
//          }
//          this._http.upload.onerror = function (e) { 
//             console.log(33);
//          }
//          this._http.upload.onabort = function (e) { 
//             console.log(44);
//          }
//      }
//      return HttpRequestExtension;
//  })(Laya.HttpRequest)
// //初始化舞台
// Laya.init(1136,640);
// var xhr = new Laya.HttpRequestExtension();
// xhr.http.timeout = 3; //超时时间
// xhr.send("http://localhost",'','get','text');


// //httpRequest请求22222222-------------------
// var btn = (function()
// {
// 	var Stage       = Laya.Stage;
// 	var Text        = Laya.Text;
// 	var Event       = Laya.Event;
// 	var HttpRequest = Laya.HttpRequest;
// 	var Browser     = Laya.Browser;
// 	var WebGL       = Laya.WebGL;

// 	var hr, logger;

// 	var init = function()
// 	{
// 		// 不支持WebGL时自动切换至Canvas
// 		Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);

// 		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
// 		Laya.stage.alignH = Stage.ALIGN_CENTER;

// 		Laya.stage.scaleMode = "showall";
// 		Laya.stage.bgColor = "#232628";

// 		connect();
// 		showLogger();
// 	};

// 	function connect()
// 	{
// 		hr = new HttpRequest();
// 		hr.once(Event.PROGRESS, this, onHttpRequestProgress);
// 		hr.once(Event.COMPLETE, this, onHttpRequestComplete);
// 		hr.once(Event.ERROR, this, onHttpRequestError);
// 		hr.send('http://localhost', null, 'get', 'text');
// 	}

// 	function showLogger()
// 	{
// 		logger = new Text();

// 		logger.fontSize = 30;
// 		logger.color = "#FFFFFF";
// 		logger.align = 'center';
// 		logger.valign = 'middle';

// 		logger.size(Laya.stage.width, Laya.stage.height);
// 		logger.text = "等待响应...\n";
// 		Laya.stage.addChild(logger);
// 	}

// 	function onHttpRequestError(e)
// 	{
// 		console.log(e);
// 	}

// 	function onHttpRequestProgress(e)
// 	{
// 		console.log(e)
// 	}

// 	function onHttpRequestComplete(e)
// 	{
// 		logger.text += "收到数据：" + hr.data;
// 	}
//     return init;
// })();
// window.document.onclick=btn;