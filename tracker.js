function display() {
// determine if the browser is IE
var isIE = (navigator.appName == "Microsoft Internet Explorer");
//if the browser is Microsoft Internet Explorer, show massive warning
if (isIE) {
    alert("You are using Internet Explorer. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
    hasCookies();
    checkCookie();
};
// warn user if browser is chrome
if (navigator.userAgent.indexOf("Chrome") > -1) {
    alert("You are using Google Chrome. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
    hasCookies();
    checkCookie();
};
//give user hug if browser is firefox
if (navigator.userAgent.indexOf("Firefox") > -1) {
    alert("You are using Firefox. You're cool :)");
};
//if browser is safari, show warning
if (navigator.userAgent.indexOf("Safari") > -1) {
    alert("You are using Safari. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
    hasCookies();
    checkCookie();
};
//if device is iphone, show warning
if (navigator.userAgent.indexOf("iPhone") > -1) {
    alert("You are using an iPhone. This will not work.\nPlease download a real browser.\nhttp://www.mozilla.org/firefox/");
    hasCookies();
    checkCookie();
};
};
//determine if the user has cookies enabled
function hasCookies() {
    var c = false;
    if (navigator.cookieEnabled) {
        c = true;
    };
    return c;
};
//if cookies are enabled, set cookie
if (hasCookies()) {
    document.cookie = "tracker=1";
};

//check if cookie has been set
function checkCookie() {
if (document.cookie.indexOf("tracker=1") > -1) {
    alert("You have cookies enabled. This will not work.\nPlease disable cookies and try again.");
};
};
window.onload = display;
//create browser fingerprint
function createFingerprint() {
    var ua = navigator.userAgent;
    var fp = "";
    var i;
    for (i = 0; i < ua.length; i++) {
        fp += ua.charAt(i);
    };
    return fp;
}
//create fingerprint with canvas
function createFingerprintCanvas() {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var fp = "";
    var i;
    for (i = 0; i < canvas.width; i++) {
        ctx.fillRect(0, 0, 1, 1);
        fp += ctx.getImageData(0, 0, 1, 1).data[0];
    };
    return fp;
}
//store fingerprint in cookie
function storeFingerprint() {
    var fp = createFingerprint();
    var cvs = createFingerprintCanvas();
    document.cookie = "fp=" + fp;
    document.cookie = "cvs=" + cvs;
    document.write("Your fingerprint is: " + fp + "<br>");
}
//rickroll
function rickroll() {
    var r = Math.random();
    if (r > 0.5) {
        window.location = "http://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    else if (r < 0.5) {
        window.location = "http://en.wikipedia.org/wiki/Special:Random";
    }
    else {
        alert("Error");
    };
}