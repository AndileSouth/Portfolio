import './NavBar.css'
import { Link } from 'react-router-dom';
import IMAGES from './img/Image';
const NavBar = () => {
    return ( 
        <div className="navBar">
            <div className="navBar-content">
                <div className="nav-boxes menu-btn">

                    <div className="menu-bar">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    
                </div>
                
                <div className="nav-boxes middle-box">

                    <div className="space-between">
                    <Link to='/Portfolio'>ANDILE ZONDO</Link>
                    </div>
                    
                    {/* <div className="space-between Profile-pic ">
                        <img src={IMAGES.profle} alt="" />
                    </div> */}

                    {/* <div className="space-between">
                        Zondo
                    </div> */}

                </div>

                <div className="nav-boxes mobile-nav">

                    <div className="space-between">
                       <Link to='/Portfolio'>Home</Link>
                    </div>

                    <div className="space-between">
                       <Link to='projects'>Projects</Link> 
                    </div>


                    <a href="https://github.com/AndileSouth" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>

                    <div href="section1" className="space-between">
                    <Link to={{ pathname: '/Portfolio', hash: '#contacts' }}>Contacts</Link>  
                    </div>

                </div>

                

                    <div className="Profile-pic ">
                        <img src={IMAGES.profle} alt="" />
                    </div>

                

            </div>
        </div>
     );
}
 
export default NavBar;