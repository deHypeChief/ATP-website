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
            link: "#"
        },
        {
            name: "Video Library",
            link: "#"
        },
        {
            name: "Contact Us",
            link: "#"
        },
    ]

    return (
        <nav>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
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