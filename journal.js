var userName = ko.observable();
var userImage = ko.observable();
var userEmail = ko.observable();
    
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  userName = (profile.getName());
  var userImage = ('<img src="' + profile.getImageUrl() + '">');
  var userEmail = ('Email: ' + profile.getEmail());
 
console.log(userName);
}

function signOut() {
				var auth2 = gapi.auth2.getAuthInstance();
				auth2.signOut().then(function() {
					console.log('User signed out.');

				});
			}