var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var RadarChart = require("react-chartjs").Radar;
var Skills = (function (_super) {
    __extends(Skills, _super);
    function Skills(props) {
        _super.call(this, props);
    }
    Skills.prototype.render = function () {
        var skill;
        if (this.props.chartProp) {
            skill = React.createElement(RadarChart, {"style": { marginTop: 35 }, "data": this.props.chartProp.chartData, "options": this.props.chartProp.option});
        }
        else {
            skill = React.createElement("div", null, React.createElement("i", {"className": "fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"}));
        }
        ;
        return React.createElement("div", {"className": "col-md-5"}, React.createElement("h2", null, "Skills"), skill);
    };
    return Skills;
})(React.Component);
exports.Skills = Skills;
