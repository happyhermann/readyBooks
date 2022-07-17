import React from "react"
import styled from "styled-components"

import { useState, useEffect } from "react"

import 'remixicon/fonts/remixicon.css'
import { Divider } from "@mui/material"



const SearchBox = styled.form`
    


@media ${(props) => props.theme.mobile} {
    position: absolute;
    width: 95%;
    background-color: #f0f0f0;
     border-radius: 8px;
    margin-bottom: -100px;


label {
    display: flex;
    align-items: center;
    height: 45px;
    padding: 0 11px;
    
}


i { 
    font-size: 16px !important;
    color: black;
    opacity: 0.4;
    margin-right: 10px;
     
}


input {
width:100%;
height: 100%;
margin: 0;
border-radius: 8px;
border: none;
background-color: transparent;
appearance: none;
box-shadow: none;
outline: none;

}

    
}

  
 
@media ${(props) => props.theme.desktop} {
position: relative;
width: 275px;
background-color: #f0f0f0;
margin-right: 14px;
border-radius: 8px;


label {
    display: flex;
    align-items: center;
    height: 45px;
    padding: 0 11px;
    
}


i { 
    font-size: 16px !important;
    color: black;
    opacity: 0.4;
    margin-right: 10px;
     
}


input {
width:100%;
height: 100%;
margin: 0;
border-radius: 8px;
border: none;
background-color: transparent;
appearance: none;
box-shadow: none;
outline: none;

}
     
}
`

const SearchHistory = styled.div`
    position: absolute;
 
    width: 464px;
    margin-top: 10px;
    padding-top: 6px;
    border: 1px solid rgb(240, 240, 240);
    border-radius: 8px;
    background: rgb(255, 255, 255);
    overflow: hidden;
    opacity: 1;
    transition: opacity 0.2s ease-in-out 0s;
    box-shadow: rgb(0 0 0 / 8%) 5px 5px 10px;
    z-index: 8000;
    padding: 10px 15px 0 15px;

    

     .search_recent {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 5px 6px;
        font-size: 14px;
        opacity: 0.5;

 
     i {
            font-size: 20px !important;
        }

  
     }

     .search_text {
        display: flex;
      
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-top: 40px;
        padding-bottom: 60px;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.01em;
        opacity: 0.5;

       
     }
     .search_button {
        opacity: 0.5;
   
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: end;
        justify-content: flex-end;
        border-top: 1px solid rgb(240, 240, 240);
        padding: 16px 0px;
        margin: 0px 16px;
        font-size: 16px;
        color: rgb(120, 120, 120);
     }
     .search_button_button {
        font-size: 13px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: -0.01em;
        outline: none;
        border: none;
        background-color: transparent;
        cursor: pointer;
     }

     i {
        cursor: pointer;
     }
 
  
 ` 
 

export default function Search () {

    const [hidden, setHidden] = useState(false);
    
 

    const onSubmit = (e: any) => {
        e.preventDefault();
        
    
     
    }
    
    const onChange = (e: any) => {
    
        console.log(e.target)
        
    
    }
    
    const onClick = (e: any) => {
        setHidden(!hidden);
        
    }

    
 

    return (
        <>
            <SearchBox onSubmit={onSubmit}>
            <label onClick={onClick}>
                <i  className="ri-search-line"></i>
                <input onChange={onChange} type="text" />
            </label>
            {hidden &&  <SearchHistory>
                <div className="search_recent">
                  <span>최근 검색어</span>
                  <i onClick={onClick} className="ri-close-line close"></i>
                </div>
                <div className="search_text">
                  최근 검색 내역이 없습니다.   
                </div>
                <Divider/>
                <div className="search_button">
                 <button className="search_button_button">검색어 저장 끄기</button>
                </div>
            </SearchHistory>
            }
 
            </SearchBox>
         
        </>
    )
}