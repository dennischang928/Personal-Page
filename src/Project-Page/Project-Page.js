import React, { useState } from "react";
import Nstyles from "./NProject-Page.module.css";
import Mstyles from "./MProject-Page.module.css";
import "./API.css"
import Button from '@mui/material/Button';

import Project_Card from "./Project_Card";

const Project_Page = ({ id, title, content, thumbnail, backgroundImage, tags }) => {
    const [PageScrolledIn, setPageScrolledIn] = useState("");

    const ScrolledIn_Func = () => {
        var reveals = document.querySelectorAll(".Project_Page_container");
        var Is_Any_Scrolled_In = false;

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = windowHeight/2;

            if (elementTop < windowHeight - elementVisible) {
                Is_Any_Scrolled_In = true;
                setPageScrolledIn(reveals[i].id);
            }
        }
        if (Is_Any_Scrolled_In !== true) {
            setPageScrolledIn("");
        }
    }

    window.addEventListener("scroll", ScrolledIn_Func);


    return (
        <div className="Project_Page_container" style={{
            backgroundImage: `url(${backgroundImage})`,
        }} id={id}>
            <div className={Nstyles.Project_Section}
                id="NProject_Section"
            >
                <div className={Nstyles.left}>
                    <img src={thumbnail} />
                </div>
                <div className={Nstyles.right}>
                    <div className={Nstyles.title}>
                        <h1>{title}</h1>
                    </div>
                    <div className={Nstyles.content}>
                        {content}
                    </div>
                    <div className={Nstyles.Tag_Section}>
                        <ul>
                            {tags.map((e) => { return (<li key={e}>{e}</li>) })}
                        </ul>
                    </div>
                    <a href={`/${id}`} style={{ textDecoration: "none", color: "#000" }}>

                        <Button variant="contained" size="large" className={Nstyles.View_Project_Button}>
                            View Project
                        </Button>
                    </a>
                </div>
            </div>

            <div className={Mstyles.Project_Section}
                id="MProject_Section"

            >
                <Project_Card
                    IsSrolledTo={PageScrolledIn == id ? false : true}
                    key={id}
                    id={id}
                    title={title}
                    content={content}
                    thumbnail={thumbnail}
                    tags={tags}
                />
            </div>

        </div >
    )
}

export default Project_Page;