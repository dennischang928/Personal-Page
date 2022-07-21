import React from "react";
import styles from "./Contact.module.css"
const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contact}>
                    <a href="https://github.com/dennischang928" target="_blank"><img loading="lazy" src={require("../Images/github-brands 1.svg").default} alt="" /></a>
                    <a href="https://www.linkedin.com/in/dennis-chang-436834223/" target="_blank"><img loading="lazy" src={require("../Images/linkedin-brands.svg").default} alt="" /></a>
                    <a href="https://www.facebook.com/dennis.chang.1428921/" target="_blank"><img loading="lazy" src={require("../Images/facebook-brands 1.svg").default} alt="" /></a>
                    <a href="https://instagram.com/dennis.s.chon/" target="_blank"><img loading="lazy" src={require("../Images/instagram-brands 1.svg").default} alt="" /></a>
                </div>
                <div className={styles.copyright}>
                    ©2022 by Dennis Chang
                </div>
            </div>
        </div>
    )
}

export default Contact