import * as React from 'react';

var contactListStyle = {
    padding: 0,
    margin: 0,
}
var contactListLiStyle = {
    listStyle: 'none',
    fontWeight: 'bold',
    lineHeight: '3.2em'
}

export class Contacts extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        var contacts;
        if (this.props.contactProp) {
            contacts = (<ul style={contactListStyle}>
                <li style={contactListLiStyle}>
                    <i className="fa fa-linkedin-square fa-2x"></i>
                    <span><a style={{color:'#363636'}} href={this.props.contactProp.linkedin}>Anchen Li</a></span>
                </li>
                <li style={contactListLiStyle}>
                    <i className="fa fa-envelope fa-2x"></i>
                    {this.props.contactProp.email}
                </li>
                <li style={contactListLiStyle}>
                    <i className="fa fa-phone-square fa-2x"></i>
                    {this.props.contactProp.phoneNumber}
                </li>
            </ul>);
        } else {
            contacts = (<div>
                <i className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
            </div>);
        }
        return <div className="col-md-5">
            <h2>Contact info</h2>
            {contacts}
        </div>;
    }
}
