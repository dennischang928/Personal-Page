import { Fragment } from "react"
import GitHubIcon from '@mui/icons-material/GitHub';


import Project1_Background from "../Images/Project1/Background.jpeg"
import Project1_Thumbnail from "../Images/Project1/Thumbnail.png"

import Project1_Cover_Image from "../Images/Project1/Cover.png"

import Project1_Abstract_Image1 from "../Images/Project1/Abstract_Image1.jpg"
import Project1_Abstract_Image2 from "../Images/Project1/Abstract_Image2.png"
import Project1_Abstract_Image3 from "../Images/Project1/Abstract_Image3.png"
import Project1_Abstract_Image4 from "../Images/Project1/Abstract_Image4.png"
import Project1_Abstract_Image5 from "../Images/Project1/Abstract_Image5.png"


import Project1_Gallery_Image1 from "../Images/Project1/Gallery_Image1.png"
import Project1_Gallery_Image2 from "../Images/Project1/Gallery_Image2.jpeg"
import Project1_Gallery_Image3 from "../Images/Project1/Gallery_Image3.svg"
import Project1_Gallery_Image4 from "../Images/Project1/Gallery_Image4.jpg"
import Project1_Gallery_Image5 from "../Images/Project1/Gallery_Image5.jpeg"
import Project1_Gallery_Image6 from "../Images/Project1/Gallery_Image6.svg"
import Project1_Gallery_Image7 from "../Images/Project1/Gallery_Image7.png"
import Project1_Gallery_Image8 from "../Images/Project1/Gallery_Image8.png"




export const Project1 = {
    id: "Rubik's_Cube_Solver",
    title: "Rubik’s Cube Solver",
    content: (
        <p style={{ color: "black" }}>
            In recent years, Computer Vision becomes more popular. Computer Vision has a lot of applications, such as object detection, event detection, video tracking, and color recognition. To familiarize myself in the field, I decide to develop a robot that solves a Rubik’s Cube using Computer Vision.
            <br />
            <br />
            The goal is to fully solve a Rubik’s cube by twisting it using clamps attached to stepper and Servo motors. We will use a camera to capture each face of the cube. A computer will then be used, using the computer vision algorithm, to process these images and find out the color of the 9 stickers in each face. Once the color states of the cube are determined, the computer can then compute the sequence of moves that fully solve the cube.
        </p>
    ),
    thumbnail: Project1_Thumbnail,
    backgroundImage: Project1_Background,
    tags: ["#Rubik's_Cube", "#Fusion_360", "#Computer_Vision", "#C++", "#Eagle_PCB_design", "#3D-printing", "#thistlethwaite's_algorithm", "#Servo_Motor", "#Stepper_Motor"],
    detail_of_the_project_url: "https://hackaday.io/project/182511-rubiks-cube-solving-robot",
    details_BTN_text: (<div>Details <br />(Hackaday)</div>),
    embed_video: (
        <iframe allowFullScreen src="https://drive.google.com/file/d/1LBtVdpW9HF1oKsMHTWe4BbFNy5seDEOY/preview" width="100%" height="320" allow="autoplay"></iframe>
    ),
    //======================================================================================================

    explaination: "Creating a cube solving robot from scratch",
    time: "2020",
    about_this_Project: (
        <div>
            <h1>About this project</h1>
            <p> In this project, I developed a Rubik’s Cube-solving robot using a Computer Vision algorithm from scratch. The robot has 4 stepper motors and 4 servo motors as actuators. A camera is included to observe each color arrangement of the face of the Cube in a scrambled state sequentially. The image that the camera observed will be sent through a serial interface to the computer. I implement a solving algorithm that will take the Cube state as input and the sequence of moves that solve the Cube as an output. The sequence of moves is sent to the MCU and is then translated into a series of instructions. The stepper motors and the servo motors then work together to twist the Cube according to the instructions, fully solving the Cube.
                <br />
                <br />
                Details (Hackaday): <a target="_blank" href="https://hackaday.io/project/182511-rubiks-cube-solving-robot">https://hackaday.io/project/182511-rubiks-cube-solving-robot</a>
                <br />
                Project Github Page: <a target="_blank" href="https://github.com/dennischang928/Rubik-s-Cube-Solving-Robot">https://github.com/dennischang928/Rubik-s-Cube-Solving-Robot</a>
            </p>
        </div>
    ),
    abstract: (
        <div>
            <h1>Abstract</h1>
            <p>
                I design the robot using Fusion 360 and Eagle. This robot consists of 4 stepper and Servo motors, 4 pairs of 3d-printed clamp and frames, a camera, and a PCB board with a microcontroller and 4 stepper motor drivers.
                <br />
                <br />
                To know the initial state of the Cube, I use a camera to capture the color of the Cube. Since the camera can only capture a single face of the Cube each time, the robot needs to rotate the Cube for the camera to capture all the faces of the cube. After capturing, the camera is going to send those images to the computer through a USB port.
                <br />
                <br />
                The computer will then detect the position and orientation of each face from all 6 images. By using these information, the computer can find out the position and area of each sticker of the Cube in those images. The computer can now extract the color of each sticker, and determine the color of each sticker using computer vision.
                <br />
                <br />
                Once the initial state of the Cube is found, the computer solves the Cube using Thistlethwaite's algorithm. The solution, the sequence of moves represented in Rubik's Cube Notation, will then be sent from the computer to the microcontroller. Afterwards, the microcontroller translates these notations into a series of stepper and Servo motors movements that twist the Cube and fully solve the Cube.
            </p>
        </div>
    ),

    Cover: Project1_Cover_Image,
    Abstract_Images: [Project1_Abstract_Image1, Project1_Abstract_Image2, Project1_Abstract_Image3, Project1_Abstract_Image5, Project1_Abstract_Image4],
    Gallery_Images: [Project1_Gallery_Image1, Project1_Gallery_Image2, Project1_Gallery_Image8, Project1_Gallery_Image3, Project1_Gallery_Image4, Project1_Gallery_Image5, Project1_Gallery_Image6, Project1_Gallery_Image7]
}

export default { Project1 }