function Appear(Name) {
    Array.from(document.querySelectorAll(".Page")).forEach(object => {
        if (object.id != "Loading") {
            object.style.display = "none";
        }
    });
    document.getElementById("Loading").style.display = "block";
    setTimeout(() => {
        document.getElementById("Loading").style.display = "none";
        document.getElementById(Name).style.animation = "appear .3s";
        document.getElementById(Name).style.display = "block";
    }, 1500);
}

function JumpTo(URL) {
    window.open(URL);
}
