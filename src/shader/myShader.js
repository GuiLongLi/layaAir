//自定义着色器
var myShader = (function(_super){
    function myShader(){
        //顶点着色器程序和片元着色器程序
        var vs = "attribute vec2 position;attribute vec2 texcoord;attribute vec4 color;uniform vec2 size;uniform mat4 mmat;varying vec2 v_texcoord;varying vec4 v_color;void main(){vec4 pos =mmat*vec4(position.x,position.y,0,1);gl_Position = vec4((pos.x/size.x-0.5)*2.0, (0.5-pos.y/size.y)*2.0, pos.z, 1.0);v_color = color;v_texcoord = texcoord;}";
        var ps = "precision mediump float;varying vec2 v_texcoord;varying vec4 v_color;uniform sampler2D texture;void main(){vec4 t_color = texture2D(texture, v_texcoord);gl_FragColor = t_color.rgba * v_color.rgba;}";
        myShader.__super.call(this,vs,ps,'myShader');

    }
    Laya.class(myShader,'myShader',_super);
    //着色器实例对象
    myShader.shader = new myShader();
    return myShader;
})(Laya.Shader);