import React, { useEffect, useRef, useState } from "react"
import { Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./Scroll_to_top";
import { useInView } from 'react-hook-inview'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


import Introduction_Page from "./Introduction-Page/Introduction-Page"
import Nav from "./Nav/Nav"
import AboutMe_Page from "./AboutMe-Page/AboutMe-Page"
import NavBar from "./NavBar/NavBar"
import Project_Page from "./Project-Page/Project-Page"
import Contact from "./Contact/Contact"

import Detailed_Project_Page from "./Detailed-Project-Page/Detailed_Project_Page"
import { Project_Page_Items } from "./Projects.js"

const App = () => {
    const Introduction_PageRef = useRef(null);
    const AboutMe_PageRef = useRef(null);
    const Project_PageRef = useRef(null);
    const ContactRef = useRef(null);

    const [IsList_Opened, setIsList_Opened] = useState(false);

    const scrollTo_Introduction_PageRef = () => {
        try {
            Introduction_PageRef.current.scrollIntoView()
        } catch (e) {
            window.location.href = "./";
        }
    }

    const scrollTo_AboutMe_PageRef = () => {
        try {
            AboutMe_PageRef.current.scrollIntoView()
        } catch (e) {
            window.location.href = "./";
        }
    }

    const scrollTo_Project_PageRef = () => {
        try {
            Project_PageRef.current.scrollIntoView()
        } catch (e) {
            window.location.href = "./";
        }
    }


    const scrollTo_ContactRef = () => {
        try {
            ContactRef.current.scrollIntoView()
        } catch (e) {
            window.location.href = "./";
        }
    }


    // useEffect(() => {
    //     if (IsList_Opened) {
    //         disableBodyScroll(Project_PageRef.current)
    //     }
    //     else {
    //         enableBodyScroll(Project_PageRef.current)
    //     }
    // }, [IsList_Opened])


    const Display_Project_Pages = Project_Page_Items.map((e, index, array) => {
        return (
            <Project_Page
                id={e.id}
                title={e.title}
                content={e.content}
                thumbnail={e.thumbnail}
                backgroundImage={e.backgroundImage}
                tags={e.tags}
                isView_all_BTN_Visible={false}
            />
        )
    })


    const Home_Page =
        (
            <Route path="/" element={
                <div >
                    <Nav isVisible={true}
                        onIntroduction_Page_Click={scrollTo_Introduction_PageRef}
                        onAboutMe_Page_Click={scrollTo_AboutMe_PageRef}
                        onProject_Page_Click={scrollTo_Project_PageRef}
                        onContact_Click={scrollTo_ContactRef} />
                    <div ref={Introduction_PageRef}>
                        <Introduction_Page />
                    </div>
                    <div ref={AboutMe_PageRef}>
                        <AboutMe_Page />
                    </div>
                    <div ref={Project_PageRef}>
                        <NavBar
                            title="Projects"
                            onIntroduction_Page_Click={scrollTo_Introduction_PageRef}
                            onAboutMe_Page_Click={scrollTo_AboutMe_PageRef}
                            onProject_Page_Click={scrollTo_Project_PageRef}
                            onContact_Click={scrollTo_ContactRef}
                            IsList_Opened={IsList_Opened}
                            setIsList_Opened={(e) => {
                                setIsList_Opened(e);
                                scrollTo_Project_PageRef();
                            }}
                        />

                        {Display_Project_Pages}
                    </div>
                    <div ref={ContactRef}>
                        <Contact />
                    </div>
                </div >
            } />
        )


    const AllProjects_Detail_Pages = Project_Page_Items.map((e, index, array) => {
        return (
            <Route key={e.id} path={`/${e.id}`} element={

                <div>
                    <NavBar
                        title={e.title}
                        onIntroduction_Page_Click={scrollTo_Introduction_PageRef}
                        onAboutMe_Page_Click={scrollTo_AboutMe_PageRef}
                        onProject_Page_Click={scrollTo_Project_PageRef}
                        onContact_Click={scrollTo_ContactRef}
                        setIsList_Opened={() => {
                            setIsList_Opened(!IsList_Opened);
                        }}
                        IsList_Opened={IsList_Opened}
                    />
                    <Detailed_Project_Page
                        title={e.title}
                        explaination={e.explaination}
                        tags={e.tags}
                        detail_of_the_project_url={e.detail_of_the_project_url}
                        details_BTN_text={e.details_BTN_text}
                        time={e.time}
                        about_this_Project={e.about_this_Project}
                        abstract={e.abstract}
                        embed_video={e.embed_video}
                        Cover_Image={e.Cover}
                        Abstract_Images={e.Abstract_Images}
                        Gallery_Images={e.Gallery_Images}

                    />
                    <Contact />
                </div>
            }
            />
        )
    })

    return (
        <Routes>
            {Home_Page}
            {AllProjects_Detail_Pages}
        </Routes>
    )
}
export default App