
import Button from "../components/button/button"
import "../libs/styles/contact.css"
export default function ContactUs() {
    return (
        <>
            <section className="contact">
                <div className="contatSec">
                    <div className="chatHeader">
                        <h1>Chat to our team</h1>
                        <p>Need help with something? Get in touch with our friendly team and we’ll get back to you withing 24 hours</p>
                    </div>
                    <form>
                        <div className="formWrap">
                            <input type="text" placeholder="First Name"/>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                        <div className="formWrap">
                            <input type="text" placeholder="Phone Number"/>
                            <input type="text" placeholder="Email Address"/>
                        </div>
                        <textarea name="" id="" placeholder="Message"></textarea>

                        <div className="formAction">
                            <div className="actionButton activeFo">
                                <div className="actIcon">

                                </div>
                                <div className="actionText">
                                    <p className="boldForm">I want to play Tennis</p>
                                    <p>I am a professional or amateur tennis player</p>
                                </div>
                            </div>

                            <div className="actionButton">
                                <div className="actIcon">

                                </div>
                                <div className="actionText">
                                    <p className="boldForm">I want to teach Tennis</p>
                                    <p>I am a professional tennis tutor</p>
                                </div>
                            </div>
                        </div>

                        <Button>Send Message</Button>
                    </form>

                </div>
                <div className="contactImg">

                </div>
            </section>
        </>
    )
}