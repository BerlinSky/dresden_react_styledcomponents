import logo from './logo.svg';                
import './App.css';                           
                                              
import Title from "./components/title/Title"; 
import Button from "./components/button/Button";
                                              
function App() {                              
  return (                                    
    <div className="App">                     
      <header className="App-header">         
        <img src={logo} className="App-logo" alt="logo" />
        <Title />                             
        <Button />                             
      </header>                               
      <title />                               
    </div>                                    
  );                                      
}                                         
                                          
export default App;         
                            