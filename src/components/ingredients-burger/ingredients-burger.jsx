import styles from "./ingredients-burger.module.css"
import Ingredient from "../ingredient/ingredient";
import { ingredientPropType } from "../../utils/prop-types"
import PropTypes from "prop-types";

function IngredientsBurger({ ingredients, categoryName, className, openDetails }) {
    return (
        <>
            <h2 className={`${className} text text_type_main-medium`}>{categoryName}</h2>
            <ul className={`${styles.lists} mt-6 mb-10 pl-4`}>
                {ingredients.map(itemData => (<Ingredient data={itemData} key={itemData._id} openDetails={openDetails} />))}
            </ul>
        </>
    )
}

IngredientsBurger.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
    categoryName: PropTypes.string.isRequired,
    className: PropTypes.string,
    openDetails: PropTypes.func.isRequired
};

export default IngredientsBurger;