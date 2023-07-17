import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Modalcontext from './context/Modalcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <Modalcontext>
    <App />
    </Modalcontext>
    </BrowserRouter>
  </React.StrictMode>,
)
