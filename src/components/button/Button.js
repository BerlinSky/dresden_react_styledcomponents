import React from "react";  
                                                           
import {                                                     
  StyledButton,                                              
  StyledButtonSuccess,                                       
  StyledButtonDanger,                                        
} from "./style";                                            
                                                                  
const Button = () => <StyledButton>This is a button</StyledButton>
                                                             
export const ButtonSuccess = () => (                         
  <StyledButtonSuccess>This is a Button</StyledButtonSuccess>
)                                                            
                                                             
export const ButtonDanger = () => (                         
  <StyledButtonDanger>This is a Button</StyledButtonDanger>  
)                                                            
                                                             
export default Button;                                       