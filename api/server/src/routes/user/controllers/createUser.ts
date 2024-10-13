import Elysia from "elysia";
import User from "../model";
import { userSchemas } from "../setup";

const createUser = new Elysia()
    .use(userSchemas)
    .post("/createUser", async ({ set, body }) => {
        const {
            fullName,
            username,
            email,
            password,
            phoneNumber,
            dob,
            level,
        } = body

        try {
            const usernameExists = await User.findOne({ username })
            const userEmailExists = await User.findOne({ email })

            if (usernameExists) {
                set.status = 400
                return { message: "the username is already taken" }
            }
            if (userEmailExists) {
                set.status = 400
                return { message: "the email is already taken" }
            }

            const user = new User({
                fullName,
                username,
                email,
                password,
                phoneNumber,
                dob,
                level,
                membership: "",
            });
            await user.save();

            set.status = 201;
            return {
                message: 'User created successfully',
                data: {
                    user: {
                        name: user.fullName,
                        username: user.username,
                        email: user.email,
                        phoneNumber: user.phoneNumber,
                        dob: user.dob,
                        level: user.level,
                        membership: user.membership,
                        socialAuth: user.socialAuth
                    },
                    auth: {
                        message: 'Sign in to access dashboard',
                    },
                },
            };
        } catch (err) {
            console.log(err);
            return {message: "Error while creating user"}
        }

    }, {
        body: "signUpSchema"
    })

export default createUser