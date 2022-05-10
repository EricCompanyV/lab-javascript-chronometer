class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(()=> {
      this.currentTime+=1
      if (callback) {
        callback()
      }
    }, 10)
  }

  getMinutes() {
    const convertIntoMinutes = Math.floor(this.currentTime/100/60)
    
    return convertIntoMinutes
  }

  getSeconds() {
    const convertIntoSeconds = Math.floor((this.currentTime/100)%60)
    return convertIntoSeconds
  }

  getMilliseconds() {
    return this.currentTime%100
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
    const showMilliseconds = this.computeTwoDigitNumber(this.getMilliseconds())
    return `${showMinutes}:${showSeconds}:${showMilliseconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
