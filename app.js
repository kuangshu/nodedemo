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
//挂载mobile项目路由
var vip = require('./routes/vip');
var api = require('./service/api');
var app = express();

var config = require('./bin/config.js');
//var User = require('./models/user.js');
var db = require('./db.js');

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/vip',vip);
app.use('/node/api',api);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
	db.query(`SELECT state from member, WHERE open_id='${openid}'`, function(err, rows) {
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
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err.message);
  console.log(err.status);
  console.log(err.stack);
  res.render('error', { err:err });
});

module.exports = app;
