var userName;
var userImage;
var userEmail;



function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  userName = ('Name: ' + profile.getName());
  userImage = ('Image URL: ' + profile.getImageUrl());
  console.log(userName;)
  userEmail = ('Email: ' + profile.getEmail());
  createUserObject(userName, userImage, userEmail);
}

function signOut() {
				var auth2 = gapi.auth2.getAuthInstance();
				auth2.signOut().then(function() {
					console.log('User signed out.');
				});
			}