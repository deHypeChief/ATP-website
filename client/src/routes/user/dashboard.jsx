import Button from "../../components/button/button"
import "../../libs/styles/dashboard.css"
export default function Dashboard() {
    return (
        <section className="borderWrap">
            <div className="profile">
                <div className="topAct">
                    <div className="actL">
                        <h2>Profile Overview</h2>
                        <div className="actProf"></div>
                        <h2 className="spec">Hello, Idoma Prince.</h2>
                    </div>
                    <div className="actR">
                        <Button>Edit Profile</Button>
                    </div>
                </div>

                <div className="infoList">
                    <div className="infoMo">
                        <p className="nHead">Info NAme</p>
                        <p>A Longer Name</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Info NAme</p>
                        <p>A Longer Name</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Info NAme</p>
                        <p>A Longer Name</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Info NAme</p>
                        <p>A Longer Name</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Info NAme</p>
                        <p>A Longer Name</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Info NAme</p>
                        <p>A Longer Name</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Info NAme</p>
                        <p>A Longer Name</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Info NAme</p>
                        <p>A Longer Name</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Info NAme</p>
                        <p>A Longer Name</p>
                    </div>
                </div>
            </div>
            <div className="track">
                <h2>Progress Tracker</h2>
                <div className="trackBox"></div>
                <div className="sopts">
                    <div className="spbox">
                        <div className="spM"></div>
                        <p>Matches Played</p>
                    </div>
                    <div className="spbox">
                        <div className="spM"></div>
                        <p>Matches Played</p>
                    </div>
                </div>
            </div>
            
            <div className="cals">
                <h2>Upcoming Tournament</h2>
                <div className="calBox">

                </div>
                <div className="torns">
                    <div className="bonBox">
                        <div className="bonVor">
                            <div className="bonboxN"></div>
                            <p>Kiddies Tennis Competition</p>
                        </div>
                        <div className="bonVor">
                            <div className="bonboxN"></div>
                            <p>Kiddies Tennis Competition</p>
                        </div>
                        <div className="bonVor">
                            <div className="bonboxN"></div>
                            <p>Kiddies Tennis Competition</p>
                        </div>
                        <div className="bonVor">
                            <div className="bonboxN"></div>
                            <p>Kiddies Tennis Competition</p>
                        </div>

                        <div className="comAction">
                            <Button full alt blue>Register Now</Button>
                        </div>
                    </div>

                    <div className="bonBox">
                        <div className="bonVor">
                            <div className="bonboxN"></div>
                            <p>Kiddies Tennis Competition</p>
                        </div>
                        <div className="bonVor">
                            <div className="bonboxN"></div>
                            <p>Kiddies Tennis Competition</p>
                        </div>
                        <div className="bonVor">
                            <div className="bonboxN"></div>
                            <p>Kiddies Tennis Competition</p>
                        </div>
                        <div className="bonVor">
                            <div className="bonboxN"></div>
                            <p>Kiddies Tennis Competition</p>
                        </div>

                        <div className="comAction">
                            <Button full alt blue>Register Now</Button>
                        </div>
                    </div>
                    
                </div>
                <div className="calsAction">
                    <Button >See all tournaments</Button>
                </div>
            </div>

            <div className="notify">
                <div className="topNo">
                    <h2>Notifications</h2>
                    <p>See All</p>
                </div>
                <div className="notiList">
                    <div className="notiBox">
                        <p>
                            You have been successfully upgraded to the VIP plan for ATP. Check your email to get more details
                        </p>
                        <div className="comP">
                            <p className="notiBo">Monday 15th, 2024. 04:43pm</p>
                            <p className="notiBo">3hrs ago</p>
                        </div>
                    </div>
                    <div className="notiBox">
                        <p>
                            You have been successfully upgraded to the VIP plan for ATP. Check your email to get more details
                        </p>
                        <div className="comP">
                            <p className="notiBo">Monday 15th, 2024. 04:43pm</p>
                            <p className="notiBo">3hrs ago</p>
                        </div>
                    </div>
                    <div className="notiBox">
                        <p>
                            You have been successfully upgraded to the VIP plan for ATP. Check your email to get more details
                        </p>
                        <div className="comP">
                            <p className="notiBo">Monday 15th, 2024. 04:43pm</p>
                            <p className="notiBo">3hrs ago</p>
                        </div>
                    </div>
                    <div className="notiBox">
                        <p>
                            You have been successfully upgraded to the VIP plan for ATP. Check your email to get more details
                        </p>
                        <div className="comP">
                            <p className="notiBo">Monday 15th, 2024. 04:43pm</p>
                            <p className="notiBo">3hrs ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}