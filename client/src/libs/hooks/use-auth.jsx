// import { login, register } from "@/apis/auth";

import { login, register } from "../api/api.endpoints";

export const useAuth = () => {
    async function userLogout() {
        localStorage.removeItem('user-payload');
    };

    async function userRegister(payload) {
        const data = await register(payload);
        return data
    };

    async function userLogin(payload) {
        const data = await login(payload);
        localStorage.setItem('user-payload', JSON.stringify(data.data.data));
        return data.data
    };

    function isAuthenticated() {
        const isAuth = localStorage.getItem('user-payload')
        return isAuth
    }

    function user() {
        const payload = localStorage.getItem('user-payload')
        if (payload) {
            const isAuth = JSON.parse(localStorage.getItem('user-payload')?.toString())
            return isAuth.user
        }
        return {}
    }

    return { isAuthenticated, userLogout, userLogin, userRegister, user };
};
