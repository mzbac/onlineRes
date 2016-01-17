import * as React from 'react';
var  dataLoadActions  = require('../actions/DataLoadAction').dataLoadActions;
export class Summary extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.summary= (<p>
            <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
        </p>);
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.summaryProp) {
            this.setState({
                summary: (<p onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
                    {nextProps.summaryProp}
                </p>)
            })
        }
    }
    render() {
        return <div className="col-md-7">
            <h2>Summary</h2>
            {this.state.summary}
        </div>
    }

    onMouseOver() {
          if(this.props.authorizedId&&this.props.summaryProp){
            this.setState({
                summary: (<div onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
                    <textarea style={{
                    width:'90%'
                    }} value= {this.props.summaryProp} rows={12} cols={60}
                    onInput={this.onEditSummary.bind(this)}
                    />
                </div>)
            })
        }
    }
    onMouseOut(){
        dataLoadActions.UpdateUsrSummary(this.state.summaryText,this.props.authorizedId);
        this.setState({
            summary:(<p onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
                {this.props.summaryProp}
            </p>)
        });
    }
    onEditSummary(event){
        this.setState({
            summary: (<div onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
                <textarea style={{
                    width:'90%'
                    }} value= {event.target.value} rows={12} cols={60}
                          onInput={this.onEditSummary.bind(this)}
                />
            </div>),
            summaryText:event.target.value
        });
    }

}
