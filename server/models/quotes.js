var mongoose=require('mongoose')
var Schema=mongoose.Schema

var Quote = new Schema({
	quote:String,
	author:String
},{timestamps:true})

mongoose.model('Quote',Quote)