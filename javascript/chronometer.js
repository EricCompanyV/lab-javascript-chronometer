class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(()=> {
      this.currentTime+=1
      if (callback) callback()
    }, 1000)
  }

  getMinutes() {
    const convertIntoMinutes = Math.floor(this.currentTime/60)
    return convertIntoMinutes
  }

  getSeconds() {
    const convertIntoSeconds = Math.floor(this.currentTime%60)
    return convertIntoSeconds
  }

  computeTwoDigitNumber(numberToPad) {
    let stringNumber = numberToPad.toString()
    if(stringNumber.length === 2) {
      return stringNumber
    } else {
      return `0${stringNumber}`
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    
    const showMinutes = this.computeTwoDigitNumber(this.getMinutes())
    const showSeconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${showMinutes}:${showSeconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
