const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

// setting port
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})