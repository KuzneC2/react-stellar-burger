import styles from "./ingredient.module.css";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from "../../utils/prop-types"

export default function Ingredient({ data }) {
    return (
        <li>
            <div className={`${styles.ingredient}`}>
                <img src={data.image} alt={`Изображение: ${data.name}`} className={`${styles.image} ml-4 mr-4`} />
                <div className={`${styles.price} mt-2 mb-2`}>
                    <p className={"text text_type_digits-default mr-3"}>{data.price}</p>
                    <CurrencyIcon type={"primary"} />
                </div>
                <p className={`${styles.subtitle} text text_type_main-default`}>{data.name}</p>
                <Counter count={1} size={"default"} extraClass={styles.counter} />
            </div>
        </li>
    )
}

Ingredient.propTypes = {
    data: ingredientPropType.isRequired
}