function menuToggleOpen() {
  document.getElementById("menu").style.width = "50%";
  document.getElementById("opacity-block").style.opacity = "80%";
  document.getElementById("opacity-block").style.pointerEvents = "all";
}
function menuToggleClose() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("opacity-block").style.opacity = "0";
  document.getElementById("opacity-block").style.pointerEvents = "none";
}
function imgClickNull() {
  alert("No link for this project yet. Construction still ongoing!");
}