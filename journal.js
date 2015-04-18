
function dragonViewModel() {
    this.userName = ko.observable("BOB");
    this.imgURL = ko.observable("");
    this.userEmail = ko.observable("");
}

// Activates knockout.js
ko.applyBindings(new dragonViewModel());


function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  userName = ('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
  
}

function signOut() {
				var auth2 = gapi.auth2.getAuthInstance();
				auth2.signOut().then(function() {
					console.log('User signed out.');
				});
			}