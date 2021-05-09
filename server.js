
if(process.env.NODE.ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const express_layout = require('express-ejs-layouts')
const { Mongoose } = require('mongoose')
const app = express()
app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')
app.set('layout', 'layouts/layout')
app.use(express.static('public'))
app.use(express_layout)

const index_router = require('./routes/index')
app.use('/', index_router)
app.listen(process.env.PORT || 3000)
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser : true, useUnifiedTopology: true }) // this is an object 
const db = mongoose.connection
db.on('error', error => console.error(error))

db.once('open', () => console.log('connected to mongoose'))
