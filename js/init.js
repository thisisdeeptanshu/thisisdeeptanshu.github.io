try {
    document.getElementById("links-right").style.marginTop = (document.body.clientHeight/2 - document.getElementById("link-right").offsetWidth/0.5) + "px";
    document.getElementById("links-right").style.marginRight = "8px";
    document.getElementById("links-left").style.marginTop = (document.body.clientHeight/2 - document.getElementById("link-left").offsetWidth*2.75) + "px";
    document.getElementById("links-left").style.marginLeft = "8px";
    document.getElementById("links-normal").style.marginLeft = (document.body.clientWidth/2 - document.getElementById("links-normal").offsetHeight*2.25) + "px";
    document.getElementById("links-normal").style.marginBottom = "18px";
} catch {}

let canCircleMove = true;

document.body.addEventListener("mousemove", (e) => {
    if (canCircleMove) {
        document.getElementById("circle").style.left = e.pageX - 50 + "px";
        document.getElementById("circle").style.top = e.pageY - 50 + "px";
        document.getElementById("circle").style.borderRadius = "50px";
        document.getElementById("circle").style.width = "100px";
        document.getElementById("circle").style.height = "100px";
    }
    document.getElementById("smolcircle").style.left = e.pageX - 2.5 + "px";
    document.getElementById("smolcircle").style.top = e.pageY - 2.5 + "px";
})

function onHover(element) {
    canCircleMove = false;
    document.getElementById("circle").style.transition = "all 0.3s";
    document.getElementById("circle").style.width = (element.offsetWidth + 20) + "px";
    document.getElementById("circle").style.height = (element.offsetHeight + 20) + "px";
    document.getElementById("circle").style.top = (element.offsetTop - 10) + "px";
    document.getElementById("circle").style.left = (element.offsetLeft - 10) + "px";
    document.getElementById("circle").style.borderRadius = "5px";
}

function reset()  {
    canCircleMove = true;
    document.getElementById("circle").style.transition = "all 0.3s, top 0s, left 0s";
}