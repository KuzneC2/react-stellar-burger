import { useEffect } from 'react';
import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";

const modal = document.getElementById('root')

function Modal({ title, handleModalClose, children }) {

    const CloseOnEscape = (e) => {
        if (e.key === "Escape") {
            handleModalClose()
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
            <ModalOverlay modalClose={handleModalClose} />
            <div className={`${styles.modal} pl-10 pr-10`}>
                <button onClick={handleModalClose} className={`${styles.buttonClose}`} name={'buttonClose'}>
                    <CloseIcon type={"primary"}></CloseIcon>
                </button>
                <h2 className={`${styles.title}  text text_type_main-large mt-10 pt-3 mb-3`}>{title}</h2>
                {children}
            </div>
        </>
    ), modal)
}

Modal.propTypes = {
    modalClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    typeModal: PropTypes.any,
}

export default Modal