import React from "react";

import { useState } from "react";


//component
import { Outlet, useNavigate } from "react-router-dom";
import Category from "../components/Category";


//style
import styled from "styled-components";
import { Divider } from "@mui/material";



// components
import Nav from "../components/Nav";


const Container = styled.div`
     color: ${props => props.theme.textColor};
     border-top-left-radius: 15px;
     border-top-right-radius: 15px;
     margin-top: -8px;
     z-index: 8000;
     background-color: white;
     height: 500vh;

     @media ${props => props.theme.desktop} {


      main {
       padding: 0 100px;
       /* 홈 메인 데스크탑 패딩값 세팅 */





     } 


    }
   

`

const Buttons = styled.ul`
  display: flex;
  padding-bottom: 10px;
  padding-top: 8px;
 




  li {
    margin: 0;
    font-size: 17px;
    line-height: 17px;
    margin-right: 6px;
    padding: 10px;
    border-radius: 40px;

    /* 눌러졌을 때 배경, 컬러 변경 주기 */

 
 
    &:hover {
      cursor: pointer;
      color: gray;
       transition: 0.3s ease-in;
    }

 
    
  }

  .active {
    background-color: ${props => props.theme.accentColor};
    color: white;  
    } 
`



// main 

 
 


export default function Home () {
  const navigate = useNavigate();
  const [change, setChange] = useState(0);
  console.log(change)
 


    return (
       <Container>
         <Nav/>
         <Category/>
         <main className="main">
          <Divider className="divider"/>
          {/* 서브 라우터 */}
          <Buttons>
            <li onClick={() => {
              setChange(0);
              navigate("recommend")
              
            }} className={`${change === 0 ? 'active' : ''}`}>추천</li>
            
            <li onClick={() => {
              setChange(1);
              navigate("event")

            }} className={`${change === 1 ? 'active' : ''}`}>이벤트</li>
          </Buttons>
          
          <Outlet/>
         </main>
       </Container>
    );
}


