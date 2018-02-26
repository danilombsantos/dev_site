//Arquivo para armazenamento de informações de conexão com banco de dados;
//Shell Connection:
//mongo ds062097.mlab.com:62097/ndstr -u danilomb -p dmbs4nt0s

module.exports = function connInfo(){
	// https://mlab.com/
	var	userMLab = 'danilomb',
		MongoClient	= require('mongodb').MongoClient,
		express		= require('express'),
		db 			= require('mongodb').MongoClient,
		pwdMLab 	= 'dmbs4nt0s',
		pathMLab 	= 'ds062097.mlab.com:62097/',
		dbMLab 		= 'ndstr',
		connStr 	= 'mongodb://'+userMLab+':'+pwdMLab+'@'+pathMLab+dbMLab;
		app			= express();

	MongoClient.connect(connStr, (err, database) => {
		if (err) {
			console.log(err);
			return;
		}else{
			app.listen(process.env.PORT || 3000, () => {
				console.log('Server listening on ' + (process.env.PORT || '3000') + ' port.')
			})
			str = database;
			console.log(JSON.stringify(str));			
		}

	})
}