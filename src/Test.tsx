import * as React from 'react';

export interface HelloProps {
    name: string;
}

export class Test extends React.Component<{}, any> {
    constructor(props: HelloProps) {
        super(props);
    }

    render() {
        return <p>Hello World@!</p>;
    }
}
