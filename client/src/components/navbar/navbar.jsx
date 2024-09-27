import { Link } from "react-router-dom"
import './style.css'
import Button from "../button/button"
import logo from "../../libs/images/logo.svg"
import logo2 from "../../libs/images/logoColor.svg"
import {Icon} from "@iconify/react"

import { useEffect, useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const link = [
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Tournaments",
            link: "/tournaments"
        },
        {
            name: "Coaching",
            link: "/coaching"
        },
        {
            name: "Resources",
            link: "/resources"
        },
        {
            name: "Video Library",
            link: "/videos"
        },
        {
            name: "Contact Us",
            link: "/contact"
        },
    ]

    const [triggered, setTriggered] = useState(false);



    useEffect(() => {
        // Function to check if the current URL includes "/contact"
        const isContactPage = window.location.href.includes("/contact");

        // Set triggered state based on the URL when the component loads
        if (isContactPage) {
            setTriggered(true);
        } else {
            setTriggered(false);
        }

        // Handle scroll event
        const handleScroll = () => {
            if (isContactPage) {
                // If on contact page, always trigger
                setTriggered(true);
            } else {
                // Calculate trigger point based on viewport height (90% of the height)
                const triggerPoint = window.innerHeight * 0.9;
                const scrollPosition = window.scrollY;

                // Set triggered state based on the scroll position
                setTriggered(scrollPosition > triggerPoint);
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav style={{ background: triggered ? "white" : null }}>
            <div className="navbar">
                <Link to={"/"}>
                    <div className="logo">
                        {
                            triggered ? (
                                <img src={logo2} alt="" />
                            ) : (
                                <img src={logo} alt="" />
                            )
                        }
                    </div>
                </Link>
                <div className="navList">
                    {
                        link.map((item) => (
                            <ul key={item}>
                                <Link style={{ color: triggered ? "black" : "white" }} to={item.link}>{item.name}</Link>
                            </ul>
                        ))
                    }
                </div>
                <div className="navAction">
                    <Button>Get Started</Button>
                </div>
                <div className="hamBox" onClick={() => setOpen(!open)}>
                    <Icon icon="gg:menu" width="40px" height="40px" style={{  color: triggered ? "black" : "white" }} />
                </div>
            </div>
            {
                open ? (
                    <div className="hamList">
                        {
                            link.map((item) => (
                                <ul key={item} onClick={() => setOpen(!open)}>
                                    <Link to={item.link}>{item.name}</Link>
                                </ul>
                            ))
                        }
                    </div>
                ) : null
            }
        </nav>
    )
}