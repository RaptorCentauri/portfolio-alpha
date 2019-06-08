// import {AboutMe} from '../src/app/components'
import Conact from '../src/app/components/Contact/contact'
import * as React from 'react';
import { render, cleanup} from "@testing-library/react";
import 'jest-dom/extend-expect'


afterEach(cleanup)

describe('The Contact component', () => {
    test('should be visible',()=>{
        const { container} = render(<Conact /> );
        const parent = container.querySelector('footer');

        expect(parent).toBeVisible;
    });

    test('the parent elemnt should be a footer',()=>{
        const { container} = render(<Conact /> );
        const parent = container.querySelector('footer');

        expect(container).toContainElement(parent);
    });

    test('should have an a tag child',()=>{
        const { container} = render(<Conact /> );
        const parent = container.querySelector('footer');
        const a = parent.querySelector('a')

        expect(parent).toContainElement(a);
    });


    test('should have 4 children',()=>{
        const { container} = render(<Conact /> );
        const parent = container.querySelector('footer');
        // const children = parent.querySelector('a')

        expect(parent.childElementCount).toBe(4);
    });
})
