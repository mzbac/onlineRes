var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var React = require("react");

var App = require('./app.jsx');
var Login = require('./login.jsx');


var routes = (
    <Router>
        <Route path="/" component={App}>

        </Route>
        <Route path="/login" component={Login}>

        </Route>
    </Router>
);

React.render(routes, document.getElementById('container'));
