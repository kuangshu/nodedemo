var express = require('express');
var router = express.Router();
var util = require('../util');

router.get('/', function(req, res, next) {
	res.send('in node/api');
});
router.get('/wx/oauth2', async function(req, res, next) {
	var code = req.query.code,
		state = req.query.state;
	if(code && state){
		state = state.split(',');
		var data = '',project='',page='',extinfo='';
		try {
			data = await util.getOpenid(code);
		} catch (err){
			data = err;
		};
		console.log(data);
		if (JSON.parse(data).openid) {
			//res.send(data.openid);
			data = JSON.parse(data);
			console.log(data.openid);
			project = state['0'];
			page = state['1'];
			var state;
			db.query(`select state from member where open_id=${data.openid}`,(err, rows)=>{
				state = err?err:rows;
			})
			res.redirect(`/${project}/?page=${page}&openid=${data.openid}&state=${state}`);
		} else {
			//res.send(data.errmsg);
			console.error(data.errmsg);
  			var err = new Error(data.errmsg);
			next(err);
		}
	} else {
  		var err = new Error("invalid code");
  		err.status = 404;
		next(err);
	}
});

module.exports = router;