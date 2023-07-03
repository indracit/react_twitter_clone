import '../styles/sidebar.scss'
import { FaTwitter } from "react-icons/fa";
import {GrSearch} from "react-icons/gr";
import { BiSolidHomeCircle } from "react-icons/bi";
import {GrNotification} from "react-icons/gr";
import {FiMail} from "react-icons/fi";
import {LuVerified} from "react-icons/lu";
import {MdPersonOutline} from "react-icons/md";
import {CgMoreO} from "react-icons/cg";
import {GiFeather} from "react-icons/gi";

const Sidebar = () => {

    return (
        <>
        <FaTwitter style={{color:'#1d9bf0',fontSize: '2rem'}}/>
        <BiSolidHomeCircle style={{fontSize: '2rem'}} />
        <GrSearch style={{fontSize: '1.7rem'}} />
        <GrNotification style={{fontSize: '1.7rem'}} />
        <FiMail style={{fontSize: '1.9rem'}}/>
        <LuVerified style={{fontSize: '1.9rem'}}/>
        <MdPersonOutline style={{fontSize: '2rem'}}/>
        <CgMoreO style={{fontSize: '1.7rem'}}/>
        <GiFeather style={{fontSize: '1.7rem'}}/>
        </>
    )

}

export default Sidebar