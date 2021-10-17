import React from 'react';
import Footer from './footer';
import resume from './resumelayout';
import Header from './header';

import pfp from './pics/pfp.JPG';
import asteriskicon from './pics/SVG/asterick.svg';


function About() {
    const Resume = () => {
        let content = [];
        for (let i=0; i < resume.length; i++){
          content.push(
            <> 
                <div style={{fontSize: '1vw', marginTop: '1.5vw'}}>{resume[i].dates}</div>
                <div style={{color: '#73944B', fontSize: '1.5vw'}}>{resume[i].company}</div>
              <div style={{fontSize: '1.5vw'}}>{resume[i].position}</div>
            </>
          )
        }
        return content;
      }

    return (
        <div style={{backgroundColor: '#f6f2ef'}}>
            <Header />
            <div style={{display: 'flex', paddingTop: '6vw'}}>
            <img src={pfp} style={{width: '28%', margin: '4vw 4vw 4vw 6vw', objectFit: 'cover'}} alt='profile pic'/>


                <div style={{width: '66.6667%', color: 'black'}}>
                    <div style={{fontSize: '4vw', margin: '5vw 6vw 1vw 0'}}> Hi, I'm Claire! </div>
                    <div style={{fontSize: '1.5vw', margin: '0 6vw 0 0'}}> I'm an undergraduate industrial design student at Rhode Island School of Design with a passion for all things creative! </div>
                    <div style={{display: 'flex'}}>
                        <div style={{margin: '3vw 6vw 4vw 0', width: '35%'}}>
                            <div className='abtpgtitle'> background </div>
                            <Resume />
                        </div>
                        <div style={{margin: '3vw 6vw 4vw 0', width: '50%'}}>
                            <div className='abtpgtitle'> skills </div>
                            <div style={{marginTop: '2vw', color: '#73944B', fontSize: '1.5vw'}}> DESIGN </div>
                            <div style={{fontSize: '1.5vw'}}> Illustrator - AdobeXD - Figma - Procreate - Photoshop - InDesign </div>
                            <div style={{marginTop: '2vw', color: '#73944B', fontSize: '1.5vw'}}> CODING </div>
                            <div style={{fontSize: '1.5vw'}}> HTML - CSS - Javascript </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div style={{margin: '3vw 10vw 0'}}>
                <div className='abtpgtitle'> and in case you were wondering... </div>
                <div className='abtpgcontent' style={{marginTop: '1.5vw'}}> In my free time you can find me playing Valorant or Genshin Impact, learning piano, watching anime, or crocheting :)</div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', margin: '6vw 0 0'}}>
                <img src={asteriskicon} alt='asterisk' style={{height: '3vw'}}/>            
                <div className='abtpgcontent' style={{margin: '2vw 10vw 0', textAlign: 'center'}}> Thank you for taking the time to check out my portfolio! If you're interested in working with me, please feel free to reach out to me anytime through email or LinkedIn! </div>
            </div>
            <Footer />

        </div>
    )
}

export default About;