//该类需继承自显示对象类
// 在该类中使用了自定义的着色器程序
// 注意：使用自定义着色器时，需要设置该显示对象类的渲染模式this._renderType |= Laya.RenderSprite.CUSTOM;并且需要重写该类的渲染处理函数
var myShaderSprite = (function(_super){
    this.iNum = 0;
    function myShaderSprite(){
        myShaderSprite.super(this);
    }
    Laya.class(myShaderSprite,'myShaderSprite',_super);

    //初始化此类
    //texture纹理对象
    // vb顶点数组
    // ib顶点索引数组
    myShaderSprite.prototype.init = function(texture,vb,ib){
        this.vBuffer = Laya.VertexBuffer2D.create();
        this.iBuffer = Laya.IndexBuffer2D.create();
        this.ibData = new Uint16Array();
        if(vb){
            vbArray = vb;
        }
        else{
            vbArray = [];
            var texWidth = texture.width;
            var texHeight = texture.height;

            //定义颜色值，取值范围0-1浮点
            var red = 1,
            greed = 1,
            blue = 1,
            alpha = 1;
            //在顶点数组中放入4个顶点
            //每个顶点的数据: (坐标x,坐标y,u,v,R,G,B,A)
            vbArray.push(0,0,0,0,red,greed,blue,alpha);
            vbArray.push(texWidth,0,1,0,red,greed,blue,alpha);
            vbArray.push(texWidth,texHeight,1,1,red,greed,blue,alpha);
            vbArray.push(0,texHeight,0,1,red,greed,blue,alpha);
        }

        if(ib){
            ibArray = ib;
        }
        else{
            ibArray = [];
            //在顶点索引数组中放入组成三角形的顶点索引
            //在三角形的顶点索引对应顶点数组vbArray里的点索引，索引从0开始
            ibArray.push(0,1,3); //从第一个三角形的顶点索引
            // ibArray.push(3,1,2); //从第二个三角形的顶点索引
        }
        this.iNum = ibArray.length;
        this.vbData = new Float32Array(vbArray);
        this.ibData = new Uint16Array(ibArray);

        this.vBuffer.append(this.vbData);
        this.iBuffer.append(this.ibData);

        this.shaderValue = new myShaderValue();
        this.shaderValue.textureHost = texture;
        this._renderType |= Laya.RenderSprite.CUSTOM // 设置当前显示对象的渲染模式为自定义渲染模块
    }
    //重写渲染函数
    myShaderSprite.prototype.customRender = function(context,x,y){
        context.ctx.setIBVB(x,y,(this.iBuffer),(this.vBuffer),this.iNum,null,myShader.shader,this.shaderValue,0,0);
    }   
    return myShaderSprite;
})(Laya.Sprite);