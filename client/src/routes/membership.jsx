import { useEffect, useRef, useState } from "react";
import Button from "../components/button/button";
import Hero from "../components/hero/hero";
import '../libs/styles/membership.css'
import Card from "../components/card/card";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export function MemBox({ data = [], coachData = [1, 2, 3, 4] }) {
    const navigate = useNavigate()
    const plansBox = useRef();
    const pickCoach = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [planId, setPlanId] = useState({
        planId: data[0]?._id || null,
        coachId: ""
    });
    const [actCoach, setActCoach] = useState(false);
    const [slidesToMove, setSlidesToMove] = useState(3); // Default move 3 slides on desktop

    useEffect(() => {
        if (data.length > 0) {
            // Set the first plan by default
            setPlanId(prev => ({ ...prev, planId: data[0]._id }));
        }
    }, [data]);

    // Function to handle screen resize
    useEffect(() => {
        const updateSlidesToMove = () => {
            if (window.innerWidth <= 768) {
                setSlidesToMove(1); // Mobile: move 1 slide at a time
            } else {
                setSlidesToMove(3); // Desktop: move 3 slides at a time
            }
        };

        // Run on mount
        updateSlidesToMove();

        // Add event listener for screen resize
        window.addEventListener('resize', updateSlidesToMove);

        // Clean up event listener
        return () => window.removeEventListener('resize', updateSlidesToMove);
    }, []);

    const handleNext = () => {
        if (currentSlide < coachData.length - slidesToMove) {
            setCurrentSlide(currentSlide + slidesToMove);
        } else {
            setCurrentSlide(coachData.length - 1); // Don't go past the last slide
        }
    };

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - slidesToMove);
        } else {
            setCurrentSlide(0); // Don't go before the first slide
        }
    };

    const scrollToSlide = (index) => {
        const slide = pickCoach.current.children[index];
        slide?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    };

    useEffect(() => {
        if (pickCoach.current) { // Ensure the ref exists
            pickCoach.current.style.gridTemplateColumns = `repeat(${coachData?.length}, 350px)`;
            scrollToSlide(currentSlide);
        }
    }, [coachData?.length, currentSlide]);


    function handleSelection(e, planId) {
        const selectedBox = e.currentTarget;

        // Remove the class from all children
        [...plansBox.current.children].forEach(item => {
            item.classList.remove("mem-selected");
        });

        // Add class to the selected element
        selectedBox.classList.add("mem-selected");

        // Update the selected plan ID
        setPlanId(prev => ({
            ...prev,
            planId
        }));
    }

    function handleCoachSelection(e, coachId) {
        const selectedBox = e.currentTarget;

        // Remove the class from all children
        [...pickCoach.current.children].forEach(item => {
            item.classList.remove("coach-selected");
        });

        // Add class to the selected element
        selectedBox.classList.add("coach-selected");

        // Update the selected coach ID
        setPlanId(prev => ({
            ...prev,
            coachId
        }));
    }

    function handleSubmit() {
        // Logging the current planId and coachId selection
        if (actCoach && planId.coachId === "") {
            alert("Due to the plan you picked, please select a coach.");
            return;
        }
    
        console.log(planId);
    
        // Convert planId object to a query string
        const params = new URLSearchParams(planId).toString();
    
        // Navigate to signup page with the query string
        navigate(`/signup?${params}`);
    }

    return (
        <>
            <div className="mem-plans" ref={plansBox}>
                {
                    data.length > 0 ? (
                        data.map((item, index) => {
                            return (
                                <div key={"memBox" + index} className={`mem-box ${index === 0 ? "mem-selected" : ""}`} onClick={(e) => handleSelection(e, item._id)}>
                                    <div className="mem-image"></div>

                                    <div className="mem-box-info">
                                        <div className="mem-header">
                                            <h3>{item.planName || "Kiddies Plan"}</h3>
                                            <div className="mem-price">
                                                <h2>{item.price || "N252,000"}</h2>
                                                <p className="mem-info-price">
                                                    for three (3) months (VAT inclusive)
                                                </p>
                                            </div>
                                        </div>

                                        <p>
                                            <span className="bold">Description:</span> {item.description || "This plan is for children from ages 4 to 12 years."}
                                        </p>
                                        <p>
                                            <span className="bold">Additional Information:</span> There’ll be a 10% discount if the client pays for 6 months at once and a 20% discount if they pay for 12 months.
                                        </p>
                                        <p className="info-text">
                                            {item.note ? `Note: ${item.note}`: ""}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>No plans available.</p>
                    )
                }
            </div>
            {
                actCoach && (
                    <div className="pickCoach">
                        <h1>Choose your coach</h1>

                        <div className="coachesBox">
                            <button onClick={handlePrev} className="moveToggle lMoveToggle"></button>
                            <button onClick={handleNext} className="moveToggle rMoveToggle"></button>

                            <div className="coachList" ref={pickCoach}>

                                {coachData.map((_, index) => (
                                    <Card key={index} onClick={(e) => handleCoachSelection(e, `coach-${index}`)} membership altCard payload={{
                                        name: "bing",
                                        exp: "chio",
                                        type: "on Chi",
                                        rating: "fu-hon"
                                    }} />
                                ))}
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="mem-action-bottom">
                <Button onClick={handleSubmit}>Register Now</Button>
            </div>
        </>
    );
}


export function ChildrenMembership() {
    const membershipPlans = [
        {
            _id: 0,
            planName: "Kiddies Plan",
            price: "N252,000",
            priceInfo: "for three (3) months (VAT inclusive)",
            description: "This plan is for children from ages 4 to 12 years.",
            note: "Children in this age category are to be escorted and supervised by a parent/guardian on the court."
        },
        {
            _id: 1,
            planName: "Kiddies Plan",
            price: "N252,000",
            priceInfo: "for three (3) months (VAT inclusive)",
            description: "This plan is for children from ages 4 to 12 years.",
            note: "Children in this age category are to be escorted and supervised by a parent/guardian on the court."
        }
    ];

    return (
        <>
            <Hero title={"Children's Plan"} noAction subTitle={""} />

            <section className="memContentSection">
                <h1>Choose a plan that works best for your kids</h1>

                <MemBox data={membershipPlans} />
            </section>
        </>
    );
}

export function AdultMembership() {
    const membershipPlans = [
        {
            _id: 0,
            planName: "Kiddies Plan",
            price: "N252,000",
            priceInfo: "for three (3) months (VAT inclusive)",
            description: "This plan is for children from ages 4 to 12 years.",
            note: "Children in this age category are to be escorted and supervised by a parent/guardian on the court."
        },
        {
            _id: 1,
            planName: "Kiddies Plan",
            price: "N252,000",
            priceInfo: "for three (3) months (VAT inclusive)",
            description: "This plan is for children from ages 4 to 12 years.",
            note: "Children in this age category are to be escorted and supervised by a parent/guardian on the court."
        }
    ];
    return (
        <>
            <Hero title={"Adult Plan"} noAction subTitle={""} />

            <section className="memContentSection">
                <h1>Choose a plan that works best for you</h1>

                <MemBox data={membershipPlans} />
            </section >
        </>
    )
}

export function ComboMembership() {
    const membershipPlans = [
        {
            _id: 0,
            planName: "Kiddies Plan",
            price: "N252,000",
            priceInfo: "for three (3) months (VAT inclusive)",
            description: "This plan is for children from ages 4 to 12 years.",
            note: "Children in this age category are to be escorted and supervised by a parent/guardian on the court."
        },
        {
            _id: 1,
            planName: "Kiddies Plan",
            price: "N252,000",
            priceInfo: "for three (3) months (VAT inclusive)",
            description: "This plan is for children from ages 4 to 12 years.",
            note: "Children in this age category are to be escorted and supervised by a parent/guardian on the court."
        }
    ];

    return (
        <>
            <Hero title={"Special Combo"} noAction subTitle={""} />

            <section className="memContentSection">
                <h1>Choose a plan that works best for you</h1>

                <MemBox data={membershipPlans} pickCoach />
            </section >
        </>
    )
}


