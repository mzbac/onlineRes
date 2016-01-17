import * as React from 'react';
var ExperienceItem = require('./experienceListItem').ExperienceItem;
export class EduAndExp extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        var experience;
        if (this.props.experienceList) {
            experience= this.props.experienceList.map(function(listValue){
                return <ExperienceItem itemHeader={listValue.itemHeader} itemContentHeader={listValue.itemContentHeader} itemContent={listValue.itemContent} />;
            })
        } else {
            experience = (<div>
                <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
            </div>);
        }
        return <div className="col-md-7">
            <h2>Education & Experience</h2>
            {experience}
        </div>;
    }
}
