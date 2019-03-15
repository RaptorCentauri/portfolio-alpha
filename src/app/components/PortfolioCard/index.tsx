import * as React from 'react';
require('./index.scss');

import Back from './Back'

const Front = ({pic, name, flipCard, site, code}) =>
    <div className='cardFront'>
      <img id='portfolio-pic' src={pic} />
      <h1 id='project-title'>{name}</h1>
      <button onClick={flipCard} className="info-button">i</button>
    </div>


class PortfolioCard extends React.Component<any, any>{
  constructor(props: any){
    super(props);
// this.stepInput = React.createRef();
    // this.myRef = React.createRef();
    this.state = {
      flip: false
    }
  }

  flipCard = () =>{
    // console.log('ref is ', this.pDescribe);
    this.setState({flip: !this.state.flip});

}



  render(){
    const {about, code, site, pic, name} = this.props;

    return(
    <React.Fragment>
    {this.state.flip ? <Back  about={about} code={code} site={site} flipCard={this.flipCard} /> : <Front pic={pic} name={name} flipCard={this.flipCard}/>}
    </React.Fragment>
    )
  }

}

export default PortfolioCard;
