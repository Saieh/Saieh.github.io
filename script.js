var a = document.querySelector("canvas");
a.addEventListener("click", f);
function f() {
 if (document.getElementById("aud").paused) document.getElementById("aud").play();
 else document.getElementById("aud").pause();
}