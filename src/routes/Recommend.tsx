import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";


import Carousel from "../components/Carousel";

const RecommendBox = styled.div`
  position: relative;

 .left {
    font-size: 40px;
    background-color: white;
    cursor: pointer;
    background: #ffffff;
    box-shadow: 2px 4px 8px rgb(0 0 0 / 6%);
    border-radius: 50%;
    border: 1px solid #f0f0f0;
    position: absolute;
    top: 45%;
    pointer-events: auto;
    left: -2%;
  
   }

   .right {
    font-size: 40px;
    background-color: white;
    cursor: pointer;
    background: #ffffff;
    box-shadow: 2px 4px 8px rgb(0 0 0 / 6%);
    border-radius: 50%;
    border: 1px solid #f0f0f0;
    position: absolute;
    top: 45%;
    pointer-events: auto;
    right: -2%;
   }

    
`

 

export default function Recommend () {

    const [move, setMove] = useState<number>(0);
    const [page, setPage] = useState<number>(0);

    console.log(move, page);

    return (
        <RecommendBox>
            <Carousel move={move}/>
            <i onClick={() => {
                setMove(move + 80)
                setPage(page - 1);
            }} className="ri-arrow-left-s-line icon left"></i>
            <i onClick={() => {
                setMove(move - 80)
                setPage(page + 1);
            }}  className="ri-arrow-right-s-line icon right"></i>
        
        </RecommendBox>
    )
}