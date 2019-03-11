import * as React from 'react';
require('./index.scss');

import {gitpic} from '../../../assets/devIcons'


class PortfolioCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showAbout: false
    }
  }

changeVisible = () => this.state.showAbout ? this.setState({showAbout: false}) : this.setState({showAbout: true})


front = () =>{
  const {pic, name} = this.props

  return(
    <div className='simpleInfo'>
          <img id='portfolio-pic' src={pic} />
          <h1 id='project-title'>{name}</h1>
    </div>
  )
}


back = () => {
  const {about, code, site} = this.props

  return(
    <div className='backInfo'>
      <h2 className="project-description">{about}</h2>
      <a className="project-site" href={site} target="_blank">Site</a>
      <a className="project-source" href={code} target="_blank">Code</a>
    </div>
  )

}


render(){
  const {showAbout} = this.state

  return(
    <div  onMouseEnter={this.changeVisible}  onMouseLeave={this.changeVisible} className='cardStyle'>
      {showAbout ? this.back() : this.front()}
    </div>
  )
}

}


export default PortfolioCard;
