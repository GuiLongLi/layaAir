// //播放视频
// Laya.init(0,0);
// var Hls = Laya.Browser.window.Hls; //获取对Hls的引用
// var plyr = Laya.Browser.window.plyr;;//获取对Plyr的引用
// //获取video对象，就是页面上命名为 Player的标签
// var video = Laya.Browser.document.querySelector('#player');
// if(Hls.isSupported()){
//     var hls = new Hls();
//     //加载m3u8源
//     hls.loadSource('http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8');
//     hls.attachMedia(video);
//     hls.on(Hls.Events.MANIFEST_PARSED,function(){
//         video.play();
//     });
// }
// plyr.setup(video);

//摄像头
Laya.init(Laya.Browser.width,Laya.Browser.height);
if(Laya.Media.supported() === false){
    alert('浏览器不支持');
}
else{
    showMessage();
    var options = {
        audio:true,
        video:{
            facingMode:{
                exact:'environment'  //后置摄像头，默认值
            },
            width:Laya.stage.width,
            height:Laya.stage.height
        }
    };
    Laya.Media.getMedia(options,Laya.Handler.create(this,onSuccess),Laya.Handler.create(this,onError));
}
function showMessage(){
    var tex = new Laya.Text();
    Laya.stage.addChild(tex);
    tex.text = '单击舞台播放和暂停';
    tex.color = '#fff';
    tex.fontSize = 100;
    tex.valign = 'middle';
    tex.align = 'center';
    tex.size(Laya.stage.width,Laya.stage.height);
}
function onSuccess(url){
    this.video = new Laya.Video(Laya.stage.width,Laya.stage.height);
    this.video.load(url);
    Laya.stage.addChild(this.video);
    Laya.stage.on('click',this,onStageClick);
}
function onError(error){
    alert(error.message);
}
function onStageClick(){
    //切换播放和暂停
    if(!this.video.paused){
        this.video.pause();
    }
    else{
        this.video.play();
    }
}