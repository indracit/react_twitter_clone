import '../styles/sidebar.scss'
import { AppContext } from '../context/Modalcontext'
import { useContext } from 'react'

const Modal = () => {
    const {setOpenModal} = useContext(AppContext)

    return (
        <div className="modal-verified">
        <button onClick={()=>setOpenModal(false)}>X</button>
        <p>modal</p>
    </div>
    )
}

export default Modal