import { Link } from 'react-router-dom';
import { Element, animateScroll } from 'react-scroll';
import './Home.css';
import IMAGES from './img/Image';

import React from 'react';




const Home = () => {

    
 
    return (
    <div className="Home">

        <div className="intro-content">

            <div className='main-heading'>

               
               <h1 href="#contacts" >
                Greetings
                </h1>
                

                <h2>
                I'm Andile Zondo
                </h2>

                <h2>
                    A Front-end Developer
                </h2>
            </div>

            <div className="intro">


                <p >
                Located in Durban South Africa with a passion for web developement.
                I specialize in creating visually appealing and functional websites for bussinesses
                </p>

            </div>

        </div>

        
        <div className="projects-home">

            <Link to='/projects'>
                <div className="project-circle webApp-side img-container">
                    
                        <img src={IMAGES.ActivityApp} alt="" />
                    
                </div>
            </Link>
            

            <div className="project-title-link">
                 <Link to='/projects'>See Projects</Link>   
            </div>

            <Link to='/projects'>

            <div className="project-circle webPage-Side img-container">
                    <img src={IMAGES.Business} alt="" />
            </div>

            </Link>
            
        </div> 

        <div className="skills">

        <div>
            <div className="skills-btn">HTML</div>
            <div className="skills-btn">CSS</div>
            <div className="skills-btn">JAVASCRIPT</div>
            <div className="skills-btn">REACT.js</div>
        </div>
            
        <div>
            <div className="skills-btn">BOOTSTRAP</div>
            <div className="skills-btn">GIT</div>
            <div className="skills-btn">GITHUB</div>
            <div className="skills-btn">FIGMA</div>
        </div>
            
           

        </div>

        <Element id="contacts "name="contacts">
                <div id='contacts' className="contacts">
                    <div className="projects-circle projects-circle-1">
                        <h2>Contacts</h2>
                        <p>Zondoandile97@gmail.com</p>
                        <div className='tablet'>
                        <p></p>
                        <p></p>
                        <p>WhatsApp</p>
                        <p>(+27) 64 966 9876</p> 
                        </div>
                        
                    </div>
                    <div className="projects-circle projects-circle-2 ">
                        <p>WhatsApp</p>
                        <p>064 966 9876</p>
                    </div>
                </div>
            </Element>
        
    </div>
     );
}
 
export default Home;

