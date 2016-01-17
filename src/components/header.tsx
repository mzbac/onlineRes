import * as React from 'react';

var profile_img = {
    width: '160',
    display: 'block',
    borderRadius: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-80'
}
var divider = {
    height: '1',
    width: '100%',
    display: 'block',
    margin: '9 0',
    overflow: 'hidden',
    backgroundColor: '#e5e5e5'
}
var hl = {
    margin: '0',
    padding: '20 0 0 0',
    fontSize: '2.2em',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: -1,
    textAlign: 'center',
    lineHeight: '1.4em'
}
export class Header extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        var header;
        if(this.props.headerImg){
            header= (<div>
                <img src={this.props.headerImg} style={profile_img}/>
                <header>
                    <h1 className="primary-color" style={hl}>Software Developer</h1>
                </header>
                <div style={divider}></div>
            </div>);
        }else{
            header =(<div>
                <img src="img/person.png" style={profile_img}/>
                <header>
                    <h1 className="primary-color" style={hl}>Software Developer</h1>
                </header>
                <div style={divider}></div>
            </div>);
        }
        return (<div>
        {header}
            </div>);
    }
}
