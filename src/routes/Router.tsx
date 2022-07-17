import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

import Header from "../components/Header";
import Recommend from "./Recommend";
import Event from "./Event";

 function Router () {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>     
                    <Route path="/" element={<Home/>} >
                        <Route path="recommend" element={<Recommend/>}/>
                        <Route path="event" element={<Event/>}/>

                    </Route>
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