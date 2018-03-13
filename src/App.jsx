/**
 * Import React from the React package.
 */
import React from 'react'
/**
 * @class Home
 *
 * @classdesc When constructed instantiates a series of elements that build out to
 * a simple counter. The count is held in a state object which is accessed by
 * other methods. When the state object is altered, the UI element containing
 * a visual representation of the state is updated.
 */
class Home extends React.Component {
    /** @constructor */
    constructor(props) {
        /**
         * Must be called to inherit properties and methods from
         * the parent class.
         */
        super(props);

        /** Appears in our H1 tag below. */
        this.greeting = 'Hello, World!';

        /** The count referenced in the DOM */
        this.state = { count: 0 };

        /**
         * Bind `this` to the methods used in the DOM so we
         * don't have to inline them.
         */
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
    }

    /**
     * @method increaseCount
     * @param e<Event> - Native event object.
     * @desc Increases the count state by 1.
     * @returns void
     */
    increaseCount(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    /**
     * @method decreaseCount
     * @param e<Event> - Native event object.
     * @desc Decreases the count state by 1.
     * @returns void
     */
    decreaseCount(e) {
        this.setState({
            count: this.state.count - 1
        });
    }

    /**
     * @method render
     * @desc Inherited React component function. Renders the JSX DOM elements.
     * @returns HTMLElement
     */
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
