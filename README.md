# Nodejs-push-test
Nodejs-push-test

Node.js push test project

file : routes/key.js

google developer console URL : https://console.developers.google.com/

1. create project on google developer console.
2. google api settings -> Google Cloud Messaging for Android -> credentials -> create new api key -> choose android/ios -> create
3. put the string api key to key_data.android_key
4. put the string device registrationId to key_data.android_device_key 

```javascript
var key_data = {
	android_key: "api-key string",
	ios_key_option: {
        gateway : 	"gateway.sandbox.push.apple.com",
        cert: 		'../../keys/cert.pem',
        key: 		'../../keys/key.pem'
    },
    android_device_key: [
    	"device registrationId"
    ],
    ios_device_key: [
    	""
    ]
}
 exports.key_data = key_data;
```
