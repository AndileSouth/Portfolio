import './NavBar.css'
import { Link } from 'react-router-dom';
import IMAGES from './img/Image';
const NavBar = () => {

    

    function Menu() {
        const dropDownMenu = document.getElementById('drop-down-menu');
        const getDropDownMenuStyle = window.getComputedStyle(dropDownMenu);
        const getDisplay = getDropDownMenuStyle.display;

        if(getDisplay === "none") {
            dropDownMenu.style.display = "flex"
        } else {
            dropDownMenu.style.display = "none"
        }
    }

    return ( 
        <div className="navBar">
            <div className="navBar-content">

                <div className="nav-boxes menu-btn">

                    <div className="menu-bar" onClick={Menu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    
                </div>
                
                <div className="nav-boxes middle-box">

                    <div className="space-between">
                    <Link to='/Portfolio'>ANDILE ZONDO</Link>
                    </div>
                

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

            <div id='drop-down-menu' className="drop-down-menu">
                
                <div className="drop-down-menu-left">
                <div id="cross" className='cross' onClick={Menu}>
                    <span></span>
                    <span></span>
                </div>

                <Link to='/projects' >
                    <div className='drop-down-content' onClick={Menu}>
                    <Link to='/projects'>Projects</Link>
                    </div>
                </Link>
                
                <Link to="/Portfolio">
                    
                  <div className='drop-down-content' onClick={Menu}>
                    Content
                  </div>  
                </Link>
                
                <a href="https://github.com/AndileSouth" target="_blank" rel="noopener noreferrer">
                    <div className='drop-down-content' onClick={Menu}>
                        Github
                    </div>
                </a>
                

                </div>
                
                <div className="drop-down-menu-right" onClick={Menu}>

                </div>
                
            </div>
        </div>
     );
}
 
export default NavBar;