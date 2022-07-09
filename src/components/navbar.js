import '../sass/portfolio.scss'
import image from './YOGESH.jpg'
const Navbar=()=>{
    return(
        <>
        <div className='header-wrap'>
            <div className='user'>
                <img src={image} alt='Yogeshwaran'></img>
                <h3 className='name'>Yogeshwaran C</h3>
                <p className='designation'>Full stack web developer</p>
            </div>
            <nav className='navbar-wrap'>
                <ul>
                    <li><a className='a' href='#about'>About</a></li>
                    <li><a className='a' href='#work'>Work Experience</a></li>
                    <li><a className='a' href='#projects'>Skills {'&'} Projects</a></li>
                    <li><a className='a' href='#education'>Education</a></li>
                    <li><a className='a' href='#contact'>Contact</a></li>
                    
                </ul>
            </nav>
        </div> 
        <div id='menu' className='fas fa-bars'></div>
        </>      
    )
}
export default Navbar;
