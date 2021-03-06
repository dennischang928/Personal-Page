import React from "react";

import styles from "./Detailed_Project_Page.module.css";

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Button from '@mui/material/Button';

const Detailed_Project_Page = ({ Cover_Image,
    title,
    explaination, tags,
    detail_of_the_project_url,
    details_BTN_text,
    time,
    Abstract_Images,
    embed_video,
    about_this_Project,
    abstract,
    Gallery_Images }) => {

    const Display_Cover_Image = <img loading="lazy" loading="lazy" src={Cover_Image} alt="" />

    const Display_Abstract_Images = Abstract_Images.map((e, index) => {
        return <img loading="lazy" className={styles.Display_Abstract_Images} src={e} alt="" key={index} />
    })

    return (
        <div className={styles.container}>
            <div className={styles.Ncontainer}>
                <div className={styles.Cover_Section}>
                    {Display_Cover_Image}
                    <div className={styles.Cover_Description}>
                        <div className={styles.left}>
                            <h1>{title}</h1>
                            <p>{explaination}</p>
                            <div className={styles.Tag_Section}>
                                <ul>
                                    {tags.map((e) => { return (<li>{e}</li>) })}
                                </ul>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <Button className={styles.details_BTN} variant="contained" onClick={() => {
                                window.open(detail_of_the_project_url, '_blank');
                            }}>
                                {details_BTN_text}
                            </Button>
                            <p>Created in {time}<br />By Dennis Chang</p>
                        </div>
                    </div>
                </div>
                <div className={styles.Description_Section}>
                    <div className={styles.Description}>
                        {about_this_Project}
                    </div>
                    <div className={styles.Abstraction}>
                        <div className={styles.AbstractImages}>
                            {embed_video}
                            {Display_Abstract_Images}
                        </div>
                        <div className={styles.Abstract_Content}>
                            {abstract}
                        </div>
                    </div>
                </div>

                <div className={styles.photo_section}>
                    <div className={styles.photos}>
                        <ImageList variant="masonry" cols={3} gap={12}>
                            {Gallery_Images.map((e, index) => (
                                <ImageListItem key={index} cols={2}>
                                    <img loading="lazy" src={e} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>
            </div>

            <div className={styles.Mcontainer}>
                <div className={styles.Cover_Section}>
                    {Display_Cover_Image}
                    <div className={styles.Cover_Description}>

                        <h1>{title}</h1>
                        <p>{explaination}</p>
                        <div className={styles.Tag_Section}>
                            <ul>
                                {tags.map((e) => { return (<li>{e}</li>) })}
                            </ul>
                        </div>
                        <Button className={styles.details_BTN} variant="contained" size="small" onClick={() => {
                            window.open(detail_of_the_project_url, '_blank');
                        }}>
                            {details_BTN_text}
                        </Button>
                        <p className={styles.CreatedTime}>Created in {time}<br />By Dennis Chang</p>
                    </div>

                </div>
                <div className={styles.Description_Section}>
                    <div className={styles.Description}>
                        {about_this_Project}
                    </div>
                    <div className={styles.Abstraction}>
                        <div className={styles.AbstractImages}>
                            {embed_video}
                            {Display_Abstract_Images}
                        </div>
                        <div className={styles.Abstract_Content}>
                            {abstract}
                        </div>
                    </div>
                </div>

                <div className={styles.photo_section}>
                    <div className={styles.photos}>
                        <ImageList variant="masonry" cols={2} gap={12}>
                            {Gallery_Images.map((e, index) => (
                                <ImageListItem key={index} cols={2}>
                                    <img loading="lazy" src={e} />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Detailed_Project_Page;