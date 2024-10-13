import { login, register } from "@/apis/auth";

export const useAuth = () => {
    async function adminLogout() {
        localStorage.removeItem('admin-payload');
    };

    async function adminRegister(payload: { adminName: string; adminEmail: string; pin: string }) {
        const data = await register(payload);
        return data
    };

    async function adminLogin(payload: { adminEmail: string; pin: string }) {
        const data = await login(payload);
        localStorage.setItem('admin-payload', JSON.stringify(data.data.data));
        return data.data
    };

    function isAuthenticated() {
        const isAuth = localStorage.getItem('admin-payload')
        return isAuth
    }

    function admin(){
        const isAuth = JSON.parse(localStorage.getItem('admin-payload')?.toString() as string)
        return isAuth.admin
    }

    return { isAuthenticated, adminLogout, adminLogin, adminRegister, admin};
};

export type AuthContext = ReturnType<typeof useAuth>;