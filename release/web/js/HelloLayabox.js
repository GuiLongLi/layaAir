// //初始化引擎
// Laya.init(550,400);
// //自定义文件名称
// this.mFontName = 'diyFont';
// this.mBitmapFont = new Laya.BitmapFont();
// //这里不需要拓展名,外部保证fnt与png文件同名
// this.mBitmapFont.loadFont('res/bitmapFont/test.fnt',new Laya.Handler(this,onLoaded));

// function onLoaded(){
//     init();
// }
// function init(){
//     //如果位图字体中，没放空格，最好设置一个空格的宽度
//     this.mBitmapFont.setSpaceWidth(10);
//     Laya.Text.registerBitmapFont(this.mFontName,this.mBitmapFont);
//     var txt = new Laya.Text();
//     txt.text = "这是layabox测试文件";
//     //设置宽度，高度自动匹配
//     txt.width = 250;
//     //自动换行
//     txt.wordWrap = true;
//     txt.align = "center";
//     //使用我们注册的字体
//     txt.font = this.mFontName;
//     txt.fontSize = 50;
//     txt.leading = 5;
//     //添加到显示列表
//     Laya.stage.addChild(txt);
// }