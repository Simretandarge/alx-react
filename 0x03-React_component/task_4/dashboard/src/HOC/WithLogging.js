import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.displayName = `WithLogging(${WrappedComponent.displayName || Component})`;
        }

        componentDidMount() {
            console.log(`Component ${WrappedComponent.displayName} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.displayName} is going to unmount`);
        }
        
        render() {
            return <WrappedComponent {...this.props} />
        }
    } 
}

export default WithLogging;