// create A server
// core Module => course
// http : launch server ,send requests
// https : launch a SSL server
// How web works
// routing
// Event Loop 
// parsing Request

// // import http from 'http';
// const http = require('http')
// const fs = require('fs')
// // create A server
// const server = http.createServer((req, res) => {
//   // Routing
//   const url = req.url
//   const method = req.method

//   // POST 
//   if (url === '/') {
//     res.write(`
//     <html>
//     <head>
//     <body>
//     <form action='/message' method='POST'>
//     <input type='text' name='message' ></input>
//     </form>
//     </body>
//     </head>
//     </html>
//     `)
//     return res.end()
//   }


//   // GET
//   if (url === '/message' && method === 'POST') {
//     fs.writeFileSync('message.txt', 'DUMMY')
//     res.statusCode = 302
//     res.setHeader('Location', '/ ')

//     return res.end()
//   }
// })

// server.listen(3000)

// Module
// import http from 'http';
import { createServer } from 'http'
import { writeFileSync } from 'fs'
// create A server
const server = createServer((req, res) => {
  // Routing
  const url = req.url
  const method = req.method

  // POST 
  if (url === '/') {
    res.write(`
    <html>
    <head>
    <body>
    <form action='/message' method='POST'>
    <input type='text' name='message' ></input>
    </form>
    </body>
    </head>
    </html>
    `)
    return res.end()
  }


  // GET
  if (url === '/message' && method === 'POST') {
    writeFileSync('message.txt', 'DUMMY')
    res.statusCode = 302
    res.setHeader('Location', '/ ')

    return res.end()
  }
})

server.listen(3000)