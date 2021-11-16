const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.resolve(__dirname, 'client')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.get('/leaders', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'leadersgadza.html'))
})

app.get('/gadzainfo', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'gadzaInfo.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'about.html'))
})


app.listen(3000, () => console.log('Server has been started...'))
