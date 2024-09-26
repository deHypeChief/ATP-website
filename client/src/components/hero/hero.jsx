import Button from "../button/button";
import "./style.css"
import line from "../../libs/images/Line.png"

export default function Hero({ title, subTitle, text, noAction, altText }) {
    return (
        <section className="hero">
            <div className="heroWrap">
                {
                    !subTitle ? null : (
                        <div className="heroSubTop">
                            <div className="rArrow rL">
                                <img src={line} alt="" />
                            </div>
                            <h2>{subTitle}</h2>
                            <div className="rArrow rR">
                                <img src={line} alt="" />
                            </div>
                        </div>
                    )
                }
                <h1>{title}</h1>
                {
                    text ? (
                        <p>{text}</p>
                    ) : null
                }
                {
                    noAction ? null : (
                        <div className="heroAction">
                            <Button>Get Started</Button>
                            <Button alt>{altText ? altText : "Learn More"}</Button>
                        </div>
                    )
                }
            </div>
        </section>
    )
}