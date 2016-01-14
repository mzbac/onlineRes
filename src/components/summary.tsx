import * as React from 'react';

export class Summary extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }
    render() {
        var summary;
        if(this.props.summaryProp){
            summary=(<p>
                {this.props.summaryProp}
            </p>);
        }else{
            summary=(<p><i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i></p>);
        }

        return <div className="col-md-7">
                      <h2>Summary</h2>
            {summary}
            </div>
    }
}
