import Elysia from "elysia";
import { isUser_Authenticated } from "../../../middleware/isUserAuth";
import Tournament from "../model";
import flw from "../../../config/flutterwave.config";

const registerTour = new Elysia()
    .use(isUser_Authenticated)
    .get("/register/:tourId", async ({ set, user, params: { tourId } }) => {
        try {
            const tour = await Tournament.findById(tourId);
    
            if (!tour) {
                set.status = 400;
                return {
                    message: "Invalid tour ID"
                };
            }
    
            const tx_ref = `${user.username}-${Date.now()}`;
            const paymentPayload = {
                tx_ref,
                amount: parseFloat(tour.price),
                currency: "NGN",
                redirect_url: `${process.env.ACTIVE_API_ORIGIN}/match/${tourId}/matchCallback`,
                customer: {
                    email: user.email,
                    name: user.fullName,
                    phonenumber: user.phoneNumber
                },
                customizations: {
                    title: tour.name.toUpperCase(),  
                }
            };
            // Sending the payment payload to Flutterwave
            const flwResponse = await flw.post("/payments", paymentPayload);
    
            // Logging the response for debugging purposes
            console.log("Flutterwave Response:", flwResponse.data);
    
            // Returning the response to the client
            set.status = 200;
            return {
                flwResponse: flwResponse.data
            };
    
        } catch (err) {
            // Error handling and logging
            set.status = err.response?.status || 500;
            console.error("Flutterwave API Error:", err.response?.data || err.message);
            return {
                message: "Error during tournament payment",
                error: err.response?.data || "Unexpected error"
            };
        }
    });
    

export default registerTour