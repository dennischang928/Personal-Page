import React from "react";
import Interest_Section from "./Interests-Section";

import styles from "./AboutMe-Page.module.css"


const AboutMe_Page = ({ ref }) => {
    return (
        <div className={styles.AboutMe_Section} id="AboutMe-Section" ref={ref}>
            <div className={styles.Content_Part}>
                <h1>
                    &#60;
                    About me/
                    &#62;
                </h1>
                <p className={styles.Nparagraph}>
                    Hi, I am Dennis. I am an F3 student from Macau. I am interested in
                    Engineering, Programming, and Robotics! I love designing and creating
                    robots from scratch. When I first discovered Engineering and Robotics, I realized I’d
                    found the crossroads of everything I was interested in: Design, Physics, and Computer programming.
                    Since then, I started to create robots in the work-flow of design, prototyping, and testing.
                    Until now, I had worked on 4 projects, which included robotics engineering, computer programming,
                    software engineering and electrical engineering.
                    <br />
                    <br />
                    Engineering attracts me in that it’s everywhere in our lives, from the transistors of our phone's chip to the cameras of the Mars Curiosity Rover. I think robotics is the combined application of mathematics, physics, electronics, and design. Robotics brings those complicated theories and physics alive and makes them to become closer to our live.
                </p>

                <p className={styles.Mparagraph}>
                    Hi, I am Dennis. I am an F3 student from Macau. I am interested in
                    Engineering, Programming, and Robotics! I love designing and creating
                    robots from scratch. When I first discovered Engineering and Robotics, I realized I’d
                    found the crossroads of everything I was interested in: Design, Physics, and Computer programming.
                    Since then, I started to create robots in the work-flow of design, prototyping, and testing.
                    Until now, I had worked on 4 projects, which included robotics engineering, computer programming,
                    software engineering and electrical engineering.
                </p>
            </div>
            <Interest_Section styles={styles} />
        </div>
    )
}

export default AboutMe_Page;