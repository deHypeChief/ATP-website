/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Button from "../button/button"
import "./style.css"
import { useNavigate } from "react-router-dom"
import {useAuth} from "../../libs/hooks/use-auth"

import raIcon1 from "../../libs/images/Group 1.svg"
import raIcon2 from "../../libs/images/Vector-1.svg"
import raIcon3 from "../../libs/images/Vector.svg"
import raIcon4 from "../../libs/images/Group.svg"

export default function Card({ altCard, payload, teamCard }) {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    function handleReg(){
        if(isAuthenticated()){
            console.log("pricing page")
        }else{
            navigate("/login")
            console.log("son of a bug")
        }
    }

    return (
        <div className="cardBox">
            <div className="cardImg"></div>
            <div className="cardInfo">
                {
                    teamCard ? (
                        <>hi</>
                    ) : (
                        altCard ? (
                            <>
                                <div className="boxWrap">
                                    <div className="boxIcon"></div>
                                    <p>box contentVV</p>
                                </div>
                                <div className="boxWrap">
                                    <div className="boxIcon"></div>
                                    <p>box content</p>
                                </div>
                                <div className="boxWrap">
                                    <div className="boxIcon"></div>
                                    <p>box content</p>
                                </div>
                                <div className="boxWrap">
                                    <div className="boxIcon"></div>
                                    <p>box content</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="boxWrap">
                                    <div className="boxIcon">
                                        <img src={raIcon1} alt="" />
                                    </div>
                                    <p>box </p>
                                </div>
                                <div className="boxWrap">
                                    <div className="boxIcon">
                                    <img src={raIcon4} alt="" />

                                    </div>
                                    <p>box content</p>
                                </div>
                                <div className="boxWrap">
                                    <div className="boxIcon">
                                    <img src={raIcon3} alt="" />

                                    </div>
                                    <p>box content</p>
                                </div>
                                <div className="boxWrap">
                                    <div className="boxIcon">
                                    <img src={raIcon2} alt="" />

                                    </div>
                                    <p>box content</p>
                                </div>
                            </>
                        )
                    )
                }

                {
                    teamCard ? (
                        <Link to={"/coaching/prosper"}>
                            <Button alt full blue>View Coach Profile</Button>
                        </Link>
                    ) : (
                        altCard ? (
                            <div className="altCard">
                                <Button full blue>Request a Session</Button>
                                <Link to={"/coaching/prosper"}>
                                    <Button alt full blue>View Coach Profile</Button>
                                </Link>
                            </div>
                        ) : (
                            <Button alt full blue onClick={handleReg}>Register Now</Button>
                        )
                    )
                }

            </div >
        </div >
    )
}