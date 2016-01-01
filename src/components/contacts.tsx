import * as React from 'react';

var contactListStyle= {
  padding: 0,
  margin: 0,
}
var contactListLiStyle= {
  listStyle: 'none',
  fontWeight: 'bold',
  lineHeight: '3.2em'
}

export class Contacts extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="col-md-5">
                      <h2>Contact info</h2>
                      <ul style={contactListStyle}>
                        <li style={contactListLiStyle}>
                          <i className="fa fa-linkedin-square fa-2x"></i>
                          linkedin</li>
                        <li style={contactListLiStyle}>
                          <i className="fa fa-envelope fa-2x"></i>
                          email</li>
                        <li style={contactListLiStyle}>
                          <i className="fa fa-phone-square fa-2x"></i>
                          phone</li>
                          </ul>
            </div>;
    }
}
