import Project4_Background from "../Images/Project4/Background.png"
import Project4_Thumbnail from "../Images/Project4/Thumbnail.jpeg"

import Project4_Cover_Image from "../Images/Project4/Cover.jpeg"

import Project4_Abstract_Image1 from "../Images/Project4/Abstract_Image1.png"
import Project4_Abstract_Image2 from "../Images/Project4/Abstract_Image2.png"
import Project4_Abstract_Image3 from "../Images/Project4/Abstract_Image3.jpg"
import Project4_Abstract_Image4 from "../Images/Project4/Abstract_Image4.jpg"
import Project4_Abstract_Image5 from "../Images/Project4/Abstract_Image5.jpg"
import Project4_Abstract_Image6 from "../Images/Project4/Abstract_Image6.jpg"

import Project4_Gallery_Image1 from "../Images/Project4/Gallery_Image1.png"
import Project4_Gallery_Image2 from "../Images/Project4/Gallery_Image2.png"
import Project4_Gallery_Image3 from "../Images/Project4/Gallery_Image3.png"
import Project4_Gallery_Image4 from "../Images/Project4/Gallery_Image4.png"
import Project4_Gallery_Image5 from "../Images/Project4/Gallery_Image5.png"
import Project4_Gallery_Image6 from "../Images/Project4/Gallery_Image6.png"
import Project4_Gallery_Image7 from "../Images/Project4/Gallery_Image7.png"
import Project4_Gallery_Image8 from "../Images/Project4/Gallery_Image8.png"
import Project4_Gallery_Image9 from "../Images/Project4/Gallery_Image9.png"
import Project4_Gallery_Image10 from "../Images/Project4/Gallery_Image10.png"
import Project4_Gallery_Image11 from "../Images/Project4/Gallery_Image11.png"
import Project4_Gallery_Image12 from "../Images/Project4/Gallery_Image12.png"
import Project4_Gallery_Image13 from "../Images/Project4/Gallery_Image13.png"


import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Fragment } from "react"

export const Project4 = {
    id: "3D_printer",
    title: "3D printer",
    content: (
        <p>
            In this project, I aimed to create a 3D printer from scratch. 3D printer prints 3D object using a nozzle that extrudes molten plastics. The nozzle can move around the build plate. The molten plastics stacks up layer by layer, eventually making a 3D object.
            <br />
            <br />
        </p>
    ),

    thumbnail: Project4_Thumbnail,
    backgroundImage: Project4_Background,
    tags: ["#Fusion360", "#3D_CAD", "#Gcode"],
    detail_of_the_project_url: "https://drive.google.com/file/d/1xKDbGShGN_C7d_90MYdgJG7wQX6Y47YO/view?usp=sharing",
    details_BTN_text: (<div><PictureAsPdfIcon /> Details</div>),
    embed_video: (
        <iframe allowFullScreen src="https://drive.google.com/file/d/1LBtVdpW9HF1oKsMHTWe4BbFNy5seDEOY/preview" width="100%" height="320" allow="autoplay"></iframe>
    ),
    //======================================================================================================
    explaination: "Build a 3D printer with another 3D printer",
    time: "2020",
    about_this_Project: (
        <div>
            <h1>About this project</h1>
            <p> In this project, I aimed to create a 3D printer from scratch. 3D printer prints 3D object using a nozzle that extrudes molten plastics. The nozzle can move around the build plate. The molten plastics stacks up layer by layer, eventually making a 3D object.
                <br />
                <br />
                Details: <a target="_blank" href="https://drive.google.com/file/d/1xKDbGShGN_C7d_90MYdgJG7wQX6Y47YO/view?usp=sharing">https://drive.google.com/file/d/1xKDbGShGN_C7d_90MYdgJG7wQX6Y47YO</a>
                <br />
            </p>
        </div>
    ),
    abstract: (
        <div>
        </div>
    ),

    Cover: Project4_Cover_Image,
    Abstract_Images: [Project4_Abstract_Image1, Project4_Abstract_Image2, Project4_Abstract_Image3, Project4_Abstract_Image4],
    Gallery_Images: [Project4_Gallery_Image1, Project4_Gallery_Image2, Project4_Gallery_Image3, Project4_Gallery_Image4, Project4_Gallery_Image5, Project4_Gallery_Image6, Project4_Gallery_Image7, Project4_Gallery_Image8, Project4_Gallery_Image9, Project4_Gallery_Image10, Project4_Gallery_Image11, Project4_Gallery_Image12, Project4_Gallery_Image13]
}

export default { Project4 };