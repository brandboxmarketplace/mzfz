
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"page{ background-color: #efeff4; }\n",],undefined,{path:"./pages/fabu/fabu.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/fabu/fabu.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      