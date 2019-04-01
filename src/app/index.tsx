import * as React from 'react';
import {render} from 'react-dom';
import './index.scss'
// import {projects} from '../assets/projects'

import {Navbar, Portfolio, StayTuned, AboutMe, Contact} from './components'

import * as API from '../API'


const App = () => {
//   const [projects, setProjects] = React.useState([]);
//
//
//   React.useEffect(()=>{
//     API.getProjects().then((data) => {setProjects(data)})
//
// }
// ,[])

  return(
    <React.Fragment>
      <AboutMe />
      <Portfolio />
      <Contact />
    </React.Fragment>
  )
}




//
// class App extends React.Component{
//     state={
//         activeWindow: 'About Me',
//         currentIndex: 0,
//         projects: []
//     }
//
//     componentDidMount = async () => {
//       console.log('I can call an api');
//       let projects =  await API.getProjects();
//       console.log('projects', projects)
//     // console.log(this.state)
//       this.setState({projects: projects})
//     // console.log(this.state)
//
//     }
//
//
//       componentDidUpdate(){
//         console.log('the main page did update')
//       }
//
//     // setActiveWindow = (str) => {
//     //     this.setState({activeWindow: str})
//     // }
//
//     // renderMain(str='About Me'){
//     //     console.log("render main hit");
//     //
//     //     let compToRender;
//     //
//     //     switch (str) {
//     //         case 'About Me':
//     //             compToRender = <AboutMe />
//     //             break;
//     //
//     //         case 'Portfolio':
//     //             compToRender = <Portfolio arr={this.state.projects}/>
//     //             break;
//     //
//     //         case 'Contact':
//     //             compToRender = <Contact />
//     //             break;
//     //
//     //         case 'Blog':
//     //             compToRender = <Blog apiTest={this.testConnections}/>
//     //             break;
//     //
//     //         case 'Resume':
//     //             compToRender = <Resume />
//     //             break;
//     //
//     //         default:
//     //             break;
//     //     }
//     //
//     //     return compToRender;
//     // }
//
//     render(){
//         return(
//             <React.Fragment>
//                 {/* <TitlebarMobile title={this.state.activeWindow}/> */}
//                 {/* {this.renderMain(this.state.activeWindow)} */}
//                 {/* <Navbar setActiveWindow={this.setActiveWindow}/> */}
//                 {/* {this.renderMain(this.state.activeWindow)} */}
//                 <AboutMe />
//                 <Portfolio arr={this.state.projects}/>
//                 <Contact />
//
//
//             </React.Fragment>
//         );
//     }
// }

render(<App/>,window.document.getElementById('root'));
