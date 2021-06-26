import React from 'react';
import {Link} from 'react-router-dom';

import ProjectCard from './ProjectCard.js';
import layouts from './layouts';

import AboutIcon from '@material-ui/icons/AccountCircleOutlined';

function Heading() {
    return (
      <div className="namediv">
        <span className="name">
          claire guo
          {/* <img id="flowericon" src= {flowericon} alt= "flower icon"/> */}
          <br></br>
          art & design
        </span>
      </div>
    )
  }

function Home() {
    return (
        <>
          <Heading />

          <div style = {{ position: 'relative', backgroundColor: 'thistle' }}>
            <div style={{ textAlign: 'center', fontSize: '3.5vw', padding: '10% 0% 5%', color: '#323135' }}>
              Recent Projects
            </div>
            <div className='flexbox' style={{color:'black'}}>
            
            {layouts.map((layout) => {
              return <ProjectCard project={layout} />
            })}

            </div>
            
          {/* <OtherProjects /> */}

          <div style = {{ position: 'relative', backgroundColor: '#F6F2EF', textAlign: 'center', padding: '10% 0 5%'}}>
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
          </div>

          </div>
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






  