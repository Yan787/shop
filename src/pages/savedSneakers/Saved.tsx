// import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import CardSavedList from "../../components/CardSavedList";
// import { PostSalectors } from "../../redux/reducers/cardSlice";
// import { RouterList } from "../Router";

// import styles from "./Saved.module.scss";

// const Saved = () => {
//   const navigate = useNavigate();

//   const onHomeClick = () => {
//     navigate(RouterList.Home);
//   };

//   return a.length > 0 ? (
//     <div className={styles.wrapper}>
//       <div className={styles.text}>Мои закладки</div>
//       <CardSavedList cardsList={[]} />
//     </div>
//   ) : (
//     <div className={styles.emptyState}>
//       <img
//         className={styles.img}
//         width="70"
//         height="70"
//         src="/img/empty.svg"
//         alt="Закладок нет :("
//       />
//       <div className={styles.title}>Закладок нет</div>
//       <div className={styles.EmptyStateText}>
//         Вы ничего не добавляли в закладки
//       </div>
//       <div onClick={onHomeClick} className={styles.btn}>
//         <img className={styles.arrowBasket} src="/img/arrow<-.svg" /> Вернуться
//         назад
//       </div>
//     </div>
//   );
// };

// export default Saved;

export {};
