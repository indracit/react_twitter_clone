import { AppContext } from "../context/Modalcontext"
import { useContext } from "react"

const Getverified = () => {
  const {setOpenModal} = useContext(AppContext)
  return (
    <div className="get-verified">
        <h4>Get Verified</h4>
        <p>Subscribe to unlock new features.</p>
        <p className="verfied-button" onClick={()=>setOpenModal(true)}>Get Verified</p>
    </div>
  )
}

export default Getverified
