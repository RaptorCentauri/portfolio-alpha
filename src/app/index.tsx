import * as React from 'react';
import {render} from 'react-dom';
require ('./index.scss');
// import './index.scss'
import {projects} from '../assets/projects'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faIgloo, faCoffee } from '@fortawesome/free-solid-svg-icons'
//
// import {
//   faAngellist,
//   faMedium,
//   faTwitter,
// } from '@fortawesome/fontawesome-free-brands'
//

// library.add(faTwitter)
// library.add(faCoffee)



import {Navbar, Portfolio, StayTuned} from './components'

class App extends React.Component{
    state={
        activeWindow: 'About Me',
        currentIndex: 0,
        projects
        // projects: projects
    }

    // componentDidMount(){
    //   console.log('it mounted');
    // }

    setActiveWindow = (str) => {
        this.setState({activeWindow: str})

    }


    // handleNextClick = () =>{
    //     if (this.state.currentIndex < (this.state.tempArray.length-1)) {
    //         this.setState({ currentIndex: this.state.currentIndex + 1 });
    //     } else {
    //         this.setState({ currentIndex: 0});
    //     }
    // }

    // handlePrevClick = () => {
    //     if (this.state.currentIndex === 0) {
    //         this.setState({ currentIndex: this.state.tempArray.length-1 });
    //     } else {
    //         this.setState({ currentIndex: this.state.currentIndex - 1 });
    //     }
    // }

    // testConnections = () => {
    //     API.getBlogPosts();
    // }


    // renderMain(str='About Me'){
    //     console.log("render main hit");
    //
    //     let compToRender;
    //
    //     switch (str) {
    //         case 'About Me':
    //             compToRender = <AboutMe />
    //             break;
    //
    //         case 'Portfolio':
    //             compToRender = <Portfolio handlePrev={this.handlePrevClick} handleNext={this.handleNextClick} index={this.state.currentIndex} tempPics={this.state.tempArray}/>
    //             break;
    //
    //         case 'Contact':
    //             compToRender = <Contact />
    //             break;
    //
    //         case 'Blog':
    //             compToRender = <Blog apiTest={this.testConnections}/>
    //             break;
    //
    //         case 'Resume':
    //             compToRender = <Resume />
    //             break;
    //
    //         default:
    //             break;
    //     }
    //
    //     return compToRender;
    // }

    render(){
        return(
            <div>
                {/* <TitlebarMobile title={this.state.activeWindow}/> */}
                {/* {this.renderMain(this.state.activeWindow)} */}
                {/* <Navbar setActiveWindow={this.setActiveWindow}/> */}
                {/* <Portfolio arr={this.state.projects}/> */}
              <StayTuned />

            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
