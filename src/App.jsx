import Sidebar from './components/Sidebar'
import Logo from './components/Logo'
import Tweet from './components/Tweet'
import './app.scss'
import Userdetails from './components/Userdetails'

function App() {

  return (
    <>
    <div className='app'>

      <div>
      <Logo/>
      <Sidebar/>
      <Tweet/>
      <Userdetails/>
      </div>

    </div>
    </>
  )
}

export default App
