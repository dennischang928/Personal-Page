import React, { useState } from "react";

import Hamburger_List from "./Hamburger_List";
import { Sling as Hamburger } from 'hamburger-react'
import Collapse from '@mui/material/Collapse';

import styles from "./NavBar.module.css"

const NavBar = ({ title, onIntroduction_Page_Click, onAboutMe_Page_Click, onProject_Page_Click, onContact_Click }) => {

    const [IsList_Opened, setIsList_Opened] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.Left_Container}>
                    <h1>{title}</h1>
                </div>
                <div className={styles.NRight_Container}>
                    <ul>
                        <li> <a onClick={onIntroduction_Page_Click}>Home</a> </li>
                        <li> <a onClick={onAboutMe_Page_Click}>About</a> </li>
                        <li> <a onClick={onProject_Page_Click}>Projects</a> </li>
                        <li> <a onClick={onContact_Click}>Contact</a> </li>
                    </ul>
                </div>
                <div className={styles.MRight_Container}>

                    <Hamburger size={20} toggle={(e) => { onProject_Page_Click(); setIsList_Opened(e); }} toggled={IsList_Opened} />
                </div>
            </div>
            <Hamburger_List IsList_Opened={IsList_Opened} />
        </div>

    )
}

export default NavBar;