var mongoose = require('mongoose');
var utils = require('./constants/utils')
var Search= mongoose.model('Search');
const https = require('https');

exports.getMostSearched = function(next){
    var agr = [
        {$group: {
            _id: "$words",
            size: {$sum:1}
        }},
        {$sort:{size:-1}},
        {$limit:10}
    ]
 
    Search.aggregate(agr,function(err, ress) {
        next(ress);        
    })
}
exports.search = function(param,next){
    let newSearch = new Search(param);
    url ='search?';
    if(newSearch.term)
        url+='term='+newSearch.term
    if(newSearch.country)
        url+='&country='+newSearch.country
    if(newSearch.media)
        url+='&media='+newSearch.media
    if(newSearch.entity)
        url+='&entity='+newSearch.entity
    if(newSearch.attribute)
        url+='&attribute='+newSearch.attribute
    if(newSearch.limit)
        url+='&limit='+newSearch.limit
    if(newSearch.lang)
        url+='&lang='+newSearch.lang
    newSearch.words=url;
    url=utils.url+url;
    newSearch.save(function (err, saved) {
        if(err)
            next(err);
        else {
            callAPI(url,function(cb){
                next(cb);
            })
        }
    });
}
exports.lookup = function(param,next){
    let newSearch = new Search(param);
    url ='lookup?';
    if(newSearch.id)
        url+='id='+newSearch.id
    if(newSearch.amgArtistId)
        url+='&amgArtistId='+newSearch.amgArtistId
    if(newSearch.entity)
        url+='&entity='+newSearch.entity
    if(newSearch.limit)
        url+='&limit='+newSearch.limit
    if(newSearch.sort)
        url+='&sort='+newSearch.sort
    if(newSearch.upc)
        url+='&upc='+newSearch.upc
    if(newSearch.amgAlbumId)
        url+='&amgAlbumId='+newSearch.amgAlbumId
    if(newSearch.amgVideoId)
        url+='&amgVideoId='+newSearch.amgVideoId
     if(newSearch.isbn)
        url+='&isbn='+newSearch.isbn
    newSearch.words=url;
    url =utils.url+url;
    newSearch.save(function (err, saved) {
        if(err)
            next(err);
        else {
            callAPI(url,function(cb){
                next(cb);
            })
        }
        
    });
}
function callAPI(url,next){
    https.get(url, (resp) => {[]
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            next(data);
        });
        }).on("error", (err) => {
           next(err);
        });
}