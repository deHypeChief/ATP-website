import Button from "../button/button"
import "./style.css"

export default function Card() {
    return (
        <div className="cardBox">
            <div className="cardImg"></div>
            <div className="cardInfo">
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
                <div className="boxWrap">
                    <div className="boxIcon"></div>
                    <p>box content</p>
                </div>

                <Button alt full blue>Register Now</Button>
            </div>
        </div>
    )
}