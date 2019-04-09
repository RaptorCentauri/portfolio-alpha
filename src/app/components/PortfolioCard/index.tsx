import * as React from 'react';
require('./index.scss');
import SVG from 'react-inlinesvg'
import gitSVG from './assets/images/github.svg';
import infoSVG from './assets/images/info-icon.svg';
import webSVG from './assets/images/web-icon.svg';



  const PortfolioCard = ({about, code, site, flipCard, ref, pic, name}) => {
    const [cardStyle, setCardStyle] = React.useState({});
    const [aboutStyle, setAboutStyle] = React.useState({});
    const [imageStyle, setImageStyle] = React.useState({backgroundImage: `url(${pic})`});

    const [cardSide, setCardSide] = React.useState("cardFront");
    const aboutRef = React.useRef(null);

    React.useLayoutEffect(()=>{
      const {clientHeight, clientWidth, scrollHeight} = aboutRef.current;

      if(cardSide === "cardBack" && clientHeight != scrollHeight ){
          setAboutStyle({
            height: Math.sqrt(scrollHeight * clientWidth),
            width: Math.sqrt(scrollHeight * clientWidth)
          });

          setCardStyle({
            height: Math.sqrt(scrollHeight * clientWidth) + ((20/100) * Math.sqrt(scrollHeight * clientWidth)),
            width: Math.sqrt(scrollHeight * clientWidth) + ((20/100) * Math.sqrt(scrollHeight * clientWidth))
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


        <a className="card-button" href={site} target="_blank">
          <SVG className={'webIcon'} src={webSVG}/>
        </a>

        <a className="card-button" href={code} target="_blank">
          <SVG className={'gitIcon'} src={gitSVG}/>
        </a>

        <span className={"card-button"} onClick={flipCard}>
          <SVG onClick={flipCard}  src={infoSVG}/>
        </span>




          <h1 className='project-title'>{name}</h1>
        </div>

        <div style={imageStyle} className='portfolio-pic'></div>
        <h2 style={aboutStyle} className="project-description" ref={aboutRef}>{about}</h2>
      </div>
    )
}

export default PortfolioCard;
