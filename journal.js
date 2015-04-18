var userName = ko.observable();
var userImage = ko.observable();
var userEmail = ko.observable();
    
function createUserObject(userName, userImage, userEmail) {
    this.userName = userName;
    this.userImage = userImage;
    this.userEmail = userEmail;
    console.log(userImage);
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  var name = (profile.getName());
  var userImage = ('<img src="' + profile.getImageUrl() + '">');
  var userEmail = ('Email: ' + profile.getEmail());
  ko.applyBindings(new createUserObject(name, userImage, userEmail));

  

}

function signOut() {
				var auth2 = gapi.auth2.getAuthInstance();
				auth2.signOut().then(function() {
					console.log('User signed out.');
					name = ("");
  					userImage = ("");
  					userEmail = ("");

				});
			}