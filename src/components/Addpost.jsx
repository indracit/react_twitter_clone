import '../styles/sidebar.scss';
import {GoFileMedia} from 'react-icons/go'
import {AiOutlineFileGif} from 'react-icons/ai'
import {CgPoll} from 'react-icons/cg'
import {BsEmojiSmile} from 'react-icons/bs'
import {AiOutlineSchedule} from 'react-icons/ai'
import {HiOutlineLocationMarker} from 'react-icons/hi'
const Addpost = () => {
  return (
    <div className='tweetpost'>
        <div className='homepage'>
            <div className="userimg">I</div>
            <div>
            <input className= 'postinput' type='text' placeholder='What is happenning?!'/>
            </div>
            </div>
        <div className='icon-tweets'>
          <div className='icons-i'>
            <div>
              <GoFileMedia/>
            </div>
            <div>
              <AiOutlineFileGif/>
            </div>
            <div>
              <CgPoll/>
            </div>
            <div>
              <BsEmojiSmile/>
            </div>
            <div>
              <AiOutlineSchedule/>
            </div>
            <div>
              <HiOutlineLocationMarker/>
            </div>
          </div>
          <div className='tweet-i'>
            <p>Tweet</p>
          </div>
        </div>
    </div>
  )
}

export default Addpost