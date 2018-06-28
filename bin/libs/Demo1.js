var Demo1 = (function(){
    function Client(){

    }
    Client.prototype.start = function(){
        console.log('调用方法');
    }
    return Client;
})();
console.log('我被加载进来了..');