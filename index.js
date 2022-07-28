// Chaos in Camelot
var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('Hello world!')
})

var port = (process.argv.length > 2
    && process.argv[2]
    || 8000)
app.listen(port, function(){
    console.log('Chaos-in-Camelot listening on port %s!', port)
})