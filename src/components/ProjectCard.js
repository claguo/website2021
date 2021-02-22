import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
    let project = props.project;

    const [isHovered, setisHovered] = useState(false);
  
    return (
      <Link className='linkcontainer'
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        to={ '/projects/' + project.link }
        style={{ fontFamily: 'Montserrat' }}
      >
          <img
            className={ !isHovered ? 'thumbs' : 'thumbs hoveredthumbs' }
            src = {project.thumb} alt = {project.title}
          />
          <span style= {{fontSize: '1.75vw'}} className= { !isHovered ? 'titles' : 'titles hoveredtitles'}> {project.title} </span>
      </Link>
    )
  }

export default ProjectCard