window.jQuery = $ = require('jquery');
var bootstrap = require('bootstrap/dist/js/bootstrap');
require('./route');
var  dataLoadActions  = require('./actions/DataLoadAction').dataLoadActions;


var profileStore  = require('./stores/UserProfileStore').profileStore;
profileStore.listen(function(d){
  console.log("User Porfile : "+d.User);
})

dataLoadActions.fetchUsrProfile("d9ab7a34-ba91-46d3-bac6-1710fe3f9bb4");


// var ref = new Firebase("https://sizzling-torch-9797.firebaseio.com");
// ref.authWithPassword({
//   email    : "li.anchen.au@gmail.com",
//   password : "aA811204"
// }, function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//     var ref = new Firebase("https://sizzling-torch-9797.firebaseio.com"+"/users/"+authData.uid);
//     ref.set({
//       summary:'Full stack developer, Single-page application development experience with Angularjs, ASP.NET, webSocket, WIF, WCF.Development language: Java, Typescript, C#, PHP.Javascript',
//       eduExp:[{header:'2001-2003',content:'test'}],
//       recentProjects:['testproject1'],
//       skills:['testskill1'],
//     });
//   }
// });
