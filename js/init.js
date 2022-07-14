try {
document.getElementById("links-right").style.marginTop = (document.body.clientHeight/2 - document.getElementById("link-right").offsetWidth/0.5) + "px";
document.getElementById("links-right").style.marginRight = "8px";
document.getElementById("links-left").style.marginTop = (document.body.clientHeight/2 - document.getElementById("link-left").offsetWidth*2.75) + "px";
document.getElementById("links-left").style.marginLeft = "8px";
} catch {}
// let total = 3;
// let isSet = false;
// function set() {
//     if (isSet == false) {
//         let selected = Math.round(Math.random()*3)
//         for (let i = 0; i < total; i++) {
//             if (i != selected) document.getElementById(`name${i+1}`).style.display = "none";
//         }
//         isSet = true;
//     }
// }
// function reset() {
//     for (let i = 0; i < total; i++) {
//         document.getElementById(`name${i+1}`).style.display = "block";
//     }
//     isSet = false;
// }

document.body.addEventListener("mousemove", (e) => {
    document.getElementById("circle").style.left = e.pageX - 48 + "px";
    document.getElementById("circle").style.top = e.pageY - 45 + "px";
})