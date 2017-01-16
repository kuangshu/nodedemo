//require('babel-polyfill')
//fetch 请求模块
//require('es6-promise').polyfill();
//require('isomorphic-fetch');

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

var config = require('./bin/config.js');
//var User = require('./models/user.js');
var db = require('./db.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

function getOpenid(code){
	return new Promise((resolve, reject)=>{
		request
			.get('https://api.weixin.qq.com/sns/oauth2/access_token')
			.accept('json')
			//.header('Accept', 'application/json')
			.query({
				appid: config.wx.appId,
				secret: config.wx.appSecret,
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

app.get('/node/wx/api/oauth2', async function(req, res, next){
	var code = req.query.code,
		state = req.query.state.split(',');
	var data = '',project='',page='',extinfo='';
	await getOpenid(code).then(result => {
		data = result;
	}).catch(result => {
		data = result;
	});
	data = JSON.parse(data);
	console.log(data);
	if (data.openid) {
		//res.send(data.openid);
		project = state['0'];
		page = state['1'];

		res.redirect(`/${project}/?page=${page}&openid=${data.openid}`);
	} else {
		//res.send(data.errmsg);
		console.error(data.errmsg);
		next();
	}
});

app.get('/node/query', async function(req, res, next) {
	let openid = req.query.openid;
	let data, user;
	console.log(openid);
	/*user = await User.findAndCountAll({
		where: {
			openId: openid
		}
	}).then(user => {
		console.log(user);
		data = user;
	}, err => {
		data = err;
	});*/
	db.query(`SELECT * from member WHERE open_id='${openid}'`, function(err, rows) {
		if (err) {
			res.send(err); // this renders "views/users.html"
		} else {
			res.send(rows);
		}
	})
	//res.send(data);
});
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
