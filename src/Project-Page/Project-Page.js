import React from "react";
import styles from "./Project-Page.module.css";
import Button from '@mui/material/Button';


const Project_Page = ({ id, title, content, thumbnail, backgroundImage, tags, isView_all_BTN_Visible }) => {

    const View_all_Project_BTN = () => {
        if (isView_all_BTN_Visible) {
            return (
                <div className={styles.View_all_Project_BTN}>
                    <p>View all</p>
                    <img src={require("../Images/caret-down-solid.svg").default} alt="" />
                </div>
            )
        } else {
            return (<div></div>)
        }
    }

    return (
        <div className={styles.container} style={{
            backgroundImage: `url(${backgroundImage})`,
        }}>
            <div className={styles.Project_Section}
            >
                <div className={styles.left}>
                    <img src={thumbnail} />
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>
                        <h1>{title}</h1>
                    </div>
                    <div className={styles.content}>
                        <p>
                            {content}
                        </p>
                    </div>
                    <div className={styles.Tag_Section}>
                        <ul>
                            {tags.map((e) => { return (<li key={e}>{e}</li>) })}
                        </ul>
                    </div>
                    <a href={`/${id}`} style={{ textDecoration: "none", color: "#000" }}>

                        <Button variant="contained" size="large" className={styles.View_Project_Button}>
                            View Project
                        </Button>
                    </a>
                </div>
            </div>
            {View_all_Project_BTN()}
        </div >
    )
}

export default Project_Page;