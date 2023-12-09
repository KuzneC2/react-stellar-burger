import styles from './header.module.css'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import NavItem from '../nav-item/nav-item';

function AppHeader() {
    return (
        <header className={`${styles.header} p-4`}>
            <nav className={`${styles.navigate}`}>
                <ul className={`${styles.list}`}>
                    <div className={`${styles.container}`}>
                        <NavItem Icon={BurgerIcon} navName={'Конструктор'} className={`pt-4 pb-4 pr-5`} />
                        <NavItem Icon={ListIcon} navName={'Лента заказов'} className={`ml-2 p-4 pl-5`} />
                    </div>
                    <NavItem Icon={ProfileIcon} navName={'Личный кабинет'} className={`pt-4 pb-4`} />
                </ul>
                <a className={`${styles.logo}`}><Logo /></a>
            </nav>
        </header>
    )
}



export default AppHeader