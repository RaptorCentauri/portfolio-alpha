// import {AboutMe} from '../src/app/components'
import AboutMe from '../src/app/components/AboutMe/aboutme'

import * as React from 'react';
import { render, cleanup} from "@testing-library/react";
import 'jest-dom/extend-expect'
//@ts-ignore
// import profilePic from '../src/app/components/AboutMe/assets/images/profile_img.jpg'
afterEach(cleanup)

describe('The sample test', () => {
      test('should be visible',()=>{
      const { container} = render(<AboutMe /> );
      const parent = container.querySelector('div');
      // const clockHandElement = handRingElement.querySelector('clock-hand');

      //@ts-ignore
      expect(parent).toBeVisible;
    });
})
