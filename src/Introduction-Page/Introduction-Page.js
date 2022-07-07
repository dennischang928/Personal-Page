import React from "react"
import styles from './Introduction-Page.module.css'

const Introduction_Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Intro_section} id="Intro-section">
                <div className={styles.left}>
                    <img src={require("../Images/Intro.jpg")} alt="" />
                </div>
                <div className={styles.middle}>
                    <h1>Hi, I am Dennis</h1>
                    <h2>A Electrical engineer</h2>
                </div>
            </div>
        </div>

    )
}

export default Introduction_Page