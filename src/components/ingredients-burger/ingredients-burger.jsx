import styles from "./ingredients-burger.module.css"
import React from "react";
// import {ingredientsCategoryPropTypes} from "../../utils/prop-types"
import Ingredient from "../ingredient/ingredient";

export default function IngredientsBurger({ingredients, categoryName, className}) {
    return (
        <>
            <h2 className={`${className} text text_type_main-medium`}>{categoryName}</h2>
            <ul className={`${styles.lists} mt-6 mb-10 pl-4`}>
                {ingredients.map(itemData => (<Ingredient data={itemData} key={itemData._id}/>))}
            </ul>
        </>
    )
}

// IngredientsBurger.propTypes = IngredientsBurgerPropTypes;