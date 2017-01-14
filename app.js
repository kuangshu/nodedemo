//require('babel-polyfill')

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('superagent');
//import request from 'superagent';
var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var appId = 'wxa96bac0a8c19a07b';
var appSecret = '1194d311c3ed40773cfc2bebd47c0aa4';

function getOpenid(code){
	return new Promise((resolve, reject)=>{
		request
			.get('https://api.weixin.qq.com/sns/oauth2/access_token')
			.accept('json')
			//.header('Accept', 'application/json')
			.query({
				appid: appId,
				secret: appSecret,
				code: code,
				grant_type: 'authorization_code'
			})
			.then((err, res) => {
				console.log(err.res.text, res)
				err ? resolve(err.res.text) : reject(res);
			});		
	})

}
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/node/wx/api/oauth2', async function(req, res){
	var code = req.query.code;
	var data = '';
	await getOpenid(code).then(result => {
		data = result;
	}).catch(result=>{
		data = result;
	});
	data = JSON.parse(data);
	console.log(data);
	if (data.openid) {
		res.send(data.openid);
	} else {
		res.send(data.errmsg);
	}
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
