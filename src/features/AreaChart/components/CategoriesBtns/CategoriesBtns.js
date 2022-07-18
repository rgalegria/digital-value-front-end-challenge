import React from "react";
import ActionBtn from "../../../../components/Buttons/ActionBtn/ActionBtn";

// Styles
import styles from "./CategoriesBtns.module.css";

const CategoriesBtns = ({ categoryList, onClick, activeBtn }) => {
    return (
        <div className={styles.container}>
            {categoryList.map((cat) => {
                return (
                    <ActionBtn
                        key={cat.id}
                        id={cat.id}
                        text={cat.name}
                        onClick={onClick}
                        activeBtn={activeBtn}
                        btnStyles={styles.btn}
                        btnWrapper={styles.btnWrapper}
                    />
                );
            })}
        </div>
    );
};

export default CategoriesBtns;
