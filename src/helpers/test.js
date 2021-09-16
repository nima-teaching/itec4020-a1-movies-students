
const pbar = require('./pbar')


const testFetch = async (fetchPage) => {
  console.log('Testing a single fetch')
  pbar.createProgressBar(1, true)
  let resultPromise = fetchPage(1)

  if (!resultPromise instanceof Promise) {
    console.log('function needs to return a promise')
  } else {
    console.log('properly returned promise')
  }

  console.log('Printing the first few elements')
  let result = await resultPromise
  for(let i=0; i<3; i++) {
    let d = result.data[i]
    console.log(`      ${d.id}: ${d.original_title}`)
  }
}

module.exports = {
  testFetch
}
