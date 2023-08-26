import './Projects.css';
import IMAGES from '../img/Image';
const PROJECTS = () => {
    return ( 
        <div className="projects">
            <h1>Projects</h1>
            <div>
                <h2>Web Apps</h2>
                
                <div>

                    <a href="https://andilesouth.github.io/Dad-Joke-Generator/">

                        <div className="img-container">
                        <img src={IMAGES.DadjokeApp} alt="" />
                            <div className="title-languages">
                                
                                <div>html,css and javascript </div>
                            </div>
                        </div>

                    </a>
                    

                    <a href="https://andilesouth.github.io/Activity-Suggestion-App/">

                      <div className="img-container">
                        <img src={IMAGES.ActivityApp} alt="" />
                            <div className="title-languages">
                            
                                <div>React.js & Api
                                </div>

                            </div>
                        </div>  

                    </a>
                    

                </div>
                
            </div>

            <div>
                <h2>Business Webpages</h2>
                
                <div>

                    <a href="https://andilesouth.github.io/Sneaker-City/">

                        <div className="img-container">
                        <img src={IMAGES.Business1} alt="" />
                        <div className="title-languages">
                            <div>React.js</div>
                        </div>
                        </div>

                    </a>
                    

                    <a href="https://andilesouth.github.io/Furniture-website-project/">

                      <div className="img-container">

                        <img src={IMAGES.Business} alt="" />
                            <div className="title-languages">
                                
                                <div>html,css and javascript</div>
                            </div>
                        </div>  

                    </a>
                    

                </div>
                
            </div>


        </div>
     );
}
 
export default PROJECTS;