import {useState,createContext} from 'react'


export const AppContext = createContext();

const Modalcontext = ({children}) => {
const [openModal,setOpenModal] = useState(false);

  return (
    <div>
      <AppContext.Provider value={{openModal,setOpenModal}}>
        {children}
      </AppContext.Provider>
    </div>
  )
}

export default Modalcontext
