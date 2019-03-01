import React from 'react';
import {render} from 'react-dom';
require ('./index.scss');
import Navbar from '../components/Navbar/navbar.jsx'
import TitlebarMobile from '../components/TitlebarMobile/titlebarMobile.jsx'
import AboutMe from '../components/AboutMe/aboutme.jsx'
import Portfolio from '../components/Portfolio/portfolio.jsx'
import Contact from '../components/Contact/contact.jsx'
import Blog from '../components/Blog/blog.jsx'
import Resume from '../components/Resume/resume.jsx'
import API from '../util/API.js'




class App extends React.Component{
    state={
        activeWindow: 'About Me',
        tempArray: [
            { tech: 'html', color: 'red', about: 'et exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corrupti sint quos corporis, fugiat nobis?' },
            { tech: 'css', color: 'orange', about: 'et exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corrupti sint quos corporis, fugiat nobis?' },
            { tech: 'mongodb', color: 'yellow', about: 'et exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corrupti sint quos corporis, fugiat nobis?' },
            { tech: 'react', color: 'green', about: 'et exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corrupti sint quos corporis, fugiat nobis?' },
            { tech: 'ruby', color: 'blue', about: 'et exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corrupti sint quos corporis, fugiat nobis?' },
            { tech: 'python', color: 'violet', about: 'et exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corret exercitationem maiores placeat corrupti et exercitationem maiores placeat corrupti sint quos corporis, fugiat nobis?'}],
        currentIndex: 0
    }

    setActiveWindow = (str) => {
        this.setState({activeWindow: str})
    }


    handleNextClick = () =>{
        if (this.state.currentIndex < (this.state.tempArray.length-1)) {
            this.setState({ currentIndex: this.state.currentIndex + 1 });
        } else {
            this.setState({ currentIndex: 0});
        }
    }

    handlePrevClick = () => {
        if (this.state.currentIndex === 0) {
            this.setState({ currentIndex: this.state.tempArray.length-1 });
        } else {
            this.setState({ currentIndex: this.state.currentIndex - 1 });
        }
    }

    testConnections = () => {
        API.getBlogPosts();
    }


    renderMain(str='About Me'){
        console.log("render main hit");

        let compToRender;

        switch (str) {
            case 'About Me':
                compToRender = <AboutMe />
                break;

            case 'Portfolio':
                compToRender = <Portfolio handlePrev={this.handlePrevClick} handleNext={this.handleNextClick} index={this.state.currentIndex} tempPics={this.state.tempArray}/>
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
            <div>
                <TitlebarMobile title={this.state.activeWindow}/>
                {this.renderMain(this.state.activeWindow)}
                <Navbar setActiveWindow={this.setActiveWindow}/>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById('root'));
