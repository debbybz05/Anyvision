var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SearchSchema = new Schema({
    words:String,
	term:String,
    country:String,
    media:String,
    entity:String,
    attribute:String,
    limit:Number,
    lang:String,
    id:String,
    amgArtistId:String,
    sort:String,
    upc:String,
    amgAlbumId:String,
    amgVideoId:String,
    isbn:String
});

var Search = mongoose.model('Search', SearchSchema );