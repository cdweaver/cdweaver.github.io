function createUserObject(userName, userImage, userEmail, entries) {
	this.userName = ko.observable(userName);
	this.userImage = ko.observable(userImage);
	this.userEmail = ko.observable(userEmail);
	this.isSignedIn = ko.observable(true);

	this.entries = ko.observable(entries);
}

function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId());
	var name = (profile.getName());
	var userImage = ('<img src="' + profile.getImageUrl() + '">');
	var userEmail = ('Email: ' + profile.getEmail());
	
	var entries = [{
		title : "My Great Day",
		date : "9/24/2016"
	}, {
		title : "My Horrible Day",
		date : "9/23/2016"
	}];
	
	ko.applyBindings(new createUserObject(name, userImage, userEmail, entries));

}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function() {
		console.log('User signed out.');

	});
}