const http = require('http')
const PORT = 3000

const server = http.createServer()

server.on('request', (req, res) => {
  console.log('Method', req.method)
  console.log('Path', req.url)

  if (req.url === '/books' && req.method === 'GET') {
    res.end('Here are the books 📖')
  } else if (req.url === '/books' && req.method === 'POST') {
    res.end('You have created a new book')
  } else {
    res.end('Thank you for visiting the server')
  }
})

server.listen(PORT, () => {
  console.log('Server is now listening on PORT', PORT)
})
