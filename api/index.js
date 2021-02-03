const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
const app = require('express')()
app.use(cors())

const pathDir = path.resolve(__dirname, '../db.json')

app.use(bodyParser.json())
app.get('/user', async (req, res) => {
  // const response = await axios.get('http://localhost:8080/user')

  // Get Data
  // const rawdata = fs.readFileSync(pathDir)
  // const json = JSON.parse(rawdata)

  // eslint-disable-next-line node/handle-callback-err
  fs.readFile(pathDir, (err, data) => {
    const json = JSON.parse(data)

    // Delete Data
    delete json.user.address

    // Update Data
    json.user.count = 5

    fs.writeFile(pathDir, JSON.stringify(json), function (err) {
      if (err) { throw err }
      console.log('The "data to append" was appended to file!')
      res.json({ user: json.user })
    })
  })

  // res.json({ user: json.user })
})

module.exports = app
