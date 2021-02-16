import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
// import checkPropTypes from 'check-prop-types';

import { findByTestAtrr, checkProps } from './../../../Utils';


const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headline Component', ()=>{

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {

            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@email.com',
                    age: false,
                    onlineStatus: false
                }]
            };
            const propsErr = checkProps(Headline, expectedProps)
            // const propsErr = checkPropTypes(Headline.propTypes, expectedProps, 'props', Headline.name)
            expect(propsErr).toBeUndefined();

        });

    });

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', ()=>{
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })
        it('Should render a H1', () => {
            const h1 = findByTestAtrr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        });
    });

    describe('Have no props', ()=>{

        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })
        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });
    }) 
})