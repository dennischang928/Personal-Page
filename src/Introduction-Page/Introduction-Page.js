import React from "react"

import TypeAnimation from 'react-type-animation';

import styles from './Introduction-Page.module.css'

const Introduction_Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.NIntro_section} id="Intro-section">
                <div className={styles.left}>
                    <img src={require("../Images/Intro.jpg")} alt="" />
                </div>
                <div className={styles.middle}>
                    <TypeAnimation
                        cursor={false}
                        sequence={['', 100, 'Hi, I am Dennis']}
                        wrapper="h1"
                    />
                    <TypeAnimation
                        cursor={false}
                        sequence={['', 1000, 'I am a Electrical Engineer']}
                        wrapper="h2"
                    />
                </div>
            </div>
            <div className={styles.MIntro_section} id="Intro-section">
                <TypeAnimation
                    cursor={false}
                    sequence={['', 100, 'Hi, I am Dennis']}
                    wrapper="h1"
                />
                <div className={styles.CroppedImage}>
                    <img src={require("../Images/Intro.jpg")} alt="" />
                </div>
                <TypeAnimation
                    cursor={false}
                    sequence={['', 1000, 'I am a Electrical Engineer']}
                    wrapper="h2"
                />
            </div>
        </div >



    )
}

export default Introduction_Page