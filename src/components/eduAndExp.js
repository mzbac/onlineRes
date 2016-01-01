"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var EduAndExp = (function (_super) {
    __extends(EduAndExp, _super);
    function EduAndExp(props) {
        _super.call(this, props);
    }
    EduAndExp.prototype.render = function () {
        return React.createElement("div", {className: "col-md-7"}, React.createElement("h2", null, "Education& Experience"), React.createElement("div", {className: "media"}, React.createElement("div", {className: "media-left"}, "2007-2009"), React.createElement("div", {className: "media-body"}, React.createElement("h4", {className: "media-heading"}, "heading"), React.createElement("p", null, "some texts"))));
    };
    return EduAndExp;
})(React.Component);
exports.EduAndExp = EduAndExp;
