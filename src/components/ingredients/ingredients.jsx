import styles from "./ingrediens.module.css"
import React, {useMemo} from "react";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/prop-types"
import FilterMenu from "../tab/filter-menu"
import IngredientsBurger from "../ingredients-burger/ingredients-burger";



export default function BurgerIngredients({data}) {
    const buns = useMemo(() => data.filter(item => item.type === "bun"), [data]);
    const mains = useMemo(() => data.filter(item => item.type === "main"), [data]);
    const sauces = useMemo(() => data.filter(item => item.type === "sauce"), [data]);

    return (
        <section className={styles.menu}>
            <h1 className={"text text_type_main-large mb-5 mt-10"}>Соберите бургер</h1>
            <FilterMenu />
            <div className={`${styles.menuList} `}>
                <IngredientsBurger ingredients={buns} categoryName={"Булки"} className={"mt-10"}/>
                <IngredientsBurger ingredients={sauces} categoryName={"Соусы"} />
                <IngredientsBurger ingredients={mains} categoryName={"Начинки"} />
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
}