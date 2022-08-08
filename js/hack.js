const hackLark=function(){
  console.log('hack lark');
  MutationObserver = (function() {
    function MutationObserver(callBack) {
      this.callBack = callBack;
    }

    MutationObserver.prototype.observe = function(element, options) {
      console.log(element, options)
    };

    MutationObserver.prototype.disconnect = function() {
    };

    return MutationObserver;

  })();
  window.MutationObserver = MutationObserver;
  console.log(window.MutationObserver);
};
const script = document.createElement("script");
script.appendChild(document.createTextNode("(" + hackLark + ")();"));
document.documentElement.appendChild(script);
