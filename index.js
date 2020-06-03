const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./src/routes/index.js')
require('./src/connection/databaseConnection.js')() // connect Database

const morgan = require('morgan')
app.use(morgan('dev'))

const cors = require('cors')
const whitelist = ['http://localhost:8080', '*', undefined, 'null']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Application is Running')
})

const PORT = process.env.PORT || 3000

router(app)
app.listen(PORT, () => {
  console.log('Application running on PORT: ', PORT)
})