import { useState } from 'react'
import styles from './nav-item.module.css'
import PropTypes from "prop-types"

function NavItem({ Icon, navName, className }) {
    const [isActive, setIsActive] = useState(false);
    const clickHandler = () => setIsActive(!isActive)

    const type = isActive ? "primary" : "secondary"
    const textInactive = isActive ? null : "text_color_inactive"

    return (
        <li className={`${className}`}>
            <a className={`${styles.link}`} href={'#'} onClick={clickHandler} >
                <Icon type={type} /><span className={`ml-2 text_type_main-default ${textInactive}`}>{navName}</span>
            </a>
        </li>
    )
}

NavItem.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    navName: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default NavItem