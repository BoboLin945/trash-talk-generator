const express = require('express')
const exphbs = require('express-handlebars')
const generateTrashTalk = require('./generate_trashtalk')
const bodyParser = require('body-parser')

const app = express()

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  console.log(option)
  res.render('index')
})

// setting port
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})