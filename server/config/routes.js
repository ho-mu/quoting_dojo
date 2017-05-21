var quotes_controller=require('./../controllers/quotes_controller.js')

module.exports=function(app){
	
	app.get('/',function(req,res){
		quotes_controller.index(req,res)
	}),
	app.get('/quotes',function(req,res){
		quotes_controller.quotes_get(req,res)
	}),
	app.post('/quotes',function(req,res){
		//if(req.)
		//console.log(`in routes: ${Object.keys(req.method)}`)
		//console.log(`in routes: ${req.method}`)
		quotes_controller.quotes_post(req,res)
	}),
	app.post('/skip_to_quotes',function(req,res){
		quotes_controller.quotes_skip(req,res)
	})
}