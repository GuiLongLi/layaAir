// //初始化
// Laya.init(300,300);
// var file = Laya.Browser.document.createElement('input');
// file.style="filter:alpha(opacity=0);opacity:0;width:150px;height:60px;";
// file.type = 'file';//设置file类型
// file.accept = 'image/png'; //设置文件格式png
// file.style.position = 'absolute';
// file.style.zIndex = 999;

// Laya.Browser.document.body.appendChild(file);
// var fileReader = new Laya.Browser.window.FileReader();
// file.onchange = function(e){
//     if(file.files.length){
//         fileReader.readAsDataURL(file.files[0]);
//     }
// };
// fileReader.onload=function(evt){
//     if(Laya.Browser.window.FileReader.DONE == fileReader.readyState){
//         var sp = new Laya.Sprite();
//         sp.loadImage(fileReader.result,0,0,300,300);
//         Laya.stage.removeChildren();
//         Laya.stage.addChild(sp);

//     }
// }

//上传图片
Laya.init(100,100);
var skins = ['res/img/btn/rock.png'];
Laya.loader.load(skins,Laya.Handler.create(this,onUIAssetsLoaded));
function onUIAssetsLoaded(){
    var btn = new Laya.Button('res/img/btn/rock.png');
    Laya.stage.addChild(btn);

    //创建隐藏的file并且把它和按钮对齐，到达位置一直，这里我们默认在0点位置
    var file = Laya.Browser.document.createElement('input');
    //设置file样式
    file.style = "filter:alpha(opacity=0);opacity:0;width:150px;height:60px;";
    file.type = 'file';
    file.accept = 'image/png';
    file.style.position = "absolute";
    file.style.zIndex = 999;
    Laya.Browser.document.body.appendChild(file);
    var fileReader = new Laya.Browser.window.FileReader();
    file.onchange = function(e){
        if(file.files.length > 0){
            fileReader.readAsDataURL(file.files[0]);
        }
    };
    fileReader.onload = function(evt){
        if(Laya.Browser.window.FileReader.DONE == fileReader.readyState){
            var sp = new Laya.Sprite();
            sp.loadImage(fileReader.result,0,0,100,100);
            Laya.stage.addChild(sp);
        }
    }
}
