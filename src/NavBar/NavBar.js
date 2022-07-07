import React from "react";
import styles from "./NavBar.module.css"

const NavBar = ({ title, onIntroduction_Page_Click, onAboutMe_Page_Click, onProject_Page_Click, onContact_Click }) => {
    return (
        <div className={styles.nav}>
            <div className={styles.Left_Container}>
                <h1>{title}</h1>
            </div>
            <div className={styles.Right_Container}>
                <ul>
                    <li> <a onClick={onIntroduction_Page_Click}>Home</a> </li>
                    <li> <a onClick={onAboutMe_Page_Click}>About</a> </li>
                    <li> <a onClick={onProject_Page_Click}>Projects</a> </li>
                    <li> <a onClick={onContact_Click}>Contact</a> </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;