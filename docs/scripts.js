const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keyup", logKeyUp);
input.addEventListener("keydown", logKeyDown);

var startTimes = {};

function logKeyUp(e) {
	var elapsed = null;
	if (startTimes[e.code]) {
		elapsed = new Date().getTime() - startTimes[e.code];
		startTimes[e.code] = null;
	}
  log.textContent += e.code + " UP; " + " key: '" + e.key + "', ctrl: " + e.ctrlKey + ", alt: " + e.altKey + ", shift: " + e.shiftKey + ", meta: " + e.metaKey + ", repeat: " + e.repeat + ", keyCode: " + e.keyCode + ", charCode: " + e.charCode + ", which: " + e.which + (elapsed ? ", elapsed: " + elapsed + "ms" : "") + "\r\n";
}

function logKeyDown(e) {
  if (!e.repeat) {
	  if (!startTimes[e.code]) {
		  startTimes[e.code] = new Date().getTime();
	  }
  }
  log.textContent += e.code + " DOWN; " + " key: '" + e.key + "', ctrl: " + e.ctrlKey + ", alt: " + e.altKey + ", shift: " + e.shiftKey + ", meta: " + e.metaKey + ", repeat: " + e.repeat + ", keyCode: " + e.keyCode + ", charCode: " + e.charCode + ", which: " + e.which + "\r\n";
}

function eraseText() {
    location.reload()
}