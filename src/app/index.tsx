import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'
import {projects} from '../assets/projects'

import {Navbar, Portfolio, StayTuned, AboutMe} from './components'

class App extends React.Component{
    state={
        activeWindow: 'About Me',
        currentIndex: 0,
        projects
    }

    // componentDidMount(){
    //   console.log('it mounted');
    // }

    setActiveWindow = (str) => {
        this.setState({activeWindow: str})
    }

    // testConnections = () => {
    //     API.getBlogPosts();
    // }


    renderMain(str='About Me'){
        console.log("render main hit");

        let compToRender;

        switch (str) {
            case 'About Me':
                compToRender = <AboutMe />
                break;

            case 'Portfolio':
                compToRender = <Portfolio arr={this.state.projects}/>
                break;

            case 'Contact':
                compToRender = <Contact />
                break;

            case 'Blog':
                compToRender = <Blog apiTest={this.testConnections}/>
                break;

            case 'Resume':
                compToRender = <Resume />
                break;

            default:
                break;
        }

        return compToRender;
    }

    render(){
        return(
            <React.Fragment>
                {/* <TitlebarMobile title={this.state.activeWindow}/> */}
                {/* {this.renderMain(this.state.activeWindow)} */}
                <Navbar setActiveWindow={this.setActiveWindow}/>
                {this.renderMain(this.state.activeWindow)}
            </React.Fragment>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
