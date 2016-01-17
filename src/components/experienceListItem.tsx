import * as React from 'react';

export class ExperienceItem extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return  (<div className="media">
            <div style={{minWidth:100}} className="media-left">
                {this.props.itemHeader}
            </div>
            <div className="media-body">
                <h4 className="media-heading">{this.props.itemContentHeader}</h4>
                <p>
                    {this.props.itemContent}
                </p>
            </div>

        </div>);
    }
}
