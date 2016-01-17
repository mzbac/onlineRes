import * as React from 'react';

var ProjectLiStyle = {
    listStyle: 'none',
    padding: '0 10 0 10'
}

export class Projects extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        var projects;
        if (this.props.projectsList) {
            projects = this.props.projectsList.map(function (listValue) {
                return  <h5 style={ProjectLiStyle}>{listValue}</h5>
                });
        } else {
            projects = (<div>
                <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
            </div>);
        }
        return <div className="col-md-12">
            <h2>Recent Projects</h2>

            {projects}

        </div>;

    }
}
