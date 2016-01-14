var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var footerStyle = {
    backgroundColor: '#ededed',
    color: '#000',
    textAlign: 'center',
    paddingTop: '20',
    paddingBottom: '20'
};
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        _super.call(this, props);
    }
    Footer.prototype.render = function () {
        return React.createElement("footer", {"style": footerStyle}, React.createElement("div", {"className": "container"}, React.createElement("p", null, "Copyright © 2015, All Rights Reserved")));
    };
    return Footer;
})(React.Component);
exports.Footer = Footer;
