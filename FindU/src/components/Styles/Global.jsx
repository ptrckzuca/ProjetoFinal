import {createGlobalStyle} from "styled-components";
 
const  GlobalStyle =  createGlobalStyle`

 * {
 box-sizing: boder-box;
 margin: 0;
 padding: 0;
 }

body{ 
   
    overflow: hidden;
    width:100%;
    height: 100vw;
    backgorund-color:#4d4299;
    font-family:montserrat
 }

 `;
export default GlobalStyle;