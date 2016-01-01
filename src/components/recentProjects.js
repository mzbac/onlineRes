"use strict";
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
        return React.createElement("div", {className: "col-md-12"}, React.createElement("h2", null, "Recent Projects"), React.createElement("ul", {className: "work-list"}, React.createElement("li", {style: ProjectLiStyle}, "#1"), React.createElement("li", {style: ProjectLiStyle}, "#2"), React.createElement("li", {style: ProjectLiStyle}, "#3"), React.createElement("li", {style: ProjectLiStyle}, "#4"), React.createElement("li", {style: ProjectLiStyle}, "#5")));
    };
    return Projects;
})(React.Component);
exports.Projects = Projects;
