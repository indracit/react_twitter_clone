import { FaTwitter } from "react-icons/fa";
import '../styles/sidebar.scss'
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className='logo-container'>
            <Link to='/'>
            <FaTwitter style={{color:'#1d9bf0',fontSize: '1.4rem'}}/>
            </Link>
        </div>
    )
}

export default Logo
