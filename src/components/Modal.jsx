import '../styles/sidebar.scss'
import { AppContext } from '../context/Modalcontext'
import { useContext } from 'react'
import { FaTwitter } from "react-icons/fa";

const Modal = () => {
    const {setOpenModal} = useContext(AppContext)

    return (
    <div className='background'>
        <div className="modal-verified">
            <div className='modal-top'>
        <p onClick={()=>setOpenModal(false)}>x</p>
        <FaTwitter style={{color:'#1d9bf0',fontSize: '1.4rem'}}/>
            </div>
            
        <div className='modal-body'>
            <p className='bold'>Who are you?</p>
            <p className='font-sm bold'>Choose the right Verified subscription for you:</p>
            <div className='body-content'>
            <div className='body-content-item'>
                <p>Twitter Blue</p>
                <p className='bold'>I am an individual</p>
                <p>For individuals and creators</p>
            </div>
            <div className='body-content-item'>
                <p>Verified Organizations</p>
                <p className='bold'>I am an organization</p>
                <p>For businesses, government agencies, and non-profits</p>
            </div>
            </div>
            <p className='sub-button'>Subscribe</p>
            <p className='font-sm'>Learn more about <a href='#'>Twitter Blue</a> and <a href='#'>Verified Organizations</a></p>
        </div>
        </div>
    </div>
    )
}

export default Modal