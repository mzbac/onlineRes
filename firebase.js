var Firebase = require("firebase");
var userssFirebaseRef = new Firebase("https://sizzling-torch-9797.firebaseio.com/users/");
var ref = new Firebase("https://sizzling-torch-9797.firebaseio.com");
// ref.createUser({
//   email    : "bobtony@firebase.com",
//   password : "correcthorsebatterystaple"
// }, function(error, userData) {
//   if (error) {
//     console.log("Error creating user:", error);
//   } else {
//     console.log("Successfully created user account with uid:", userData.uid);
//     userssFirebaseRef.push().set({
//       uid: userData.uid,
//       test: 'testString'
//     });
//   }
// });
// userssFirebaseRef.on("value", function(snapshot) {
//  console.log(snapshot.val());
// }, function(errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });
ref.authWithPassword({
  email    : "bobtony@firebase.com",
  password : "correcthorsebatterystaple"
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData.uid);
    var userssFirebaseRef = new Firebase("https://sizzling-torch-9797.firebaseio.com/users/"+authData.uid);
        userssFirebaseRef.set({
          user:authData.uid,
          test: 'zzzzzz'
        });
  }
});
