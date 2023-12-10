import styles from "./modal-overlay.module.css"
import PropTypes from "prop-types";


const ModalOverlay = ({modalClose}) => {
    return <div onClick={modalClose} className={`${styles.overlay}`} />
}

ModalOverlay.propTypes = {
    handleModalClose: PropTypes.func.isRequired,
 };

export default ModalOverlay;
