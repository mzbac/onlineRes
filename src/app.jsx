var React = require('react');
var Header = require('./components/header').Header;
var Summary = require('./components/summary').Summary;
var Contacts = require('./components/contacts').Contacts;
var EduAndExp = require('./components/eduAndExp').EduAndExp;
var Skills = require('./components/skills').Skills;
var Projects = require('./components/recentProjects').Projects;
var Footer = require('./components/footer').Footer;
var  dataLoadActions  = require('./actions/DataLoadAction').dataLoadActions;
var profileStore  = require('./stores/UserProfileStore').profileStore;

var mainBlockStyle = {
    background: '#fff',
    marginTop: '80',
    padding: '0 30 30 30'
}

var App = React.createClass({
    getInitialState: function() {
        return {User: {}};
    },
    componentWillMount: function () {
        profileStore.listen(this.onChange);
        dataLoadActions.fetchUsrProfile("d9ab7a34-ba91-46d3-bac6-1710fe3f9bb4");
    },
    componentWillUnmount:function(){

    },
    render: function () {

        var t = this.props.children;
        return <div>
            <div className="container" style={mainBlockStyle}>
                <Header />
                <div className="row">
                    <Summary summaryProp={this.state.User.summary}/>
                    <Contacts contactProp={this.state.User.contacts} />
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

    },
    onChange:function(data){
        console.log("User Porfile : "+data.User);
        this.setState({User:data.User});
    }
});
module.exports = App;

