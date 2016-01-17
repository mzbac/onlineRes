var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var dataLoadActions = require('../actions/DataLoadAction').dataLoadActions;
var Summary = (function (_super) {
    __extends(Summary, _super);
    function Summary(props) {
        _super.call(this, props);
        this.state = {};
        this.state.summary = (React.createElement("p", null, React.createElement("i", {"className": "fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"})));
    }
    Summary.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.summaryProp) {
            this.setState({
                summary: (React.createElement("p", {"onMouseOver": this.onMouseOver.bind(this), "onMouseOut": this.onMouseOut.bind(this)}, nextProps.summaryProp))
            });
        }
    };
    Summary.prototype.render = function () {
        return React.createElement("div", {"className": "col-md-7"}, React.createElement("h2", null, "Summary"), this.state.summary);
    };
    Summary.prototype.onMouseOver = function () {
        if (this.props.authorizedId && this.props.summaryProp) {
            this.setState({
                summary: (React.createElement("div", {"onMouseOver": this.onMouseOver.bind(this), "onMouseOut": this.onMouseOut.bind(this)}, React.createElement("textarea", {"style": {
                    width: '90%'
                }, "value": this.props.summaryProp, "rows": 12, "cols": 60, "onInput": this.onEditSummary.bind(this)})))
            });
        }
    };
    Summary.prototype.onMouseOut = function () {
        dataLoadActions.UpdateUsrSummary(this.state.summaryText, this.props.authorizedId);
        this.setState({
            summary: (React.createElement("p", {"onMouseOver": this.onMouseOver.bind(this), "onMouseOut": this.onMouseOut.bind(this)}, this.props.summaryProp))
        });
    };
    Summary.prototype.onEditSummary = function (event) {
        this.setState({
            summary: (React.createElement("div", {"onMouseOver": this.onMouseOver.bind(this), "onMouseOut": this.onMouseOut.bind(this)}, React.createElement("textarea", {"style": {
                width: '90%'
            }, "value": event.target.value, "rows": 12, "cols": 60, "onInput": this.onEditSummary.bind(this)}))),
            summaryText: event.target.value
        });
    };
    return Summary;
})(React.Component);
exports.Summary = Summary;
