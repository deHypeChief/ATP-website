import Elysia from "elysia";
import { isUser_Authenticated } from "../../../middleware/isUserAuth";
import Tournament from "../model";

const registerTour = new Elysia()
    .use(isUser_Authenticated)
    .get("/register/:tourId", async ({ set, user, params: { tourId } }) => {
        const tour = await Tournament.findById(tourId);

        if (!tour) {
            set.status = 400
            return {
                message: "Invalid tour id"
            }
        }

        try {
            const flutterwave = await fetch('https://api.flutterwave.com/v3/payments', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tx_ref: user._id,
                    amount: tour.price,
                    currency: 'NGN',
                    redirect_url: 'http://localhost:8000/tour/tourCallback',
                    customer: {
                        email: user.email,
                        name: user.fullName,
                        phonenumber: user.phoneNumber,
                    },
                    customizations: {
                        title: tour.name,
                    },
                    configurations: {
                        session_duration: 10,// Session timeout in minutes (maxValue: 1440)    
                        max_retry_attempt: 5// Max retry (int)
                    }
                }),
            });
        } catch (err) {
            set.status = 500
            console.log(err)
            return {
                message: "error during tournament payment"
            }
        }
    })
    .get("/tourCallback", async ({ set }) => {
        try {

        } catch (err) {
            set.status = 500
            console.log(err)
            return {
                message: "error during tournament payment"
            }
        }
    })

export default registerTour