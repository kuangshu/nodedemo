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

module.exports = {
	getOpenid: getOpenid
}