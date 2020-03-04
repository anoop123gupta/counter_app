import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count:1
    };
    render() {
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }

formatCount(){
    const {count} = this.state;
    return this.state.count === 0 ? 'zero' : this.state.count;
}
}
export default Counter