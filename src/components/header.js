var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var profile_img = {
    width: '160',
    display: 'block',
    borderRadius: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-80'
};
var divider = {
    height: '1',
    width: '100%',
    display: 'block',
    margin: '9 0',
    overflow: 'hidden',
    backgroundColor: '#e5e5e5'
};
var hl = {
    margin: '0',
    padding: '20 0 0 0',
    fontSize: '2.2em',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: -1,
    textAlign: 'center',
    lineHeight: '1.4em'
};
var Header = (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        _super.call(this, props);
    }
    Header.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("img", {"src": "img/person.png", "style": profile_img}), React.createElement("header", null, React.createElement("h1", {"className": "primary-color", "style": hl}, "Software Developer")), React.createElement("div", {"style": divider})));
    };
    return Header;
})(React.Component);
exports.Header = Header;
