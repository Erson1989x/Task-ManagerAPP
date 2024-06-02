import React, { useEffect } from 'react'
import { useState } from 'react'
import './Modal.css'
import closeIcon from '../../assets/icons/close.png';


const Modal = (props) => {
const [isOpen, setIsOpen] = useState(false);

const closeModal = () => {
    setIsOpen(false)
    if(props.onClose){
        props.onClose()
    }
}

useEffect (()=>{
    setIsOpen(props.isOpen);
}, [props.isOpen])

    return (
        <div className={`${isOpen ? "modal-container" : "modal-hiden"}`}>
            <div className='modal-content'>
                <div className='modal-header'>
                    <div onClick={closeModal} className='close-button'>
                    <img src={closeIcon} alt="close" />
                    </div>
                     {props.children}
                </div>
            </div>
        </div>
    )


}


export default Modal