const bodyParser = require('body-parser')
const axios = require('axios')
const app = require('express')()

app.use(bodyParser.json())
app.get('/user', async (req, res) => {
  let response = await axios.get('http://localhost:8080/user')
  res.json({ user: response.data })
})

module.exports = app
