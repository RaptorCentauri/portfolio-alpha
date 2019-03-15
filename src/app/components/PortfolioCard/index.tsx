import * as React from 'react';
require('./index.scss');

const Front = ({pic, name, flipCard}) =>
    <div className='cardFront'>
      <img id='portfolio-pic' src={pic} />
      <h1 id='project-title'>{name}</h1>
      <button onClick={flipCard} className="info-button">i</button>
    </div>

// const Back = ({about, code, site, flipCard, ref}) =>
//     <div className='cardBack' ref={ref}>
//       <h2 className="project-description" ref={(pd)=> this.pDescribe = pd}>{about}</h2>
//       <a className="project-site" href={site} target="_blank">Site</a>
//       <a className="project-source" href={code} target="_blank">Code</a>
//       <button onClick={flipCard} className="info-button">i</button>
//     </div>


class Back extends React.Component<any, any>{
  constructor(props: any){
    super(props)
    this.state = {
      dStyle: {},
      wStyle: {}
    }
  }

  componentDidMount = () => {
    this.tellRef()
  }

  tellRef = () => {

    console.log('i see tell ref');
    // console.log(this.pDescribe.clientHeight);
    // console.log(this.pDescribe.clientWidth);


    let oH = this.pDescribe.clientHeight;
    let oW = this.pDescribe.clientWidth;

    let area = oH * oW;

    console.log('area', area);
    let newUnit = Math.sqrt(area)
    console.log('oH', oH)
    console.log('oW', oW)


    console.log('newUnit', newUnit)

    const oldS = {
      color: 'red',
      height: newUnit,
      width: newUnit
    }

      let newStyle = 'dum'

    this.setState({dStyle: oldS});

    let grr = newUnit + ((10/100) * newUnit)

      console.log('grr', grr)


    const wS = {
      // height: 'max-content',
      // width: 'max-content'
      height: grr,
      width: grr

    }

    this.setState({wStyle: wS});







  console.log('ns', newStyle)
    console.log('st', this.state)

  }




  render(){
    const {about, code, site, flipCard} = this.props;

    return(
      <div style={this.state.wStyle} className='cardBack' >
        <h2 style={this.state.dStyle} className="project-description" ref={(pd)=> this.pDescribe = pd}>{about}</h2>
        <a className="project-site" href={site} target="_blank">Site</a>
        <a className="project-source" href={code} target="_blank">Code</a>
        <button onClick={flipCard} className="info-button">z</button>
        {/* <button onClick={this.tellRef} >myRef</button> */}

      </div>
    )
  }

}














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
