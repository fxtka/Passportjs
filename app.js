const express = require('express');

const app = express()

//routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))



const PORT = process.env.PORT || 9999

app.listen(PORT, console.log(`Port started at port ${PORT}`))