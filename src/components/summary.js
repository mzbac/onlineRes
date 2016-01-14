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
        var summary;
        if (this.props.summaryProp) {
            summary = (React.createElement("p", null, this.props.summaryProp));
        }
        else {
            summary = (React.createElement("p", null, React.createElement("i", {"className": "fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"})));
        }
        return React.createElement("div", {"className": "col-md-7"}, React.createElement("h2", null, "Summary"), summary);
    };
    return Summary;
})(React.Component);
exports.Summary = Summary;
