var dragonViewModel = {
    userName: ko.observable('')
};



function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  ko.applyBindings(dragonViewModel)
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