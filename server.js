var express=require('express')
var app=express()
var bp=require('body-parser')
var path=require('path')

app.use(express.static(path.join(__dirname + '/client')))
app.use(bp.urlencoded({extended:true}))
app.use(bp.json())
app.set('views',path.join(__dirname+'/client/templates'))
app.set('view engine','ejs')

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(8000,function(){
	console.log('server is listening')
})

