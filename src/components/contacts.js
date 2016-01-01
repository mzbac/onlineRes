"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var contactListStyle = {
    padding: 0,
    margin: 0,
};
var contactListLiStyle = {
    listStyle: 'none',
    fontWeight: 'bold',
    lineHeight: '3.2em'
};
var Contacts = (function (_super) {
    __extends(Contacts, _super);
    function Contacts(props) {
        _super.call(this, props);
    }
    Contacts.prototype.render = function () {
        return React.createElement("div", {className: "col-md-5"}, React.createElement("h2", null, "Contact info"), React.createElement("ul", {style: contactListStyle}, React.createElement("li", {style: contactListLiStyle}, React.createElement("i", {className: "fa fa-linkedin-square fa-2x"}), "linkedin"), React.createElement("li", {style: contactListLiStyle}, React.createElement("i", {className: "fa fa-envelope fa-2x"}), "email"), React.createElement("li", {style: contactListLiStyle}, React.createElement("i", {className: "fa fa-phone-square fa-2x"}), "phone")));
    };
    return Contacts;
})(React.Component);
exports.Contacts = Contacts;
