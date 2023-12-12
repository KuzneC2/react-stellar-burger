import { useEffect } from 'react';
import styles from './modal.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modalOverlay/modalOverlay';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";

const modal = document.getElementById('modals')

function Modal({ title, handleModalClose, children }) {

    const сloseOnEscape = (e) => {
        if (e.key === "Escape") {
            handleModalClose()
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", сloseOnEscape)
        return () => {
            document.removeEventListener("keydown", сloseOnEscape);
        }
    }, []);

    return createPortal((
        <>
            <ModalOverlay handleModalClose={handleModalClose} />
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
    handleModalClose: PropTypes.func.isRequired, // Keep the prop name as 'modalClose'
    title: PropTypes.string,
    typeModal: PropTypes.any,
}

export default Modal