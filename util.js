var request = require('superagent');
var config = require('./bin/config.js');

/*function getOpenid(code){
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
}*/
const getJsonRes = response => response.json().then(json => ({json, response}));
const checkJson = ({json, response}) => {
    if (!response.ok) {
        return Promise.reject(json)
    } else {
        return {json};
    }
}
export const getOpenid = code =>
fetch('https://api.weixin.qq.com/sns/oauth2/access_token', {
    method: 'get',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    },
})
.then(getJsonRes)
.then(checkJson)
.then(
    data => data,
    error => ({
        error: error.message || 'Something bad happened'
    })
);

module.exports = {
	getOpenid: getOpenid
}