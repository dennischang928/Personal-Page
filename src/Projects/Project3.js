import Project3_Background from "../Images/Project3/Background.jpg"
import Project3_Thumbnail from "../Images/Project3/Thumbnail.png"

import Project3_Cover_Image from "../Images/Project3/Cover.png"

import Project3_Abstract_Image1 from "../Images/Project3/Abstract_Image1.png"
import Project3_Abstract_Image2 from "../Images/Project3/Abstract_Image2.png"
import Project3_Abstract_Image3 from "../Images/Project3/Abstract_Image3.png"
import Project3_Abstract_Image4 from "../Images/Project3/Abstract_Image4.png"

import Project3_Gallery_Image1 from "../Images/Project3/Gallery_Image1.png"
import Project3_Gallery_Image2 from "../Images/Project3/Gallery_Image2.png"
import Project3_Gallery_Image3 from "../Images/Project3/Gallery_Image3.png"
import Project3_Gallery_Image4 from "../Images/Project3/Gallery_Image4.png"
import Project3_Gallery_Image5 from "../Images/Project3/Gallery_Image5.png"
import Project3_Gallery_Image6 from "../Images/Project3/Gallery_Image6.png"
import Project3_Gallery_Image7 from "../Images/Project3/Gallery_Image7.png"
import Project3_Gallery_Image8 from "../Images/Project3/Gallery_Image8.png"
import Project3_Gallery_Image9 from "../Images/Project3/Gallery_Image9.png"
import Project3_Gallery_Image10 from "../Images/Project3/Gallery_Image10.png"
import Project3_Gallery_Image11 from "../Images/Project3/Gallery_Image11.png"


import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Fragment } from "react"

export const Project3 = {
    id: "Handy_Map",
    title: "Handy Map",
    content: (
        <p>
            Handy Map is an online map service which is a platform for map users to interact with others.
            Map users can share the detailed information about a place they visited, such as restaurants, shops,
            or attractions and everyone can leave their thoughts on these places.
            <br />
            <br />
            Moreover, users could roughly know about the place by reading the opinions and the information given by other users. All of these
            will enhance the spread of information and increase the accuracy of the map.
        </p>
    ),

    thumbnail: Project3_Thumbnail,
    backgroundImage: Project3_Background,
    tags: ["#Mobile-First", "#Node", "#ReactJS", "#Mongodb", "#Mongoose", "#API-Server", "#ExpressJS"],
    detail_of_the_project_url: "https://drive.google.com/file/d/1go-knV-2mzf3E9JWEKV9b18wUE6XKLUa/view?usp=sharing",
    details_BTN_text: (<div><PictureAsPdfIcon /> Details</div>),
    embed_video: (
        <Fragment />
    ),
    //======================================================================================================
    explaination: "A online map service that allow users to share reviews and descriptions.",
    time: "2022",
    about_this_Project: (
        <div>
            <h1>About this project</h1>
            <p>In this project, we aim to create a platform for people to mark and share information about a specific location on a map. People can drop a Pin on the map with description and images of the place they visited. Once the Pin is created, the Pin can be seen on our website by everyone, who can then post their opinion of the place under each Pin using the “comment” feature.
                <br />
                <br />
                Details: <a target="_blank" href="https://drive.google.com/file/d/1go-knV-2mzf3E9JWEKV9b18wUE6XKLUa/view?usp=sharing">https://drive.google.com/file/d/1go-knV-2mzf3E9JWEKV9b18wUE6XKLUa</a>
                <br />
            </p>
        </div>
    ),
    abstract: (
        <div>
            <h1>Introduction</h1>
            <p>
                Map, a visual representation of an entire area or a part of an area, is to illustrate the detail of a particular area and give the relationships between a place and another. Maps attempt to represent various things, like political boundaries, physical features, roads, and populations. Back in the 70s, when mobile phones and computers were not popular, most maps were printed on paper. Back then, maps were mostly used to find the best route to travel from a particular place to another. Nowadays, maps can be interactive and dynamic. Therefore, maps can provide more information than before. People now use maps on mobile devices. This new form of map is called a dynamic map. Since the appearance of dynamic maps, maps have become more convenient and useful than before.
                <br />
                <br />
                However, we found that most available dynamic map services provide an outdated map, which means that the map services cannot provide the latest information and details of a particular place to the users. These map services do not have a platform for the map users to interact and share information with each other. Moreover, these map services lack features for users to update information on the map. All of these drawbacks will slow down the spread of information and decrease the accuracy of information.
                <br />
                <br />
                To address the above limitations of modern map services, we decided to create an online map service which is a platform for map users to interact with others. Map users can share the detailed information about a place they visited, such as restaurants, shops, or attractions and everyone can leave their thoughts on these places. Moreover, users could roughly know about the place by reading the opinions and the information given by other users. All of these will enhance the spread of information and increase the accuracy of the map.
            </p>
        </div>
    ),

    Cover: Project3_Cover_Image,
    Abstract_Images: [Project3_Abstract_Image1, Project3_Abstract_Image2, Project3_Abstract_Image3, Project3_Abstract_Image4],
    Gallery_Images: [Project3_Gallery_Image1, Project3_Gallery_Image2, Project3_Gallery_Image3, Project3_Gallery_Image4, Project3_Gallery_Image5, Project3_Gallery_Image6, Project3_Gallery_Image7, Project3_Gallery_Image8, Project3_Gallery_Image9, Project3_Gallery_Image10, Project3_Gallery_Image11]
}

export default { Project3 };