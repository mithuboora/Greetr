// gets a new object (the architecture allows to not have to use the 'new' keyword here)
var g = G$('Joe','Jones');

// use of chainable methods
g.greet().setLang('es').greet(true).log();

// use of object on the click of the login button
$('#login').click(function () {
	 // create a new 'Greetr' object (let's pretend we know the name from the login)
	var loginGreetr = G$('John', 'Doe');
	// hide the login on the screen
	$('#logindiv').hide();
	 // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
	loginGreetr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})