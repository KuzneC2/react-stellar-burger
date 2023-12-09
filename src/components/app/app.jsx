import styles from "./app.module.css";
import AppHeader from "../header/header.jsx";
import { data } from "../../utils/data";
import BurgerIngredients from "../ingredients/ingredients";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={`${styles.main}`}>
      <BurgerIngredients data={data} />
      </main>
    </div>
  );
}

export default App;
