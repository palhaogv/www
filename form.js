var modal = document.getElementById("modal");
var btn = document.getElementById("popup-btn");
var closeButton = document.getElementById("find-out");
btn.onclick = function() {
    modal.style.display = "flex";
}

closeButton.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}
