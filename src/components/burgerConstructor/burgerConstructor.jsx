import { useMemo } from "react"
import styles from './burgerConstructor.module.css'
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import Modal from "../modal/modal"
import { OrderDetails } from "../orderDetails/orderDetals"
import { ingredientPropType } from "../../utils/prop-types"
import PropTypes from "prop-types";

function BurgerConstructor({ data, openModal, closeModal, modalState }) {
    const { bun, ingredients } = useMemo(() => ({
        bun: data.find(item => item.type === 'bun'),
        ingredients: data.filter(item => item.type !== 'bun')
    }), [data])

    return (
        <section className={`${styles.listSection} mt-25 ml-10`}>
            <div className={`${styles.list} ml-4`}>
                <div className={'pl-8'}>
                    <ConstructorElement
                        text={`${bun.name} (верх)`}
                        type={"top"}
                        price={bun.price}
                        thumbnail={bun.image}
                        isLocked={true}>
                    </ConstructorElement>
                </div>

                <div className={`${styles.unblockIngredients}`}>
                    {ingredients.map(item => (
                        <div key={item._id} className={styles.card}>
                            <DragIcon type="primery" />
                            <ConstructorElement
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image_mobile}
                            />
                        </div>
                    ))
                    }
                </div>

                <div className={`ml-4 pl-4`} >
                    <ConstructorElement
                        text={`${bun.name} (низ)`}
                        type={"bottom"}
                        price={bun.price}
                        thumbnail={bun.image}
                        isLocked={true}>
                    </ConstructorElement>
                </div>

                <div className={`mt-5 ${styles.total} pr-8`}>
                    <div className={`${styles.price} mr-10`}>
                        <p className={"text text_type_digits-medium"}>610</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button htmlType="submit" type="primary" size="large" onClick={openModal}>
                        Оформить заказ
                    </Button>
                    {
                        modalState.isOpen &&
                        <Modal handleModalClose={closeModal}>
                            <OrderDetails />
                        </Modal>
                    }
                </div>
            </div>

        </section>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    modalState: PropTypes.object.isRequired,
};

export default BurgerConstructor