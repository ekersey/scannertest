const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keyup", logKeyUp);
input.addEventListener("keydown", logKeyDown);

function logKeyUp(e) {
  log.textContent += e.code + " UP; " + " key: " + e.key + ", ctrl: " + e.ctrlKey + ", alt: " + e.altKey + ", shift: " + e.shiftKey + ", meta: " + e.metaKey + ", repeat: " + e.repeat + ", keyCode: " + e.keyCode + ", charCode: " + e.charCode + ", which: " + e.which + "\r\n";
}

function logKeyDown(e) {
  log.textContent += e.code + " DOWN; " + " key: " + e.key + ", ctrl: " + e.ctrlKey + ", alt: " + e.altKey + ", shift: " + e.shiftKey + ", meta: " + e.metaKey + ", repeat: " + e.repeat + ", keyCode: " + e.keyCode + ", charCode: " + e.charCode + ", which: " + e.which + "\r\n";
}