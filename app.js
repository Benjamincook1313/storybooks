const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const hbs = require('hbs')
const connectDB = require('./config/db')


// Load config
dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

//  Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Handlebars 
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

// Routes
app.use('/', require('./routes'))

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`))