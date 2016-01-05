

var React = require('react');
var Header = require('./components/header').Header;
var Summary = require('./components/summary').Summary;
var Contacts = require('./components/contacts').Contacts;
var EduAndExp = require('./components/eduAndExp').EduAndExp;
var Skills = require('./components/skills').Skills;
var Projects = require('./components/recentProjects').Projects;
var Footer = require('./components/footer').Footer;

var mainBlockStyle= {
  background: '#fff',
  marginTop: '80',
  padding: '0 30 30 30'
}

var App = React.createClass({
  
  render: function() {

    var t=this.props.children;
    return <div>
        <div className="container" style={mainBlockStyle}>
          <Header />
          <div className="row">
            <Summary />
            <Contacts />
          </div>
          <div className="row">
            <EduAndExp />
            <Skills />
          </div>
          <div className="row">
            <Projects />
          </div>
        </div>
        <Footer />
      </div>;

  }
});
module.exports =App;
// var Router = require('react-router');
// var Route = Router.Route;
//
// var routes = (
//   <Route path="/" handler={App}>
//   </Route>
// );
//
// Router.run(routes, function(Root) {
//   React.render(<Root />, document.getElementById('container'));
// });

// var element = React.createElement(Hello, {});
// React.render(element, document.querySelector('#container'));
