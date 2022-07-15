import React from "react";
import styled from "styled-components";

import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";


// 헤더 컨테이너 

const HeaderContainer = styled.header` 
  height: 49px;
  background-color: ${props => props.theme.bgDark};
  font-size: 16px;
  font-weight: 600;
  a {
    color: white;
    opacity: 0.3;
    /* default link text color */

  }
  

  @media ${(props) => props.theme.mobile} {
 
    
     
  }

  @media ${(props) => props.theme.desktop} {
    background-color: ${props => props.theme.bgColor};
  }
     
`

const Nav = styled.nav`

`

const ListContainer = styled.ul`
    
`

const Lists = styled.li`
 
    
`
 


// 헤더는 모바일일 때는 다크모드 => 데스크톱에서는 디폴드 모드 



export default function Header () {
    const navigate = useNavigate();
    

    return (
        <HeaderContainer>
            <Nav>
                <ListContainer>
                    <Lists>
                        <Link to="/webtoon">웹툰/만화</Link>
                    </Lists>
                    <Lists><Link to="">웹소설</Link></Lists>
                    <Lists><Link to="">도서</Link></Lists>
                    <Lists><Link to="">셀렉트 #</Link></Lists>
                </ListContainer>
            </Nav>
        </HeaderContainer>
    )

}