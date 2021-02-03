const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
const app = require('express')()
app.use(cors())
const Port = process.env.PORT || 8080

app.use(bodyParser.json())
app.get('/user', async (req, res) => {
  const response = await axios.get('https://nuxt-tes.herokuapp.com/user')
  res.json({ user: response.data })
})

module.exports = app
