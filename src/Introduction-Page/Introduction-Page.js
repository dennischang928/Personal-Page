import React from "react"

import TypeAnimation from 'react-type-animation';

import styles from './Introduction-Page.module.css'

const Introduction_Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.NIntro_section} id="Intro-section">
                <div className={styles.Primary_Background}></div>
                <div className={styles.left}>
                    <img loading="lazy" src={require("../Images/Intro.jpeg")} alt="" />
                </div>
                <div className={styles.middle}>
                    <TypeAnimation
                        cursor={false}
                        sequence={['H', 100, 'Hi, I am Dennis']}
                        wrapper="h1"
                    />
                    <TypeAnimation
                        cursor={false}
                        sequence={['I', 100, 'I am a Electrical Engineer']}
                        wrapper="h2"
                    />
                </div>


            </div>

            <div className={styles.MIntro_section} id="Intro-section">
                <div className={styles.Primary_Background}></div>
                <TypeAnimation
                    cursor={false}
                    sequence={['H', 100, 'Hi, I am Dennis']}
                    wrapper="h1"
                />
                <div className={styles.CroppedImage}>
                    <img loading="lazy" src={require("../Images/Intro.jpeg")} alt="" />
                </div>
                <TypeAnimation
                    cursor={false}
                    sequence={['I', 100, 'I am a Electrical Engineer']}
                    wrapper="h2"
                />
            </div>
        </div >



    )
}

export default Introduction_Page