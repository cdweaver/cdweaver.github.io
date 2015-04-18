var userName = ko.observable();
var userImage = ko.observable();
var userEmail = ko.observable();
    
function createUserObject(name, img, email) {
    this.userName = name;
    this.userImage = img;
    this.userEmail = email;
    console.log(userImage);
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId());
  var name = (profile.getName());
  var userImage = ('<img src="' + profile.getImageUrl() + '">');
  var userEmail = ('Email: ' + profile.getEmail());
  new createUserObject(name, userImage, userEmail);

  

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