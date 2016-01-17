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
        return <div>
            <div className="container" style={mainBlockStyle}>
                <Header headerImg={this.state.User.headerImg} />
                <div className="row">
                    <Summary summaryProp={this.state.User.summary} authorizedId={this.props.location.query.uid}/>
                    <Contacts contactProp={this.state.User.contacts} authorizedId={this.props.location.query.uid} />
                </div>
                <div className="row">
                    <EduAndExp experienceList={this.state.User.eduExp} authorizedId={this.props.location.query.uid} />
                    <Skills chartProp={this.state.User.skills} authorizedId={this.props.location.query.uid} />
                </div>
                <div className="row">
                    <Projects projectsList={this.state.User.recentProjects} authorizedId={this.props.location.query.uid} />
                </div>
            </div>
            <Footer />
        </div>;

    },
    onChange:function(data){
        this.setState({User:data.User});
    }
});
module.exports = App;

