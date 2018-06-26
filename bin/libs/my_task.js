self.addEventListener('message',function(e){
    var xmlreq = new XMLHttpRequest();
    xmlreq.responseType = 'text';
    xmlreq.onload = function(e){
        var data = e.currentTarget.response;
        self.postMessage(data);
    }
    xmlreq.open('get','../res/atlas/comp.atlas');
    xmlreq.send();
},false);