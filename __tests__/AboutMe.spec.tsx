// import {AboutMe} from '../src/app/components'
import AboutMe from '../src/app/components/AboutMe/aboutme'
import * as React from 'react';
import { render, cleanup} from "@testing-library/react";
import 'jest-dom/extend-expect'


afterEach(cleanup)

describe('The AboutMe component', () => {
      test('should be visible',()=>{
        const { container} = render(<AboutMe /> );
        const parent = container.querySelector('div');

        expect(parent).toBeVisible;
    });


//IMG Child
    test('should have an img child',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const img = parent.querySelector('img')

      expect(parent).toContainElement(img);
    });

    test('img child should be visible',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const img = parent.querySelector('img')

      expect(img).toBeVisible();
    });


    test('the img child should have a class of mypic',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const img = parent.querySelector('img')

      expect(img).toHaveClass('mypic');
    });

    test('the img child should have an alt of profile-pic',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const img = parent.querySelector('img')

      expect(img).toHaveAttribute('alt', 'profile-pic');
    });

//H1 child
    test('should have an h1 child',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const h1 = parent.querySelector('h1')

      expect(parent).toContainElement(h1);
    });

    test('h1 child should be visible',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const h1 = parent.querySelector('h1')

      expect(h1).toBeVisible();
    });

    test('h1 should have a class of myName',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const h1 = parent.querySelector('h1')

      expect(h1).toHaveClass('myName');
    });

    test('h1 should contain text',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const h1 = parent.querySelector('h1')

      expect(h1).not.toBeEmpty();
    });

//P Child
    test('should have an p child',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const p = parent.querySelector('p')

      expect(parent).toContainElement(p);
    });

    test('p child should be visible',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const p = parent.querySelector('p')

      expect(p).toBeVisible();
    });

    test('p child should have a class of profileAbout',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const p = parent.querySelector('p')

      expect(p).toHaveClass('profileAbout');

    });

    test('p child should contain text',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      const p = parent.querySelector('p')

      expect(p).not.toBeEmpty();

    });


})
