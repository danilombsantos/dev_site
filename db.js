var		express		= require('express'),
		app			= express();
const	connInfo	= require('./bin/database_conn');

connInfo();