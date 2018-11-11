var models = ['Search.js'];

exports.init =function(){
	for (var i=0; i<models.length; i++){
		var model = './' + models[i];
		require(model);
	}
};