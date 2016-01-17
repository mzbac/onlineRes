import * as React from 'react';
var RadarChart = require("react-chartjs").Radar;

export class Skills extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        var skill;
        if (this.props.chartProp) {
            skill =  <RadarChart style={{marginTop:35}}data={this.props.chartProp.chartData} options={this.props.chartProp.option}/>;
        } else {
            skill =<div>
                <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
            </div>
        };
        return <div className="col-md-5">
            <h2>Skills</h2>
            {skill}
        </div>;
    }
}
