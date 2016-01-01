import * as React from 'react';


var footerStyle= {
  backgroundColor: '#ededed',
  color: '#000',
  textAlign: 'center',
  paddingTop: '20',
  paddingBottom: '20',
}

export class Footer extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <footer style={footerStyle}>
                  <div className="container">
                    <p>
                        Copyright &copy; 2015, All Rights Reserved
                        </p>
                      </div>
            </footer>;
    }
}
