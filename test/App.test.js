import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Home from '../src/App'

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

describe('Application', function() {
    const dom      = new JSDOM(`<!DOCTYPE html><main id="root"></main>`);
    const document = dom.window.document;
    const APP_ROOT = document.querySelector('#root');

    global.document = document;
    global.window   = document.defaultView;

    it('#render()', function() {
        it('should render without crashing', function(done) {
            try {
                ReactDOM.render(<Home/>, APP_ROOT);
                done();
            } catch(err) {
                done(err);
            }
        });

        it('should call componentDidMount', function(done) {
            const wrapper = mount(<Home/>);
            expect(Home.prototype.componentDidMount.calledOnce).to.equal(true);
        })
    });

    it('#increaseCount()', function() {
        it('should increase the count state by 1', function(done) {
            const wrapper = mount(<Home/>);
            expect(Home.prototype.state.count).to.equal(0);
            Home.prototype.increaseCount(null);
            expect(Home.prototype.state.count).to.equal(1);
        });
    })

    it('#decreaseCount()', function() {
        it('should decrease the count state by 1', function(done) {
            const wrapper = mount(<Home/>);
            Home.prototype.setState({count: 1});
            expect(Home.prototype.state.count).to.equal(1);
            Home.prototype.decreaseCount(null);
            expect(Home.prototype.state.count).to.equal(0);
        });
    });
});
