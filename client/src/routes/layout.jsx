import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./index";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Tournament from "./tornament";
import Coaching from "./coaching";
import Dashboard from "./user/dashboard"
import Videos from "./videos";
import CoachInfo from "./coachId";
import About from "./about";
import Resources from "./resources";
import ContactUs from "./contact";
import DashboardLayout from "./user/layout";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/tournaments" element={<Tournament />} />
                    <Route path="/resources" element={<Resources/>}/>
                    <Route path="/coaching">
                        <Route index element={<Coaching/>}/>
                        <Route path="/coaching/:id" element={<CoachInfo/>}/>
                    </Route>
                    <Route path="/videos" element={<Videos/>}/>
                    <Route path="/contact" element={<ContactUs/>}/>
                    <Route path="/u" element={<DashboardLayout/>}>
                        <Route index element={<Dashboard/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}