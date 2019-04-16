
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{ background-color: #CCCCCC; }\n.",[1],"uni-mr { margin-right: ",[0,10],"; }\n",],undefined,{path:"./pages/designer-list/designer-list.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/designer-list/designer-list.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      