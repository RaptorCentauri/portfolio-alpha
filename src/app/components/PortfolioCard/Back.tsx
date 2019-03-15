import * as React from 'react';
require('./index.scss');

  const Back = ({about, code, site, flipCard, ref, pic, name}) => {

    const [cardStyle, setCardStyle] = React.useState({});
    const [aboutStyle, setAboutStyle] = React.useState({});
    const [cardSide, setCardSide] = React.useState("cardFront");
    const aboutRef = React.useRef(null);


  React.useEffect(() => {
    }, []
  );


  React.useLayoutEffect(()=>{
      const {clientHeight, clientWidth, scrollHeight} = aboutRef.current;

      if(cardSide === "cardBack" && clientHeight != scrollHeight ){
          setAboutStyle({
            height: Math.sqrt(scrollHeight * clientWidth),
            width: Math.sqrt(scrollHeight * clientWidth)
          });

          setCardStyle({
            height: Math.sqrt(scrollHeight * clientWidth) + ((10/100) * Math.sqrt(scrollHeight * clientWidth)),
            width: Math.sqrt(scrollHeight * clientWidth) + ((10/100) * Math.sqrt(scrollHeight * clientWidth))
          })
      }
  })


flipCard = () => {
    if(cardSide === "cardFront"){
      setCardSide("cardBack")
    }
    else if (cardSide === "cardBack"){
      setCardSide("cardFront")
      setCardStyle({})
      setAboutStyle({})
    }
  }


    return(
      <div style={cardStyle} className={cardSide} >
        <button onClick={flipCard} className="info-button drum">i</button>

        <img className='portfolio-pic' src={pic} />
        <h1 className='project-title'>{name}</h1>
        <h2 style={aboutStyle} className="project-description" ref={aboutRef}>{about}</h2>
        <div className="navwrapper">
          <button onClick={flipCard} className="info-button">x</button>
          <a className="project-site" href={site} target="_blank">Site</a>
          <a className="project-source" href={code} target="_blank">Code</a>
          {/* <h4>Card Title</h4> */}
        </div>
      </div>
    )

}



export default Back
