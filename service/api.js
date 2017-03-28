var express = require('express');
var router = express.Router();
var db = require('../db.js');
var util = require('../util');

router.get('/test', function(req, res, next) {
	console.log('-------------test----------------');
	var openid = req.query.openid;
	console.log(openid)
	db.query(`select state from member where open_id='${openid}'`, (err, rows) => {
		console.log(err, rows);
		if (!err) {
			res.send(rows);
		} else {
			next(new Error('无数据'));
		}
	})
});
router.get('/wx/oauth2', async function(req, res, next) {
	var code = req.query.code,
		state = req.query.state;
	if(code && state){
		state = state.split(',');
		var data = '',project='',page='',extinfo='';
		data = await util.getOpenid(code);
		console.log(data);
		if (JSON.parse(data).openid) {
			//res.send(data.openid);
			let nstate = -1;
			data = JSON.parse(data);
			console.log(data.openid);
			project = state['0'];
			page = state['1'];
			db.query(`select state from member where open_id='${data.openid}'`,(err, rows)=>{
				if(!err){
					let nstate = rows;
				} else {
					next(new Error('服务器错误,稍后再试'));
				}
			})
			res.redirect(`/${project}/?page=${page}&openid=${data.openid}&state=${nstate}`);
		} else {
			console.error(data.errmsg);
			next(new Error(JSON.parse(data).errmsg));
		}
	} else {
  		var err = new Error("invalid code");
  		err.status = 404;
		next(err);
	}
});

module.exports = router;