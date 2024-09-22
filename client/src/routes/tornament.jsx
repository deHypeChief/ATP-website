import Button from "../components/button/button";
import Card from "../components/card/card";
import line from "../libs/images/Line.png";

export default function Tournament(){
    const tags = [
        "Kids Amatuer",
        "Kids Mid-Level",
        "Kids Professional",
        "Men Amatuer",
        "Men Mid-Level",
        "Men Professional",
        "Women Amatuer",
        "Women Mid-Level",
        "Women Professional",

    ]
    return(
        <>
            <section className="hero">
                <div className="heroWrap">
                    <div className="heroSubTop">
                        <div className="rArrow rL">
                            <img src={line} alt="" />
                        </div>
                        <h2>Compete and be among the best</h2>
                        <div className="rArrow rR">
                            <img src={line} alt="" />
                        </div>
                    </div>
                    <h1>Tournaments page</h1>
                    <div className="heroAction">
                        <Button>Get Started</Button>
                        <Button alt>Learn More</Button>
                    </div>
                </div>
            </section>

            <section className="upcomings">
                <div className="upComs">
                    <h1>Upcoming Tournaments</h1>
                    <p>Choose your level and will find a tournament that suits you best</p>
                </div>
                <div className="upActions">
                    {
                        tags.map((item)=>(
                            <div key={item} className="tAc">
                                <Button>{item}</Button>
                            </div>
                        ))
                    }
                </div>
                <div className="spBoxes">
                    <Card/>
                </div>
            </section>

            <section className="upcomings">
                <div className="upComs">
                    <h1>Past Tournaments</h1>
                </div>
                <div className="spBoxes">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="psAction">
                    <Button>Vew Past Tornaments</Button>
                </div>
            </section>
        </>
    )
}