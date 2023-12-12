import styles from "./modalOverlay.module.css"
import PropTypes from "prop-types";


const ModalOverlay = ({handleModalClose}) => {
    return <div onClick={handleModalClose} className={`${styles.overlay}`} />
}

ModalOverlay.propTypes = {
    handleModalClose: PropTypes.func.isRequired,
 };

export default ModalOverlay;
