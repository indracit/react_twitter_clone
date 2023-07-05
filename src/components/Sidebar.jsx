import '../styles/sidebar.scss'

import {GrSearch} from "react-icons/gr";
import { BiHomeCircle } from "react-icons/bi";
import {GrNotification} from "react-icons/gr";
import {FiMail} from "react-icons/fi";
import {LuVerified} from "react-icons/lu";
import {MdPersonOutline} from "react-icons/md";
import {CgMoreO} from "react-icons/cg";
// import {GiFeather} from "react-icons/gi";
import {RiFileList2Line} from "react-icons/ri";
import {PiBookmarkSimple} from "react-icons/pi";
import {Link} from "react-router-dom";

const iconStyle = {color:'black',fontSize: '1rem'};


const Sidebar = () => {

    return (
        <div className='sidebar-container'>
        <ul >
            <li  className='list-item'>
            <Link to='/'>
                <BiHomeCircle style={iconStyle} /><span>Home</span>
            </Link>
            </li>

            <li className='list-item'>
            <Link to='/'>
                <GrSearch style={iconStyle} /> 
                <span>Explore</span>
            </Link>
            </li>

            <li className='list-item'>
                    
                <Link to='/'>
                    <GrNotification style={iconStyle} />
                    <span>Notifications</span>
                </Link>
                    
            </li>

            <li className='list-item'>
                <Link to='/'>
                    <FiMail style={iconStyle}/> 
                    <span>Messages</span>
                </Link>
            </li>

            <li className='list-item'>
                <Link to='/'>
                    <RiFileList2Line style={iconStyle}/> 
                    <span>Lists</span>
                </Link>
            </li>

            <li className='list-item'>
                <Link to='/'>
                    <PiBookmarkSimple style={iconStyle}/> 
                    <span>Bookmarks</span>
                </Link>
            </li>

            <li className='list-item'>
                <Link to='/'>
                    <LuVerified style={iconStyle}/>
                    <span>Verified</span>
                </Link>
            </li>

            <li className='list-item'>
                <Link to='/'>
                    <MdPersonOutline style={iconStyle}/> 
                    <span>Profile</span>
                </Link>
            </li>

            <li className='list-item'>
                <Link to='/'>
                    <CgMoreO style={iconStyle}/> 
                    <span>More</span>
                </Link>
            </li>

        </ul>
        
        {/* <GiFeather style={{fontSize: '1.7rem'}}/> */}
        </div>
    )

}

export default Sidebar