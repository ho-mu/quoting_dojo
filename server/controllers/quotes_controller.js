var mongoose=require('mongoose')
var db=mongoose.connection
var collection=db.collection('quotes')
mongoose.Promise=global.Promise
var Quote=mongoose.model('Quote')



module.exports=(function(req,res){
	return{
			index:function(req,res){
				res.render('index')
			},
			quotes_get:function(req,res){
				collection.find({}).toArray(function(err,result){
					res.render('quotes',{quotes: result})
				})
				//res.render('quotes')
			},
			quotes_post:function(req,res){
				console.log('post')
				var quote=new Quote(req.body)
				quote.save(function(err){
					if(err){
						console.log(err)
					}
					collection.find({}).toArray(function(err,result){
					res.render('quotes',{quotes: result})
				})
				})
				
			},
			quotes_skip:function(req,res){
				console.log('skip')
				collection.find({}).toArray(function(err,result){
					res.render('quotes',{quotes: result})
				})
			}
		}
})()
