/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Button from "../button/button"
import "./style.css"

export default function Card({ altCard, payload }) {

    return (
        <div className="cardBox">
            <div className="cardImg"></div>
            <div className="cardInfo">
                {
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
                                <div className="boxIcon"></div>
                                <p>box </p>
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
                    )
                }

                {
                    altCard ? (
                        <div className="altCard">
                            <Button full blue>Request a Session</Button>
                            <Link to={"/coaching/prosper"}>
                                <Button alt full blue>View Coach Profile</Button>
                            </Link>
                        </div>
                    ) : (
                        <Button alt full blue>Register Now</Button>
                    )
                }

            </div>
        </div>
    )
}