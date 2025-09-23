const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')



const app = express()


//DB Config
const db = require('./config/keys').MongoURI


//connect to mongo
mongoose.connect(db, {useNewUrlParser: true})
.then(()=> console.log('MongDB Connected...'))
.catch(err =>console.log(err))





//EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')



//Bodyparser
app.use(express.urlencoded({extended: false}))



//routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))



const PORT = process.env.PORT || 9999

app.listen(PORT, console.log(`Port started at port ${PORT}`))