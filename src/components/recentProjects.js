var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ProjectLiStyle = {
    listStyle: 'none',
    padding: '0 10 0 10'
};
var Projects = (function (_super) {
    __extends(Projects, _super);
    function Projects(props) {
        _super.call(this, props);
    }
    Projects.prototype.render = function () {
        var projects;
        if (this.props.projectsList) {
            projects = this.props.projectsList.map(function (listValue) {
                return React.createElement("h5", {"style": ProjectLiStyle}, listValue);
            });
        }
        else {
            projects = (React.createElement("div", null, React.createElement("i", {"className": "fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"})));
        }
        return React.createElement("div", {"className": "col-md-12"}, React.createElement("h2", null, "Recent Projects"), projects);
    };
    return Projects;
})(React.Component);
exports.Projects = Projects;
