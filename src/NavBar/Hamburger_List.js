import React from "react";
import styles from "./Hamburger_List.module.css"

const Hamburger_List = ({ IsList_Opened }) => {
    return (
        <div
            className={styles.Hamburger_List}
            style={{ height: `${IsList_Opened ? "93.5" : "0"}vh` }}>
        </div >
    )
}

export default Hamburger_List