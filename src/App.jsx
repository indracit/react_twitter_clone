import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import Tweet from './components/Tweet'
import './app.scss'
import Userdetails from './components/Userdetails'
import Topbar from './components/Topbar';
import RightSideBar from './components/RightSideBar'

function App() {

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

      <div>
        <Topbar/>
      </div>
      <div>
        <RightSideBar/>
      </div>
    </div>
    </>
  )
}

export default App
