import * as React from 'react';
require('./portfolio.scss');

 // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo, faCoffee } from '@fortawesome/free-solid-svg-icons'

import {
  faAngellist,
  faMedium,
  faTwitter,
} from '@fortawesome/fontawesome-free-brands'






import * as devIcon from '../../../assets/devIcons'

// const ReactMarkdown = require('react-markdown')




class Portfolio extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0,
      arr: this.props.arr
    }
    console.log(this.state)
  }

  handleNextClick = () =>{
      if (this.state.currentIndex < (this.state.arr.length-1)) {
          this.setState({ currentIndex: this.state.currentIndex + 1 });
      } else {
          this.setState({ currentIndex: 0});
      }
  }





  handlePrevClick = () => {
      if (this.state.currentIndex === 0) {
          this.setState({currentIndex: this.state.arr.length-1 });
      } else {
          this.setState({currentIndex: this.state.currentIndex - 1 });
      }
  }

  componentDidMount() {
    console.log('port mojnt');
    // window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let newArr = this.state.arr


    let begin = newArr.shift()
    newArr.push(begin)


    this.setState({arr: newArr})

  }

  render(){
    return(

      <div className='portfolio-wrapper'>
           <div id='portfolio-main'>

              {this.state.arr.map(e =>
                <div className='wide'>
                    <img id='portfolio-pic' src={e.pic} />

                    <div id='portfolio-info'>
                      <h1 id='project-title'>{e.name}</h1>
                      <h2 id="project-description">{e.readme}</h2>

                      <h2 id="project-link-git">{e.github}</h2>

                      <h2 id="project-link-site">{e.siteLink}</h2>

                    </div>


                  </div>
              )}





               </div>
      </div>
    )
  }

}

export default Portfolio;





                   {/* <img id='portfolio-pic' src={this.state.arr[this.state.currentIndex].pic} />



                 <div id='portfolio-tech'>
                    {this.state.arr[this.state.currentIndex].tech.map(e=>




                        <img className='portfolio-techIcon' src={devIcon[e]} />

                     )}
                 </div>


                 <div id='portfolio-nav'>
                   <button id="prev-button" onClick={this.handlePrevClick}>prev</button>
                      {this.state.currentIndex+1} of {this.state.arr.length}
                   <button id="next-button" onClick={this.handleNextClick}>next</button>
                 </div>
 */}
