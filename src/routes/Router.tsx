import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "../components/Header";

 function Router () {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>     
                    <Route path="/" element={<Home/>} /> 
                    {/* 도서 Home만 구현 */}
                    <Route path="/webtoon" element={<div>webtoon</div>}/>
                    <Route path="/novel" element={<div>novel</div>}/>
                    <Route path="/select" element={<div>select</div>}/>
               </Routes>
            </BrowserRouter>
            </>
     
    )
}

export default Router;