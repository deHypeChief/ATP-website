import Elysia from "elysia";
import { jwtUser } from "../../../middleware/jwt";
import { userSchemas } from "../setup";
import User from "../model";

const signUser = new Elysia()
    .use(userSchemas)
    .use(jwtUser)
    .post("/signUser", async ({ body, set, userJwt }) => {
        const { email, password } = body

        try {
            const userData = await User.findOne({ email });

            if (!userData || !(await userData.comparePassword(password))) {
                set.status = 400;
                return { message: 'Invalid credentials' };
            }
            
            // Sign the JWT token
            const token = await userJwt.sign({
                userId: userData._id.toString(),
                email: userData.email,
            });

            const user = await User.findOne({ email }).select("-password")


            return {
                message: 'Login successful',
                data: {
                    user,
                    auth: {
                        message: 'Auth token generated',
                        token: token,
                    },
                },
            };
        } catch (err) {
            console.log(err)
            set.status = 500
            return {
                message: "Error while validating"
            }
        }
    }, {
        body: "loginSchema"
    })

export default signUser