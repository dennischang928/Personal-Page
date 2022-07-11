import React from "react"
import styles from './Introduction-Page.module.css'

const Introduction_Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.NIntro_section} id="Intro-section">
                <div className={styles.left}>
                    <img src={require("../Images/Intro.jpg")} alt="" />
                </div>
                <div className={styles.middle}>
                    <h1>Hi, I'm Dennis</h1>
                    <h2>I'm a Electrical Engineer</h2>
                </div>
            </div>
            <div className={styles.MIntro_section} id="Intro-section">
                <h1>Hi, I'm Dennis</h1>
                <div className={styles.CroppedImage}>
                    <img src={require("../Images/Intro.jpg")} alt="" />
                </div>
                <h2>I'm a Electrical Engineer</h2>
            </div>
        </div >



    )
}

export default Introduction_Page