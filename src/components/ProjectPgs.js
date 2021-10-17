import React from 'react'; 
import {useParams, Link} from 'react-router-dom';
import layouts from "./layouts";
import Footer from './footer';
import Header from './header';

import arrowleft from './pics/SVG/arrowleft.svg';
import arrowright from './pics/SVG/arrowright.svg';


function ProjectPg() {

  const LinkMatch = (layout) => {
    return layout.link === params.id
  }

  const params = useParams();
  const num = layouts.findIndex(LinkMatch);
  let project = layouts[num];

  const Details = () => {
    let content = [];
    for (let i=0; i < project.h.length; i++){
      content.push(
        <>
          <div style={{color: '#BB89BD', margin: '3vw 3vw 0', fontWeight: 'bold'}}>{project.h[i]}</div>
          <div style={{margin: '1vw 3vw 2vw', lineHeight: '2vw'}}>{project.det[i]}</div>
        </>
      )
    }
    return content;
  }

  return (
    <>
      <Header />
{/* HERO */}
    <div style={{backgroundColor:'#f6f2ef', color: 'black', fontSize: '4vw', paddingTop: '10%' }}>
      <div style={{margin: '0 6%'}}>{project.title}</div>
      {(project.cover !== undefined) &&
        <img src={project.cover} alt={project.title} style={{width: '88%', padding: '4vw 6vw 0'}} />
      }

{/* DESCRIPTION */}
    {(project.desc !== undefined) &&
      <div style={{fontSize: '1.5vw', textAlign: 'center', padding: '4vw 10vw 0', lineHeight: '2vw'}}>{project.desc}</div>
    }
{/* DETAILS */}
      <div style={{display: 'flex', alignItems: 'flex-start', margin: '6vw 6vw 6vw'}}> 
        <div style={{fontSize: '1.5vw', backgroundColor: '#EEE6E2', position: 'sticky', top: '15vh', width: '35%', display: 'flex', flexDirection: 'column'}}>
          <Details />
        </div>

        <div style={{display: 'flex', flexDirection: 'column', width: '60%', marginLeft: '5%'}}>
          {project.imgs.map((img) => {
            return (
              <img src={img} alt={project.title} style={{width: '100%'}}/>
            )
          })}
          {(project.fullimg !== undefined) &&
            <img src={project.fullimg} style={{height: '100vh', objectFit: 'contain'}} alt={project.title}/>
          }
        </div>
      </div>

{/* IMG ROW */}
      {/* {(project.imgrow !== undefined) &&
      <>
        <div style={{fontSize: '3vw', marginTop: '10vw', marginLeft: '6vw'}}>{project.imgrowtitle}</div>
        <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '3vw'}}>
          <div style={{display: 'flex', flexDirection: 'column', fontSize: '1.5vw'}}>
          <img src={project.imgrow[0]} alt='img1' style={{height: '20vw', objectFit: 'contain'}}/>
          <div style={{margin: '2vw 6vw'}}>{project.imgrowcaptions[0]}</div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', fontSize: '1.5vw'}}>
          <img src={project.imgrow[1]} alt='img2' style={{height: '20vw', objectFit: 'contain'}}/>
          <div style={{margin: '2vw 6vw'}}>{project.imgrowcaptions[1]}</div>
          </div>
        </div>
        <div style={{fontSize: '1.5vw', textAlign: 'center', padding: '6% 6% 0'}}>{project.desc2}</div>
      }
      </>
      } */}

{(project.imgs2 !== undefined) &&
<>
  <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'space-evenly', width: '88%', margin: '0 6vw'}}>
    <img src={project.imgs2[0]} alt='img1' />
    <div style={{margin: '4vw 10vw 10vw', fontSize: '1.5vw', lineHeight: '2vw'}}>{project.imgcaptions[0]}</div>
    <img src={project.imgs2[1]} alt='img2' />
    <div style={{margin: '4vw 10vw 0', fontSize: '1.5vw', lineHeight: '2vw'}}>{project.imgcaptions[1]}</div>
  </div>
</>
}

{/* PREV/NEXT */}
        <div style={{fontSize: '1.5vw', paddingTop: '4vw'}}>
          {(num !== 0) &&
            <Link to={ '/projects/' + layouts[num-1].link } style={{left: '6vw', position: 'absolute', textDecoration: 'none'}}>
              <div className='button' style={{height: '4vw', display: 'flex', padding: '0 2vw'}}>
              <img src={arrowleft} alt='left arrow' style={{width: '1.5vw', marginRight: '.8vw'}}/>
              {layouts[num-1].title}
              </div>
            </Link>
          }
          {(num !== layouts.length-1) &&
            <Link to={ '/projects/' + layouts[num+1].link } style={{right: '6vw', position: 'absolute', textDecoration: 'none'}}>
              <div className='button' style={{height: '4vw', display: 'flex', flexDirection: 'row-reverse', padding: '0 2vw'}}>
              <img src={arrowright} alt='right arrow' style={{width: '1.5vw', marginLeft: '.8vw'}}/>
              {layouts[num+1].title}
              </div> 
            </Link>
          }
          {(num === layouts.length-1) &&
            <Link to='/about' style={{right: '6vw', position: 'absolute', fontSize: '1.5vw', textDecoration: 'none'}} >
              <div className='button' style={{height: '4vw', display: 'flex', flexDirection: 'row-reverse', padding: '0 2vw'}}> More about me! </div>
            </Link>
          }
      </div>
      <Footer />
      </div>
    </>
  )

}


export default ProjectPg;