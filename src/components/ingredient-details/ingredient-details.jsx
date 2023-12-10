import styles from './ingredient-details.module.css'
import { ingredientPropType } from "../../utils/prop-types"

function IngredientDetails({ ingredientData }) {

    const { image_large, name, calories, proteins, fat, carbohydrates } = ingredientData;
    return (
        <div className={`${styles.container}`}>
            <img className={`${styles.image}`} src={`${image_large}`} alt={name} />
            <h3 className={'text text_type_main-medium mb-8'}>{name}</h3>
            <div className={`${styles.table}`}>
                <div className={`${styles.tableElement}`}>
                    <p className={`${styles.tableValue} text text_type_main-default text_color_inactive pr-5 pb-1`}>Каллории,ккал</p>
                    <p className={`${styles.tableValueNumb} text text_type_digits-default text_color_inactive pr-5`}>{calories}</p>
                </div>
                <div className={`${styles.tableElement}`}>
                    <p className={`${styles.tableValue} text text_type_main-default text_color_inactive pr-5 pb-1`}>Белки, г</p>
                    <p className={`${styles.tableValueNumb} text text_type_digits-default text_color_inactive pr-5`}>{proteins}</p>
                </div>
                <div className={`${styles.tableElement}`}>
                    <p className={`${styles.tableValue} text text_type_main-default text_color_inactive pr-5 pb-1`}>Жиры, г</p>
                    <p className={`${styles.tableValueNumb} text text_type_digits-default text_color_inactive pr-5`}>{fat}</p>
                </div>
                <div className={`${styles.tableElement}`}>
                    <p className={`${styles.tableValue} text text_type_main-default text_color_inactive pb-1`}>Углеводы, г</p>
                    <p className={`${styles.tableValueNumb} text text_type_digits-default text_color_inactive`}>{carbohydrates}</p>
                </div>
            </div>
        </div>

    )
}

IngredientDetails.propTypes = {
    ingredientData: ingredientPropType,
}
export default IngredientDetails