javascript: (function () { 
    var jsCode = document.createElement('script'); 
	var randomNum = Math.floor((Math.random() * 100000) + 1);
	var url = 'https://www.petercole.com/taxi-bookmarklet/main.js?'+randomNum;
    jsCode.setAttribute('src', url);                  
  document.body.appendChild(jsCode); 
 }());