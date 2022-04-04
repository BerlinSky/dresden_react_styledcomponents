import React from "react";                   
import Button, { ButtonSuccess, ButtonDanger } from "./Button"                
                                             
export default {                             
  title: "Button",                           
  component: Button,                         
}                                            
                                             
export const Primary = () => <Button></Button>
                                             
Primary.story = {                            
  name: "primary",                           
};                                           
                                
export const Danger = () => <ButtonDanger />;
Danger.story = {                
  name: "danger",               
};
  
export const Success = () => <ButtonSuccess />;
  
Success.story = {
  name: "success",
};
                                             