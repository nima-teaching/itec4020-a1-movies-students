/**
 * ITEC4020: Assignment 1
 * 
 * To get started, read the attached PDF instructions.
 * 
 */

// importing some helper libraries for handling progress bar and testing the code.
const pbar = require('./helpers/pbar')
const test = require('./helpers/test')
// importing the promisified version of filesystem library
const fs = require('fs').promises
// importing axios to make HTTP requests
const axios = require('axios').default

// the output folder used when writing JSON files
// Note: You need to use this variable when writing the `writeJSONToFile` function
const outputFolder = './data'

/**
 * fetchPage fetches a series of superheroe information from the server.
 * Each response contains up to 10 superheroes per page and this function
 * needs to fetch only one page. The page number is specified by the
 * "pageNumber" argument provided to the function.
 * 
 * To function, you need to know the server url and how to specify
 * the page number when sending a request to the server. The server
 * is hosted at "https://itec4020-a1.k.nima-dev.com/superheroes". You can
 * open this url in your browser to see the information you will
 * receive when making a request. When no page number is specified,
 * the server defaults to page 1. You can see if the server has
 * been correctly parsed by the server by looking at the "pageNum"
 * property returned. For example, looking at the result from the
 * link above, you can see:
 * 
 * {
 *    "data": [
 *      { Superhero 1 info },
 *      { Superhero 2 info },
 *      ...
 *    ],
 *    "indexStart":0,
 *    "indexEnd":9,
 *    "perPage":10,
 *    "pageNum":1,
 *    "pageCount":57
 * }
 * 
 * Note that the pageNum is shown as 1, which is the default page
 * number. Also note that to show a more human-friendly version of the
 * JSON data, you can use the JSONView chrome extension available at
 * the following url: 
 * https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en
 * 
 * In this example, the server responds to a GET request (which is what your
 * browser uses by default when you open a url). To specify the page
 * number, you need to specify the "GET parameter" "pageNum". For example, when
 * you open the following url, you can see that the response shows the
 * parsed pageNum to be 10 instead of the default 1:
 * https://itec4020-a1.k.nima-dev.com/superheroes?pageNum=10
 * 
 * Now that you understand the server's API, let's talk about axios,
 * the library that you will be using to make the request. It is
 * one of the best libraries for making HTTP requests in javascript
 * and it uses the "Promise" API for asynchronous communication.
 * You will be using axios.get() to send a GET request to our HTTP
 * server. You can read about the axios API in their documentation:
 * https://www.npmjs.com/package/axios#axios-api
 * 
 * Note: You need to provide `params` in the request config to specify the
 * page number.
 * 
 * Note: axios can automatically parse JSON response from the server, look through
 * their examples and/or documentations to figure out how to use it.
 * 
 * @param {Number} pageNumber the page number we want to fetch
 * @returns {Object} an object containing the information returned by the server (including page info)
 */
async function fetchPage(pageNumber) {
  /**
   * TODO: Use the axios library to make the GET request needed to fetch
   * the results in the page specified by the "pageNumber" argument.
   * 
   * Note: since we are in an async function (look at function definition),
   * we can use "await" to get the value of the result from a Promise.
   */
  

  // let the progress bar know that you have finished processing a request
  pbar.tick()

  /** 
   * TODO: return the object represented by the JSON response
   */
  return 
}

/**
 * fetchSynchronously is a function that can be used to fetch multiple pages of data
 * from the server and merge all the results together into a single array synchronously. The number
 * of pages fetched by this function is specified by the "pageCount" argument passed.
 * To fetch the results synchronously, we will wait for the results of a request
 * to be available before making a new request. To do so, you can use "await" within
 * this async function to wait for the result of a request before making the next one.
 * The result is an array of the JSON data we receive from the server for different pages.
 * The result should look something like this:
 * 
 * [
 *  {
 *    "data": [
 *      { Superhero 1 info },
 *      { Superhero 2 info },
 *      ...
 *    ],
 *    "indexStart":0,
 *    "indexEnd":9,
 *    "perPage":10,
 *    "pageNum":1,
 *    "pageCount":57
 *  },
 *  {
 *    "data": [
 *      { Superhero 11 info },
 *      { Superhero 12 info },
 *      ...
 *    ],
 *    "indexStart":10,
 *    "indexEnd":19,
 *    "perPage":10,
 *    "pageNum":2,
 *    "pageCount":57
 *  },
 *  ...
 * ]
 * 
 * @param {Number} pageCount the number of pages we want to fetch from the server
 * @returns {Array} an array containing the response from all pages merged into a single array
 */
async function fetchSynchronously(pageCount) {
  console.log(`fetching ${pageCount} items synchronously`)
  // creating the progress bar
  pbar.createProgressBar(pageCount)

  // TODO: fetch the results of "pageCount" pages one by one
  
  // TODO: return the array containing all responses
  return
}


/**
 * fetchAsynchronously is the asynchronous version of fetchSynchronously. The main
 * difference between these two functions is that in this function we will fetch the
 * results asynchronously, meaning we will not wait until a request is done before
 * starting the next one. To do so, you can use the Promise.all() method to convert
 * an array of promises into an array of results. Using this method, we can fetch
 * the results much faster using concurrent capabilities of modern computers.
 * 
 * To learn more about Promise.all(), you can visit their documentation:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * 
 * @param {Number} pageCount 
 * @returns {Array} an array containing the superhero info in all pages merged in a single array
 */
async function fetchAsynchronously(pageCount) {
  console.log(`fetching ${pageCount} items asynchronously`)
  // creating the progress bar
  pbar.createProgressBar(pageCount)

  // TODO: fetch results asynchronously (concurrently)
  
  // TODO: return the array containing all responses
  return
}

/**
 * writeJSONToFile gets a file name and the data to be written to that file,
 * then converts the data to JSON format and writes it to disk in a file
 * with the name "fileName" inside the folder specified by "outputFolder"
 * declared at the top of the file.
 * 
 * Example: if the fileName is "test.json" and outputFolder is "./data", then
 * data should be written to "./data/test.json". If the data argument is
 * [{a: 10}], then the content of the file should be [{"a": 10}] which
 * has the same information, but in the JSON syntax.
 * 
 * @param {String} fileName the name of the file we want to write to inside the folder specified by "outputFolder" (declared at the top)
 * @param {Array} data array of the results we want to write into the file
 */
async function writeJSONToFile(fileName, data) {
  // TODO: write the necessary code
}

/**
 * start() is the main function starting the process of invoking and testing
 * different parts of the code that you wrote. You don't need to modify this
 * code. This part also prints out some information about how fast the
 * synchronous and asynchronous implementations are for your information.
 */
async function start() {
  await test.testFetch(fetchPage)

  console.log('==========================================')

  const resultsSync = await fetchSynchronously(10)
  // write results to file
  await writeJSONToFile('resultsSync.json', resultsSync)
  console.log('writing Synchronous results done!')
  console.log(`Elapsed: ${pbar.getPbarElapsed()}`)

  console.log('==========================================')
  
  const resultsAsync = await fetchAsynchronously(10)
  // write results to file
  await writeJSONToFile('resultsAsync.json', resultsAsync)
  console.log('writing Asynchronous results done!')
  console.log(`Elapsed: ${pbar.getPbarElapsed()}`)

  console.log('==========================================')

  console.log('Testing asynchronous fetch for 57 pages')
  await fetchAsynchronously(57)
  console.log(`Elapsed: ${pbar.getPbarElapsed()}`)
}

// calling the start() function
start()

