import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import Tweet from './components/Tweet'
import './app.scss'
import Userdetails from './components/Userdetails'
import Topbar from './components/Topbar';
import RightSideBar from './components/RightSideBar'
import Home from './pages/Home'
import Modal from './components/Modal'
import { AppContext } from './context/Modalcontext';
import { useContext } from 'react'

function App() {

  const {openModal} = useContext(AppContext);
  return (
    <>
    <div className='app'>

      <div className='sidebar'>
        <div>
        <Logo/>
        <Sidebar/>
        <Tweet/>
        </div>
        <Userdetails/>
      </div>
      
      <div className='t-bar'>
        <Topbar/>
      <div><Home/></div>
      </div>
      
        {openModal && <Modal/> }
        
        
      
        {openModal ? <div className='r-bar'> <RightSideBar/> </div> : <RightSideBar/> }
        
      

    </div>
    </>
  )
}

export default App
