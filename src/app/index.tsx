import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'

import {Navbar, Portfolio, AboutMe, Contact} from './components'

const App = () => {
  return(
    <React.Fragment>
      <AboutMe />
      <Portfolio />
      <Contact />
    </React.Fragment>
  )
}


render(<App/>,window.document.getElementById('root'));
