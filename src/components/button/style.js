import styled from 'styled-components';  
import { colors } from "../../utilities";
                                         
const StyledButton = styled.button`      
  color: ${colors.primary500};           
  font-size: 1em;                        
  margin: 1em;                           
  padding: 0.25em 1em;                   
  border: 2px solid ${colors.primary500};
  border-radius: 2rem;                   
  background: transparent;               
`;                                       
                                         
export default StyledButton;             