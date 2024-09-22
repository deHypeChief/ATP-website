import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./index";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Tournament from "./tornament";
import Coaching from "./coaching";
import Videos from "./videos";
import CoachInfo from "./coachId";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/tournaments" element={<Tournament />} />
                    <Route path="/coaching">
                        <Route index element={<Coaching/>}/>
                        <Route path="/coaching/:id" element={<CoachInfo/>}/>
                    </Route>
                    <Route path="/videos" element={<Videos/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}