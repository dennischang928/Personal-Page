import React from "react";
import styles from "./Hamburger_List.module.css"

const Hamburger_List = ({ onIntroduction_Page_Click, onAboutMe_Page_Click, onProject_Page_Click, onContact_Click, IsList_Opened }) => {
    return (
        <div
            className={styles.Hamburger_List}
            style={{ height: `${IsList_Opened ? "93.5" : "0"}vh` }}>
            <ul>
                <li> <a onClick={onIntroduction_Page_Click}>Home</a> </li>
                <li> <a onClick={onAboutMe_Page_Click}>About</a> </li>
                <li> <a onClick={onProject_Page_Click}>Projects</a> </li>
                <li> <a onClick={onContact_Click}>Contact</a> </li>
            </ul>
        </div >
    )
}

export default Hamburger_List