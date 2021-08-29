const express = require('express');
const app = express()

app.set('port', process.env.PORT || 3000)

app.use(express.json()) 
app.use(express.static(__dirname + '/public'));
app.use('/', require('./routes/index'))
app.use('/user', require('./routes/user'))
app.listen(app.get('port'))
console.log('Server on port', app.get('port'))
module.exports = app

