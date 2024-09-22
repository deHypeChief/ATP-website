import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./index";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Tournament from "./tornament";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/tournaments" element={<Tournament />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}