const hackImage=function(){
  console.log('hack image');
  window.Image = function() {};
  Object.defineProperty(window, "Image", { writable: false} );
};
const script = document.createElement("script");
script.appendChild(document.createTextNode("(" + hackImage + ")();"));
document.documentElement.appendChild(script);
