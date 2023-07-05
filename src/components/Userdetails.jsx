import {BsThreeDots} from 'react-icons/bs'
import '../styles/sidebar.scss';

const Userdetails = () => {

    return (

    <div className='user'>
        <div className="userimg">I</div>
        <div className='username'><p className='usertext'>Indrajith</p><p>@Indraji746463</p></div>
        <div className='dots'><BsThreeDots/></div>
    </div>
    )
}


export default Userdetails
