/**
 * Import React from the React package.
 */
import React from 'react'
/**
 * @function Home
 * @constructor
 *
 * @desc When constructed instantiates a series of elements that build out to
 * a simple counter. The count is held in a state object which is accessed by
 * other methods. When the state object is altered, the UI element containing
 * a visual representation of the state is updated. This is all done explicitly
 * in this function.
 */
class Home extends React.Component {
    constructor(props) {
        super(props);

        this.greeting = 'Hello, World!';
        this.state = { count: 0 };

        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    increaseCount() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decreaseCount() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div className="counter">
                <h1>{this.greeting}</h1>
                <div className="count">{this.state.count}</div>
                <div className="controls">
                    <button onClick={this.increaseCount}>++</button>
                    <button onClick={this.decreaseCount}>--</button>
                </div>
            </div>
        );
    }
}


export default Home
