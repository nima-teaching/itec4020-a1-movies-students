let ProgressBar = require('progress')
let bar
let startTime

const createProgressBar = (itemCount, clear) => {
  clear = clear || false
  bar = new ProgressBar('  fetching [:bar] :rate req/s :percent ETA::etas Elapsed::elapsed', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    clear: clear,
    total: itemCount,
    stream: process.stdout,
  })
  startTime = new Date()
}

const tick = () => bar.tick()

const getPbarElapsed = () => {
  let elapsed = new Date - startTime
  return isNaN(elapsed) ? '0.0' : (elapsed / 1000).toFixed(1)
}

module.exports = {
  createProgressBar,
  tick,
  getPbarElapsed,
}
