import React from "react";
import styled from "styled-components";

import 'remixicon/fonts/remixicon.css'
import { ViewWeek } from "@mui/icons-material";


const Container = styled.div`
position: relative;
 overflow: hidden;
 border-radius: 10px;

 .sliderTextBox {
    position: absolute;
    bottom: 10%;
    color: white;
    line-height: 40px;
    cursor: pointer;
 }

 .sliderTextTitle {
    padding: 0 30px;
    font-size: 35px;
    font-weight: bold;
 }
 .sliderTextSub {
    padding: 2px 37px;
    font-size: 22px;
    font-weight: 400;
    opacity: 0.8;

 }

 .sliderPage {
     color: white;
    font-weight: 600;
    transform: translate(92%, -80px);
    border-radius: 15px;
    padding-top: 2px;
    padding: 6px 8px;
     font-size: 16px;
    font-weight: 600;
    line-height: 17px;
    background: rgba(0, 0, 0, 0.1);

 }
 


`

const CarouselBox = styled.div`
    width: 700vw;
    height: 600px;
    display: flex;
    transition: 0.8s cubic-bezier(.52,.48,.8,.27);
    transform: translateX(-300vw);
        
     /* 클릭시 translate 움직이기 */

`

const SliderBox = styled.div`
    width: 100vw;
     
 
    img {
        width: 100%;
        height: 600px;
     }
`



 

// Carousel Mock Data 



interface MoveProps {
    move: number;
}
// 부모에서 넘긴 Move를 받을때 interface로 타입정의
 
export default function Carousel (props:MoveProps) {

        

        const move = props.move;
        console.log(move)

    const slides = [
        {
            id: 0,
            title: "해리포터 20주년 개정판",
            subtitle: "21세기의 고전 《해리포터》를 고전답게 재해석하다!",
            img: "https://images.ctfassets.net/usf1vwtuqyxm/3Tha0nbSjB8OCTHNR8yAe9/a80b2ce8b78995a24f76f64b85cd6021/hp-b1-pmp-crop.jpg?fm=jpg&q=70&w=2560",
            url: "",   
        },
        {
            id: 1,
            title: "레디페이퍼4",
            subtitle: "미니멀 디자인의 RIDIPAPER 4는 시간, 공간, 그리고 당신의 감각까지 그대로 반영합니다.",
            img: "https://blog.kakaocdn.net/dn/U9nld/btrydzi6oWE/Tsc8QVBMAw1VK01oo5tEU1/img.png",
            url: "",   
        },
        {
            id: 2,
            title: "레디 웹툰 공모전",
            subtitle: "1등 1억, 지금 당장 도전하세요!",
            img: "https://ridicorp.com/wp-content/uploads/2021/09/bg.jpg",
            url: "",   
        },
        {
            id: 3,
            title: "샌더스 돌풍의 주역, 버니 샌더스의 모든 것",
            subtitle: "99%를 위한 사회를 외친 샌더스, 그는 누구인가?",
            img: "https://wallpapercave.com/wp/wp5432358.png",
            url: "",   
        }
    
    ]

 

    return (
        <Container> 
        <CarouselBox>
        {
           slides.map((slide) => (
           <SliderBox>
                <img src={slide.img} />
                <div className="sliderTextBox">
                    <h2 className="sliderTextTitle">{slide.title}</h2>
                    <p className="sliderTextSub">{slide.subtitle}</p>
                </div>
           </SliderBox>
           
                )
            )
        }

        </CarouselBox>
        <div className="sliderPage">
            <span>0/4</span>
        </div>
        </Container>
    )


}