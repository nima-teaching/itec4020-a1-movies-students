# AP/ITEC4020 Assignment 1: Superheroes API

In this assignment, our goal is to interface with an external API and query information
about superheroes in the database using HTTP endpoints. Please read the PDF instructions on
eClass to understand what is needed to complete the assignment.

- API Endpoint: https://itec4020-a1.nima-dev.com/superheroes
- Original source of data: https://www.superheroapi.com/

## Commands

To install the dependencies:

```sh
npm install
```

To run the code:

```sh
npm run start
```

To run the code in development mode (using `nodemon`):

```sh
npm run dev
```

To prepare the submission:

```sh
npm run prepare-submission
```

## Desired Output

A successful execution of the code would result in an output similar to the following:

```log
$ npm run start

> a1-superhero-client@1.0.0 start
> node src/app.js

Testing a single fetch
properly returned promise
Printing the first few elements
      1: A-Bomb
      2: Abe Sapien
      3: Abin Sur
==========================================
fetching 10 items synchronously
  fetching [====================] 6 req/s 100% ETA:0.0s Elapsed:1.6
writing Synchronous results done!
Elapsed: 1.7
==========================================
fetching 10 items asynchronously
  fetching [====================] 357 req/s 100% ETA:0.0s Elapsed:0.0
writing Asynchronous results done!
Elapsed: 0.2
==========================================
Testing asynchronous fetch for 57 pages
fetching 57 items asynchronously
  fetching [====================] 187 req/s 100% ETA:0.0s Elapsed:0.3
Elapsed: 0.7
```
