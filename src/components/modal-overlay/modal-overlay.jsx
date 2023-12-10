import styles from "./modal-overlay.module.css"



const ModalOverlay = ({modalClose}) => {
    return <div onClick={modalClose} className={`${styles.overlay}`} />
}

export default ModalOverlay;
