import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';

import ProjectCard from './ProjectCard.js';
import layouts from './layouts';
import resume from './resumelayout';

import AboutIcon from '@material-ui/icons/AccountCircleOutlined';

import berryicon from './pics/SVG/strawberry.svg';
import tulipicon from './pics/SVG/tulip.svg';
import asteriskicon from './pics/SVG/asterick.svg';
import bearicon from './pics/SVG/bear.svg';
import flowericon from './pics/SVG/flower.svg';

import scallop from './pics/SVG/scallop.svg';

import emailicon from './pics/SVG/emailicon.svg';
import linkedinicon from './pics/SVG/linkedinicon.svg';
import githubicon from './pics/SVG/githubicon.svg';
import { maxWidth } from '@material-ui/system';


function SwitchImage(){
 
  let [count, setCount] = useState(0);
  const imgs= [
    bearicon,berryicon,tulipicon,asteriskicon,flowericon
  ]
  const length = imgs.length-1

  useEffect(() => {

    const interval=setInterval(() => {

      if (count === length) {
        setCount(0);
      }
      else {
        setCount(count+1);
      }
    },1000)

    return () => clearInterval(interval)
  },[count]);

  return (
    <img src={imgs[count]} alt='icon' style={{ height: '3vw', margin: '1vw' }}/>  )
}

function Heading() {
    return (
      <div style={{ textAlign: 'center', height: '100vh', fontSize: '4vw', letterSpacing: '.05rem',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <SwitchImage />
        <span style={{margin: '2vw'}}> claire guo </span>
        <span> art & design </span>
      </div>
    )
  }

function Home() {
    return (
        <>
          <Heading />
    <div style = {{ position: 'relative', backgroundColor: '#E6EDD6' }}>

            <div style = {{display: 'flex', justifyContent:'center' }}>
              <img src={scallop} style={{ position: 'absolute', top: '-18vh', width: '120%' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', fontSize: '4vw', padding: '20% 10% 5%', color: '#323135' }}>
              <img src={asteriskicon} alt='asterisk' style={{height: '5vw', margin: '2%'}}/>
              Projects
            </div>

            <div className='flexbox' style={{color:'black'}}>
              {layouts.map((layout) => {
                return <ProjectCard project={layout} />
              })}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '4vw', padding: '0% 10% 5%', color: '#323135' }}>
              <img src={asteriskicon} alt='asterisk' style={{height: '5vw', margin: '2%'}}/>
              About
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '6%' }} >
              {resume.map((item) => {
                return (
                  <div style={{ display: 'flex', color:'#323135', margin: '1% 5%', width: '50%' }}>

                    <span style= {{ marginTop: '.3vw', fontSize: '1.5vw', width: '20%', textAlign: 'right' }}>{item.dates}</span>

                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '2vw', marginLeft: '3%' }}>
                      <span style={{ fontWeight: 'regular' }}>{item.company}</span>
                      <span>{item.position}</span>
                    </div>

                  </div>
                )
              })}
            </div>

{/* CONTACT BUTTONS */}
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
                <img src={emailicon} alt='email' onClick={() => {navigator.clipboard.writeText('cguo02@risd.edu')}} className='socials' />
                <img src={linkedinicon} alt='email' onClick={() => window.open("https://www.linkedin.com/in/claguo/", "_blank")} className='socials' />
                <img src={githubicon} alt='email' onClick={() => window.open('https://github.com/claguo', "_blank")} className='socials' />
            </div>

            <div style={{ color: '#323135', fontSize: '1.5vw', textAlign: 'center', padding: '2%' }}>
              Designed and built by me, Claire
            </div>
    </div>

          {/* <OtherProjects /> */}

          {/* <div style = {{ position: 'relative', backgroundColor: '#F6F2EF', textAlign: 'center', padding: '10% 0 5%'}}>
            <Link to='/about' className='smallhead abtbutton'>
            <AboutIcon style={{ fontSize: '20', padding: '0%' }}/>
            <div style={{ marginBottom: '3%' }}>About</div>
            </Link>
            <hr style={{ width: '70%'}}/>
            <div className='smalltext' style={{paddingTop: '5%'}}>
              Thank you for visiting!
              <br></br>
              Designed and built by me, Claire
            </div>
          </div> */}
        </>
    )
  }

  export default Home;

  // function Thumbnail(props) {
//     const [isShown, setIsShown] = useState(false);
  
//     return (
//     <div onMouseEnter={() => setIsShown(true)}
//          onMouseLeave={() => setIsShown(false)}
//          className="thumbcontainers">
//         <Link to={props.link}>
//       <img className={!isShown ? "thumbs" : "thumbs hoveredthumbs"} src={props.image} alt={props.title}/>
//       <div className={!isShown ? "titles" : "titles hoveredtitles"}>{props.title}</div>
//       </Link>
//     </div>
//     );
//   }

  
  // function ProjectCard(props) {
  //   const { src, title, num, color, link } = props;
    
  //   return (
  //     <div className= 'flexbox' style={{backgroundColor: color}}>
  //       <Link className= 'projecttitle' style={{ order: num%2 }} to={ "/projects/" + link }>
  //         <div > {title} </div>
  //       </Link>
  //       <Link className="linkarea" to={"/projects/" + link }>
  //         <img style={{width: "100%", objectFit: "cover"}} src={src} alt={title}/>
  //       </Link>
          
  //     </div>
  //   )
  // }



// function MoreProjects() {
//   return (
//     <div style= {{display: 'flex', justifyContent: 'center'}}>
//       <Link to={ '/projects/more' } style= {{
//         color: '#323135',
//         margin: '0rem 0rem 5rem',
//         textDecoration: 'none',
//         display: 'inline-block',
//       }}>
//         more
//       </Link>
//     </div>
//   )
// }






  