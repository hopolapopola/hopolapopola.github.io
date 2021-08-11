// determine if the browser is IE
var isIE = (navigator.appName == "Microsoft Internet Explorer");
//if the browser is Microsoft Internet Explorer, show massive warning
if (isIE) {
    alert("You are using Internet Explorer. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
}
// warn user if browser is chrome
if (navigator.userAgent.indexOf("Chrome") > -1) {
    alert("You are using Google Chrome. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
}
//give user hug if browser is firefox
if (navigator.userAgent.indexOf("Firefox") > -1) {
    alert("You are using Firefox. You're cool :)");
}
//if browser is safari, show warning
if (navigator.userAgent.indexOf("Safari") > -1) {
    alert("You are using Safari. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
}
//if device is iphone, show warning
if (navigator.userAgent.indexOf("iPhone") > -1) {
    alert("You are using an iPhone. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
}
