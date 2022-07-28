// Chaos in Camelot
var express = require('express')
var app = express()
app.use(express.static('public'))

app.get('/', function(req, res){
    res.send('Hello world!')
})

const port = process.env.PORT || 3000
app.listen(port, function(){
    console.log('Chaos-in-Camelot listening on port %s!', port)
})