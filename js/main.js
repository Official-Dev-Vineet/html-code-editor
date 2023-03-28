let text = document.querySelector(".text"),
    result = document.querySelector(".result");

// dark theme
let dark = (document.querySelector("#dark").onclick = () => {
    text.style.backgroundColor = "#222";
    text.style.color = "#fff";
});
//light theme
let light = (document.querySelector("#light").onclick = () => {
    text.style.backgroundColor = "#fff";
    text.style.color = "#222";
});
// full screen
let fullScreen = (document.querySelector("#fullscreen").onclick = () => {
    document.querySelector(".nav").style.display = "none";
    document.querySelector(".text-editor").style.minHeight="100vh"
    document.querySelector("#show-nav").style.display = "inline-block";
});
// run code
let run = (document.querySelector("#run").onclick = () => {
    result.src = "data:text/html;charset=utf-8," + encodeURI(text.textContent);
});

// live reload
document.querySelector("#live").onclick = function () {
    if (this.checked) {
        text.addEventListener("keyup", live, false);
        function live() {
            result.src =
                "data:text/html;charset=utf-8," + encodeURI(text.textContent);
            console.log("live reload enabled");
        }
    }
};
// stop live reload 
document.querySelector("#clear").onclick = function () {
    text.textContent = ""
    result.src =
        "data:text/html;charset=utf-8," + encodeURI(text.textContent);
}

// show nav
document.querySelector("#show-nav").onclick = () => {
    document.querySelector(".nav").style.display = "flex";
    document.querySelector(".text-editor").style.minHeight="calc(100vh - 70px)"
    document.querySelector("#show-nav").style.display = "none";
};
