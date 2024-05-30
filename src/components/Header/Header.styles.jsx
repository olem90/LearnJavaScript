import styled from "styled-components";

export const HeaderStyle = styled.header` 
  min-height: 100vh;  
  display: flex;
  flex-direction: column;
  color: #fff;  
  font-size: 23px;  
  justify-content: center;    
  align-items: center;  
  text-align: center;  
  z-index: 5;  
  
  .header-h1 {    
    max-width: 60%; 
    margin: auto;  
    padding: 5px;   
    line-height: 110px;     
  }    
   
  &::before {   
    content: '';   
    position: absolute;
    top: 0;  
    left: 0; 
    right: 0;
    bottom: 0; 
    background-image: url(${props => props.bgimage});
    background-size: cover; 
    background-position: center; 
    filter: brightness(50%);  
    z-index: 3;
  }  
`

export const HeaderTextStyle = styled.div`
    transform: translateY(-70%);    
    z-index: 96;      
` 