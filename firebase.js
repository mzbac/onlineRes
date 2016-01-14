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
// ref.authWithPassword({
//   email    : "bobtony@firebase.com",
//   password : "correcthorsebatterystaple"
// }, function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData.uid);
//     var userssFirebaseRef = new Firebase("https://sizzling-torch-9797.firebaseio.com/users/"+authData.uid);
//         userssFirebaseRef.set({
//           user:authData.uid,
//           test: 'zzzzzz'
//         });
//   }
// });
var ref = new Firebase("https://sizzling-torch-9797.firebaseio.com");
ref.authWithPassword({
  email    : "li.anchen.au@gmail.com",
  password : "aA811204"
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    var ref = new Firebase("https://sizzling-torch-9797.firebaseio.com"+"/users/"+authData.uid);
    ref.set({
      summary:'Full stack developer, Single-page application development experience with Angularjs, ASP.NET, webSocket, WIF, WCF.Development language: Java, Typescript, C#, PHP.Javascript',
      eduExp:[{header:'2001-2003',content:'test'}],
      recentProjects:['testproject1'],
      skills:{chartDate:'test'},
      contacts:{email:"anchen.li86@gmail.com",
        linkedin:"https://www.linkedin.com/profile/view?id=AAMAAAs-fL0Bca02Fisp7UZoHFQeJ93qy_Ot_CM",
        phoneNumber:"000999000"
      }
    });
  }
});
