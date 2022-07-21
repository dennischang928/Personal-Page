import React from "react";

const Interest_Section = ({ styles }) => {
    return (
        <div className={styles.Interests_Part}>
            <h1>
                My interests
            </h1>
            <ul>
                <li className={styles.interest}><img loading="lazy" src={require("../Images/headphones-solid 1.svg").default} />
                    <p>Music</p>
                </li>
                <li className={styles.interest}><img loading="lazy" src={require("../Images/code-solid 1.svg").default} />
                    <p>Coding</p>
                </li>
                <li className={styles.interest}><img loading="lazy" src={require("../Images/Vector.svg").default} />
                    <p>Basketball</p>
                </li>
                <li className={styles.interest}><img loading="lazy" src={require("../Images/Movie.svg").default} />
                    <p>Movie</p>
                </li>
                <li className={styles.interest}><img loading="lazy" src={require("../Images/Running.svg").default} />
                    <p>Running</p>
                </li>
                <li className={styles.interest}><img loading="lazy" src={require("../Images/Game.svg").default} />
                    <p>Gaming</p>
                </li>
            </ul>
        </div>
    )
}
export default Interest_Section