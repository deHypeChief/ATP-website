import Button from "../button/button";
import "./style.css"
import line from "../../libs/images/Line.png"

export default function Hero({title, subTitle}) {
    return (
        <section className="hero">
            <div className="heroWrap">
                <div className="heroSubTop">
                    <div className="rArrow rL">
                        <img src={line} alt="" />
                    </div>
                    <h2>{subTitle}</h2>
                    <div className="rArrow rR">
                        <img src={line} alt="" />
                    </div>
                </div>
                <h1>{title}</h1>
                <div className="heroAction">
                    <Button>Get Started</Button>
                    <Button alt>Learn More</Button>
                </div>
            </div>
        </section>
    )
}