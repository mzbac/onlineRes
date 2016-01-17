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
var Firebase = require("firebase");
var ref = new Firebase("https://sizzling-torch-9797.firebaseio.com");
ref.authWithPassword({
  email: "li.anchen.au@gmail.com",
  password: "aA811204"
}, function (error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
    var ref = new Firebase("https://sizzling-torch-9797.firebaseio.com" + "/users/" + authData.uid);
    ref.set({
      headerImg:'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/26d/399/07abe58.jpg',
      summary: 'Full stack developer, Single-page application development experience with Angularjs, ASP.NET, webSocket, WIF, WCF.Development language: Java, Typescript, C#, PHP.Javascript',
      eduExp: [{
        itemHeader: '2014-Present',
        itemContentHeader: 'Technical Specialist',
        itemContent: "Web application development"
      },
        {
          itemHeader: '2014-2015',
          itemContentHeader: 'Bachelor of Information and Communication Technology',
          itemContent: "Swinburne University of Technology"
        },
        {
          itemHeader: '2013-2014',
          itemContentHeader: 'Diploma of Information Technology Networking',
          itemContent: "Victoria University"
        },
        {
          itemHeader: '2010-2012',
          itemContentHeader: 'Project Engineer',
          itemContent: "Hot rolling mill and plate mill automation projects"
        },
      ],
      recentProjects: [''],
      skills: {
        chartData: {
          labels: ["Javascript", "C#", "Java", "PHP", "Typescript", "Python"],
          datasets: [
            {
              label: "programming skill",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [120, 100, 60, 40, 90, 55]
            }
          ]
        },
        option: {
          //Boolean - Whether to show lines for each scale point
          scaleShowLine: true,

          //Boolean - Whether we show the angle lines out of the radar
          angleShowLineOut: true,

          //Boolean - Whether to show labels on the scale
          scaleShowLabels: false,

          // Boolean - Whether the scale should begin at zero
          scaleBeginAtZero: true,

          //String - Colour of the angle line
          angleLineColor: "rgba(0,0,0,.1)",

          //Number - Pixel width of the angle line
          angleLineWidth: 1,

          //String - Point label font declaration
          pointLabelFontFamily: "'Arial'",

          //String - Point label font weight
          pointLabelFontStyle: "normal",

          //Number - Point label font size in pixels
          pointLabelFontSize: 10,

          //String - Point label font colour
          pointLabelFontColor: "#666",

          //Boolean - Whether to show a dot for each point
          pointDot: true,

          //Number - Radius of each point dot in pixels
          pointDotRadius: 3,

          //Number - Pixel width of point dot stroke
          pointDotStrokeWidth: 1,

          //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
          pointHitDetectionRadius: 20,

          //Boolean - Whether to show a stroke for datasets
          datasetStroke: true,

          //Number - Pixel width of dataset stroke
          datasetStrokeWidth: 2,

          //Boolean - Whether to fill the dataset with a colour
          datasetFill: true,

          //String - A legend template
          legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

        }
      },
      contacts: {
        email: "anchen.li86@gmail.com",
        linkedin: "https://www.linkedin.com/profile/view?id=AAMAAAs-fL0Bca02Fisp7UZoHFQeJ93qy_Ot_CM",
        phoneNumber: "000999000"
      }
    });
  }
});
