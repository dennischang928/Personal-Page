import React from "react";
import styles from "./Nav.module.css"
import IconButton from '@mui/material/IconButton';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Nav = ({ isVisible, onIntroduction_Page_Click, onAboutMe_Page_Click, onProject_Page_Click, onContact_Click }) => {
    if (isVisible) {
        return (
            <div className={styles.nav}>
                <ul>
                    <li><img loading="lazy" src={require("../Images/house-solid 1.svg").default} onClick={onIntroduction_Page_Click} /></li>
                    <li><img loading="lazy" src={require("../Images/info-solid 1.svg").default} onClick={onAboutMe_Page_Click} /></li>
                    <li><img loading="lazy" src={require("../Images/sheet-plastic-solid 1.svg").default} onClick={onProject_Page_Click} /></li>
                    <li><img loading="lazy" src={require("../Images/envelope-solid 1.svg").default} onClick={onContact_Click} /></li>
                </ul>
            </div >
        )
    } else {
        return <div></div>;
    }
}
export default Nav;