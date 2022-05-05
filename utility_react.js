window.addEventListener("message", function(event) {
    let iframe = document.getElementById("react").contentWindow;
    iframe.postMessage(event.data, "*");
})

window.onload = function() {
    document.body.innerHTML += document.body.innerHTML + `<iframe src="http://localhost:3000" style="position:absolute; top:0; left:0; width: 100vw; height: 100vh; margin: 0; padding: 0" id="react" frameBorder="0"></iframe>`
}
