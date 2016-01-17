var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ExperienceItem = require('./experienceListItem').ExperienceItem;
var EduAndExp = (function (_super) {
    __extends(EduAndExp, _super);
    function EduAndExp(props) {
        _super.call(this, props);
    }
    EduAndExp.prototype.render = function () {
        var experience;
        if (this.props.experienceList) {
            experience = this.props.experienceList.map(function (listValue) {
                return React.createElement(ExperienceItem, {"itemHeader": listValue.itemHeader, "itemContentHeader": listValue.itemContentHeader, "itemContent": listValue.itemContent});
            });
        }
        else {
            experience = (React.createElement("div", null, React.createElement("i", {"className": "fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"})));
        }
        return React.createElement("div", {"className": "col-md-7"}, React.createElement("h2", null, "Education & Experience"), experience);
    };
    return EduAndExp;
})(React.Component);
exports.EduAndExp = EduAndExp;
