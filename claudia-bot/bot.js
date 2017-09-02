var botBuilder = require('claudia-bot-builder'),
excuse = require('huh');

// module.exports = botBuilder(function (request) {
// return 'Thanks for sending ' + request.text  + 
//   '. Your message is very important to us, but ' + 
//   excuse.get();
// });

module.exports = botBuilder(function (request) {
    console.log("Pesan : ", request.text);
    return __greeting() + ' there! Welcome to Serverless Indonesia. Thanks for sending ' + request.text  + 
      '. Your message is very important to us';
    });

function __greeting(){
    var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good morning');
	var afternoon = ('Good afternoon');
	var evening = ('Good evening');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning; 

	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;

	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
    }   
    
    return themessage;
}