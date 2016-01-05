window.jQuery = $ = require('jquery');
var bootstrap = require('bootstrap/dist/js/bootstrap');
require('./route');
var  dataLoadActions  = require('./actions/DataLoadAction').dataLoadActions;


var profileStore  = require('./stores/UserProfileStore').profileStore;
profileStore.listen(function(){

console.log('change event from store');

})

dataLoadActions.fetchUsrProfile("test");
