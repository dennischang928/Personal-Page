import React from "react";
import Nstyles from "./NProject-Page.module.css";
import Mstyles from "./MProject-Page.module.css";
import "./API.css"
import Button from '@mui/material/Button';

import Project_Card from "./Project_Card";

const Project_Page = ({ id, title, content, thumbnail, backgroundImage, tags, }) => {

    return (
        <div className="Project_Page_container" style={{
            backgroundImage: `url(${backgroundImage})`,
        }}>
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