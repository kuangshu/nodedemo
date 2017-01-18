var request = require('superagent');
var config = require('./bin/config.js');

function getOpenid(code){
	return new Promise((resolve, reject)=>{
		console.log(code);
		request
			.get('https://api.weixin.qq.com/sns/oauth2/access_token')
			.accept('application/json')
			//.header('Accept', 'application/json')
			.query({
				appid: config.wx.appId,
				secret: config.wx.appSecret,
				code: code,
				grant_type: 'authorization_code'
			})
			.then(res => {
				console.log(res.text)
				resolve(res.text);
			},err=>{
				console.log(err)
				reject(err)
			});	
	});
}

module.exports = {
	getOpenid: getOpenid
}