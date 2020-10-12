const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = 3000

app.use(morgan('dev'))
app.use(express.static(__dirname))

app.get('/', (req, res) => res.sendFile('./index.html'))

app.listen(PORT, () => console.log('serving on port', PORT))
