import styles from "./ingrediens.module.css"
import { useMemo } from "react";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types"
import FilterMenu from "../tab/filter-menu"
import IngredientsBurger from "../ingredients-burger/ingredients-burger";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function BurgerIngredients({ data, openModal, closeModal, modalState }) {
    const buns = useMemo(() => data.filter(item => item.type === "bun"), [data]);
    const mains = useMemo(() => data.filter(item => item.type === "main"), [data]);
    const sauces = useMemo(() => data.filter(item => item.type === "sauce"), [data]);

    return (
        <section className={styles.menu}>
            <h1 className={"text text_type_main-large mb-5 mt-10"}>Соберите бургер</h1>
            <FilterMenu />
            <div className={`${styles.menuList} `}>
                <IngredientsBurger ingredients={buns} categoryName={"Булки"} className={"mt-10"} openDetails={openModal} />
                <IngredientsBurger ingredients={sauces} categoryName={"Соусы"} openDetails={openModal} />
                <IngredientsBurger ingredients={mains} categoryName={"Начинки"} openDetails={openModal} />
            </div>

            {
                modalState.isOpen &&
                <Modal handleModalClose={closeModal} title={"Детали ингрединета"}>
                    <IngredientDetails ingredientData={modalState.data} />
                </Modal>
            }

        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    modalState: PropTypes.object.isRequired,
};

export default BurgerIngredients