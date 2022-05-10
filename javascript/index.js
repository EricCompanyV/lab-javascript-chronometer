const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milCenElement = document.getElementById('milCen');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  const minutesToShow = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  const minutesDecimalsToShow = document.getElementById("minDec")
  minutesDecimalsToShow.innerHTML = minutesToShow[0]
  const minutesUnitsToShow = document.getElementById("minUni")
  minutesUnitsToShow.innerHTML = minutesToShow[1]
}

function printSeconds(seconds) {
  const secondsToShow = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  const secondsDecimalsToShow = document.getElementById("secDec")
  secondsDecimalsToShow.innerHTML = secondsToShow[0]
  const secondsUnitsToShow = document.getElementById("secUni")
  secondsUnitsToShow.innerHTML = secondsToShow[1]
}

// ==> BONUS
function printMilliseconds() {
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[0] 
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds())[1]
  
}

function printSplit() {
  let newSplit = chronometer.split()
  const newListObject = document.createElement("li")
  newListObject.innerText = newSplit
  newListObject.className = "list-item"
  const parent = document.getElementById("splits")
  parent.append(newListObject)
}

function clearSplits() {
  const parent = document.getElementById("splits")
  while(parent.firstChild) {
    parent.removeChild(parent.lastChild)
  }
}

function setStopBtn() {
  btnLeftElement.innerText = "STOP"
  btnLeftElement.className = "btn stop"
}

function setSplitBtn() {
  btnRightElement.innerText = "SPLIT"
  btnRightElement.className = "btn split"
}

function setStartBtn() {
  btnLeftElement.innerText = "START"
  btnLeftElement.className = "btn start"
}

function setResetBtn() {
  btnRightElement.innerText = "RESET"
  btnRightElement.className = "btn reset"
  
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.className === ("btn start")) {
    
    setStopBtn()
    setSplitBtn()
    //setInterval(() => {
      chronometer.start(printTime)
    //}, 1000)
  } else if (btnLeftElement.className === "btn stop"){
    setStartBtn()
    setResetBtn()
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === "btn reset") {
    clearSplits()
    chronometer.reset();
    printTime()
    
  } else {
    printSplit()
  }
});
