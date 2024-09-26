import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Button from "../../components/button/button";
import logo from "../../libs/images/logoColor.svg"
import "../../libs/styles/userLayout.css"

export default function DashboardLayout() {
    useEffect(() => {
        document.getElementsByTagName("nav")[0].style.display = "none"
        document.getElementsByTagName("footer")[0].style.display = "none"
    }, [])
    return (
        <div className="useNov">
            <div className="dashTopNav">
                <div className="logoTop">
                    <div className="logoc">
                        <img src={logo} alt="" />
                    </div>
                    <h2>Hello, Idoma Prince. 04:43 pm</h2>
                </div>
                <div className="navAction">
                    <Button>Logout</Button>
                </div>
            </div>
            <Outlet />
        </div>
    )
}