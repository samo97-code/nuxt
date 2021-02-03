const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
const app = require('express')()
app.use(cors())

app.use(bodyParser.json())
app.get('/user', async (req, res) => {
  const response = await axios.get('http://localhost:8080/user')
  res.json({ user: response.data })
})

module.exports = app
