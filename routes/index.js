var express = require('express');
var router = express.Router();

var gcm = require('node-gcm');

var keydata = require('key');

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express' });
});

router.get('/test/gcm', function(req,res,next){
	var message = new gcm.Message();

	var message = new gcm.Message({
    	collapseKey: 'demo',
    	delayWhileIdle: true,
    	timeToLive: 3,
    	data: {
        	key1: 'msg1',
        	key2: 'msg2'
    	},
    	notification: {
        	title: "Hello, World",
        	icon: "ic_launcher",
        	body: "This is a notification that will be displayed ASAP."
    	}
	});

	//add data
	//TODO: none
	message.addData({
    	key1: 'message1',
    	key2: 'message2'
	});

	var sender = new gcm.Sender(keydata.key_data.android_key);

	// Add the registration tokens of the devices you want to send to
	//TODO: key.js to insert datas
	var registrationTokens = keydata.android_device_key;

	// Send the message
	// ... trying only once
	sender.sendNoRetry(message, { registrationTokens: registrationTokens }, function(err, response) {
  		if(err) console.error(err);
  		else    console.log(response);
	});

/*
	// ... or retrying
	sender.send(message, { registrationTokens: registrationTokens }, function (err, response) {
  		if(err) console.error(err);
  		else    console.log(response);
	});

	// ... or retrying a specific number of times (10)
	sender.send(message, { registrationTokens: registrationTokens }, 10, function (err, response) {
  		if(err) console.error(err);
  		else    console.log(response);
	});
*/

});

router.get('/test/apn', function(req, res, next){

});

module.exports = router;
