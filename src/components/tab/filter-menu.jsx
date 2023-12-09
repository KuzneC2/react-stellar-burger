import React, { useState } from "react";
import styles from "./filter-menu.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export default function FilterMenu() {
    const [current, setCurrent] = useState('Булки')
    return (
        <div className={`${styles.filter}`}>
            <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}