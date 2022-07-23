import React from "react";

import Hamburger_List from "./Hamburger_List";
import { Squash as Hamburger } from 'hamburger-react'

import styles from "./NavBar.module.css"

const NavBar = ({ title, onIntroduction_Page_Click, onAboutMe_Page_Click, onProject_Page_Click, onContact_Click, IsList_Opened, setIsList_Opened }) => {

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
                    <Hamburger size={20} toggle={setIsList_Opened} toggled={IsList_Opened} />
                </div>
            </div>
            <Hamburger_List
                onIntroduction_Page_Click={() => {
                    setIsList_Opened(false);
                    onIntroduction_Page_Click();
                }}
                onAboutMe_Page_Click={() => {
                    setIsList_Opened(false);
                    onAboutMe_Page_Click();
                }}
                onProject_Page_Click={() => {
                    setIsList_Opened(false);
                    onProject_Page_Click();
                }}
                onContact_Click={() => {
                    setIsList_Opened(false);
                    onContact_Click();
                }}
                IsList_Opened={IsList_Opened}
            />
        </div>

    )
}

export default NavBar;