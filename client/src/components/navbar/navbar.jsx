import { Link } from "react-router-dom"
import './style.css'
import Button from "../button/button"
import logo from "../../libs/images/logo.svg"

export default function Navbar() {
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

    return (
        <nav>
            <div className="navbar">
                <Link to={"/"}>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <div className="navList">
                    {
                        link.map((item) => (
                            <ul key={item}>
                                <Link to={item.link}>{item.name}</Link>
                            </ul>
                        ))
                    }
                </div>
                <div className="navAction">
                    <Button>Get Started</Button>
                </div>
            </div>
        </nav>
    )
}