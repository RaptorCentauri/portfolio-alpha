import * as React from 'react';
require('./index.scss');


// const ReactMarkdown = require('react-markdown')




class StayTuned extends React.Component{
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
    // newArr.unshift('xyz')
    // console.log('gn', begin);

    // console.log('newArrAFTER', newArr);

    this.setState({arr: newArr})



  }

  // setIndex = () =>{
  //
  // }




  render(){
    return(
      <div className='portfolio-wrapper'>
        <h1>UNDER CONSTRUCTION! PLEASE STAY TUNED!</h1>




      </div>
    )
  }

}

export default StayTuned;
