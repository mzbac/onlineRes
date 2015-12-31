window.jQuery = $ = require('jquery');
var bootstrap = require('bootstrap/dist/js/bootstrap');

var React = require('react');
var Test =require('./test').Test;

var Hello = React.createClass({
  render: function() {
    return( <div>
     <Test />
    </div>)
  }
});

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('.container'));
