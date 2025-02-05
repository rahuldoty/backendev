require( 'dotenv'). config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req,res) => {
    res.send("You are in Home Page")
})

app.get('/login',(req,res) => {
    res.send("Your LoggedIn")
})

app.get('/youtube',(req,res) =>{
    res.send("https://www.youtube.com/senoopsy")
})
app.get('/user',(req,res) => {
  res.send("<h1>senoopsy</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})