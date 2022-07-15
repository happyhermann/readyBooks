import { DefaultTheme } from "styled-components";

const size = {
    mobile: "768px",
    desktop: "770px",
    
}


export const theme:DefaultTheme = {
    bgColor:"white",
    bgDark : "#111",
    textColor: "#111",
    darkColor: "white",
    accentColor: "#1E9EFF",

    mobile: `(max-width: ${size.mobile})`,
    desktop: `(min-width: ${size.desktop})`,
 
};


 
 
 // max 770px = mobile
// min 770px = pc
 

// Styled Component로 반응형 구축하기 

