
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{ background-color: #CCCCCC; }\n.",[1],"uni-padding-wrap{ background-color: #FFFFFF; }\n",],undefined,{path:"./pages/budget/budget.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/budget/budget.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      