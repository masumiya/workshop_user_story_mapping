var timer1;
const ELEMENT_MIN = 0;
const ELEMENT_SEC = 1;

function cntStart() {
  document.timer.elements[2].disabled = true;
  timer1 = setInterval("countDown()", 1000);
}

function cntStop() {
  document.timer.elements[2].disabled = false;
  clearInterval(timer1);
}

function countDown() {
  var min = elementValue(ELEMENT_MIN);
  var sec = elementValue(ELEMENT_SEC);

  tmWrite(min * 60 + sec - 1);
}

function elementValue(type) {
  var time_value = document.timer.elements[type].value;
  if (time_value == "") time_value = 0;
  time_value = parseInt(time_value);
  return time_value;
}

function tmWrite(sec) {
  if (sec <= 0) {
    reSet();
    alert("終了です！");
    exit;
  }

  document.timer.elements[ELEMENT_MIN].value = Math.floor(sec / 60);
  document.timer.elements[ELEMENT_SEC].value = sec % 60;
}

function reSet() {
  document.timer.elements[ELEMENT_MIN].value = "0";
  document.timer.elements[ELEMENT_SEC].value = "0";
  document.timer.elements[2].disabled = false;
  clearInterval(timer1);
}
