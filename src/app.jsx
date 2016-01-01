window.jQuery = $ = require('jquery');
var bootstrap = require('bootstrap/dist/js/bootstrap');

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

var Hello = React.createClass({
  render: function() {
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

var element = React.createElement(Hello, {});
React.render(element, document.querySelector('#container'));
