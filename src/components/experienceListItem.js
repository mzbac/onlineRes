var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ExperienceItem = (function (_super) {
    __extends(ExperienceItem, _super);
    function ExperienceItem(props) {
        _super.call(this, props);
    }
    ExperienceItem.prototype.render = function () {
        return (React.createElement("div", {"className": "media"}, React.createElement("div", {"style": { minWidth: 100 }, "className": "media-left"}, this.props.itemHeader), React.createElement("div", {"className": "media-body"}, React.createElement("h4", {"className": "media-heading"}, this.props.itemContentHeader), React.createElement("p", null, this.props.itemContent))));
    };
    return ExperienceItem;
})(React.Component);
exports.ExperienceItem = ExperienceItem;
