import * as React from 'react';
require('./index.scss');

  const PortfolioCard = ({about, code, site, flipCard, ref, pic, name}) => {
    const [cardStyle, setCardStyle] = React.useState({});
    const [aboutStyle, setAboutStyle] = React.useState({});
    const [cardSide, setCardSide] = React.useState("cardFront");
    const aboutRef = React.useRef(null);


    React.useLayoutEffect(()=>{
      const {clientHeight, clientWidth, scrollHeight} = aboutRef.current;

      console.log(clientHeight, scrollHeight)


      if(cardSide === "cardBack" && clientHeight != scrollHeight ){
              console.log('effectin inside')


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
        <div className="navwrapper">
          <div onClick={flipCard} className="info-button">info</div>
          <a className="project-site" href={site} target="_blank">Site</a>
          <a className="project-source" href={code} target="_blank">Code</a>
          <h1 className='project-title'>{name}</h1>
        </div>
        <img className='portfolio-pic' src={pic} />

        {/* <div style={backgroundImage: `url(${pic})`} className='portfolio-pic' ></div> */}

        <h2 style={aboutStyle} className="project-description" ref={aboutRef}>{about}</h2>
      </div>
    )

}

export default PortfolioCard;
