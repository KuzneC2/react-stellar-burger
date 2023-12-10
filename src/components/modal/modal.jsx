import React from 'react';
import { useEffect } from 'react';
import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { createPortal } from 'react-dom';

const modal = document.getElementById('root-modal')

function Modal({ title, modalClose, typeModal }) {

    const CloseOnEscape = (e) => {
        if (e.key === "Escape") {
            modalClose()
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", CloseOnEscape)
        return () => {
            document.removeEventListener("keydown", CloseOnEscape);
        }
    }, []);

    return createPortal((
        <>
            <ModalOverlay modalClose={modalClose} />
            <div className={`${styles.modal} pl-10 pr-10`}>
                <button onClick={modalClose} className={`${styles.buttonClose}`} name={'buttonClose'}>
                    <CloseIcon type={"primary"}></CloseIcon>
                </button>
                <h2 className={`${styles.title}  text text_type_main-large mt-10 pt-3 mb-3`}>{title}</h2>
                {typeModal}
            </div>
        </>
    ), modal)
}

export default Modal