var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Skills = (function (_super) {
    __extends(Skills, _super);
    function Skills(props) {
        _super.call(this, props);
    }
    Skills.prototype.render = function () {
        return React.createElement("div", {"className": "col-md-5"}, React.createElement("h2", null, "Skills"));
    };
    return Skills;
})(React.Component);
exports.Skills = Skills;
