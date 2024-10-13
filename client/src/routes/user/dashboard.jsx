import Button from "../../components/button/button";
import { useAuth } from "../../libs/hooks/use-auth";
import "../../libs/styles/dashboard.css";

import raIcon1 from "../../libs/images/Group 1.svg";
import raIcon2 from "../../libs/images/Vector-1.svg";
import raIcon3 from "../../libs/images/Vector.svg";
import raIcon4 from "../../libs/images/Group.svg";

import { useQuery } from "@tanstack/react-query";
import { getTour } from "../../libs/api/api.endpoints";
import { useEffect } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function Dashboard() {
    const { user } = useAuth();
    const [tourPayload, setTourPayload] = useState({
        name: "",
        amount: ""
    })

    // Fetch the tournaments data using React Query
    const { data, isFetched } = useQuery({
        queryKey: ["tourData"],
        queryFn: () => getTour(),
    });

    useEffect(() => {
        if (isFetched) {
            console.log(data); // Logs data when it's fetched
        }
    }, [data, isFetched]);

    function tourConfig(tourPayload) {
        return {
            public_key: "FLWPUBK_TEST-e7c8f332b9d34b01b958cf4f4f643018-X",
            tx_ref: Date.now(),
            amount: tourPayload.amount,
            currency: "NGN",
            payment_options: "card",
            customer: {
                email: user()?.email,
                phone_number: user()?.phoneNumber,
                name: user()?.fullName,
            },
            customizations: {
                title: tourPayload.name,
                description: "Payment for tournament",
                logo: "",
            },
        }
    }

    const handleFlutterPayment = useFlutterwave(tourConfig());

    return (
        <section className="borderWrap">
            <div className="profile">
                <div className="topAct">
                    <div className="actL">
                        <h2>Profile Overview</h2>
                        <div className="actProf"></div>
                        <h2 className="spec">Hello, {user()?.fullName}.</h2>
                    </div>
                    <div className="actR">
                        <Button>Edit Profile</Button>
                    </div>
                </div>

                <div className="infoList">
                    <div className="infoMo">
                        <p className="nHead">Name</p>
                        <p>{user()?.fullName}</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Matches Played</p>
                        <p>0</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Membership</p>
                        <p>{user()?.membership === "" ? "Free" : user().membership}</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Phone</p>
                        <p>{user()?.phoneNumber}</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Matches Won</p>
                        <p>0</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Current Skill Level</p>
                        <p>{user()?.level}</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Email</p>
                        <p>{user()?.email}</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Medals Won</p>
                        <p>0</p>
                    </div>
                    <div className="infoMo">
                        <p className="nHead">Previous Skill Level</p>
                        <p>--</p>
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
                        <div className="spM spMa"></div>
                        <p>Matches Played</p>
                    </div>
                </div>
            </div>

            <div className="cals">
                <h2>Upcoming Tournament</h2>
                <div className="calBox"></div>
                <div className="torns">
                    {/* Conditionally render tournaments */}
                    {data?.length > 0 ? (
                        data.map((item, index) => (
                            <div className="bonBox" key={"tour" + index}>
                                <div className="bonVor">
                                    <div className="bonboxN">
                                        <img src={raIcon1} alt="" />
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                                {/* Placeholder for additional data */}
                                <div className="bonVor">
                                    <div className="bonboxN">
                                        <img src={raIcon4} alt="" />
                                    </div>
                                    <p>{item.name} </p>
                                </div>
                                <div className="bonVor">
                                    <div className="bonboxN">
                                        <img src={raIcon3} alt="" />
                                    </div>
                                    <p>{item.location}</p>
                                </div>
                                <div className="bonVor">
                                    <div className="bonboxN">
                                        <img src={raIcon2} alt="" />
                                    </div>
                                    <p>{item.date.split("T")[0]}</p>
                                </div>

                                <div className="comAction">
                                    <Button full alt blue>
                                        Register Now
                                    </Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No tournaments available</p>
                    )}
                </div>
                <div className="calsAction">
                    <Button>See all tournaments</Button>
                </div>
            </div>

            <div className="notify">
                <div className="topNo">
                    <h2>Notifications</h2>
                    <p>See All</p>
                </div>
                <div className="notiList">
                    {/* Notification example */}
                    <div className="notiBox">
                        <p>
                            You a have been successfully upgraded to the VIP plan for ATP. Check
                            your email to get more details
                        </p>
                        <div className="comP">
                            <p className="notiBo">Monday 15th, 2024. 04:43pm</p>
                            <p className="notiBo">3hrs ago</p>
                        </div>
                    </div>
                    {/* Duplicate notifications */}
                </div>
            </div>
        </section>
    );
}



export function actionOverflow(type, payload){
    return(
        <div className="overlayPage">
            {
                type == "payment" ? 

                : null
            }
        </div>
    )
}

export function tourPayPage(){
    return(
        
    )
}