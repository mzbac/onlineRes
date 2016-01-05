var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router=ReactRouter.Router;
var React = require("react");

var App = require('./app.jsx');

var routes = (
  <Router>
    <Route path="/" component={App}>

    </Route>

  </Router>
);

React.render(routes, document.getElementById('container'));
