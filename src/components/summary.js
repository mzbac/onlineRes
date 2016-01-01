"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Summary = (function (_super) {
    __extends(Summary, _super);
    function Summary(props) {
        _super.call(this, props);
    }
    Summary.prototype.render = function () {
        return React.createElement("div", {className: "col-md-7"}, React.createElement("h2", null, "Summary"), React.createElement("p", null, "Full stack developer, Single-page application development experience with Angularjs, ASP.NET, webSocket, WIF, WCF.Development language: Java, Typescript, C#, PHP.Javascript"));
    };
    return Summary;
})(React.Component);
exports.Summary = Summary;
