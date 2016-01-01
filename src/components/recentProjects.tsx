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
        return <div className="col-md-12">
                      <h2>Recent Projects</h2>
                      <ul className="work-list">
                        <li style={ProjectLiStyle}>#1</li>
                        <li style={ProjectLiStyle}>#2</li>
                        <li style={ProjectLiStyle}>#3</li>
                        <li style={ProjectLiStyle}>#4</li>
                        <li style={ProjectLiStyle}>#5</li>
                          </ul>
            </div>;

    }
}
