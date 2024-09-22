import { Link } from "react-router-dom"
import './style.css'
import Button from "../button/button"
import logo from "../../libs/images/logo.svg"

export default function Navbar() {
    const link = [
        {
            name: "About",
            link: "#"
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
            name: "Video Library",
            link: "/videos"
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
                    <ul>
                        <a href="#us">Contact Us</a>
                    </ul>
                </div>
                <div className="navAction">
                    <Button>Get Started</Button>
                </div>
            </div>
        </nav>
    )
}