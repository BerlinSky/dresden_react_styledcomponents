import logo from './logo.svg';               
import './App.css';                          
                                             
import Title from "./components/title/Title";
                                             
function App() {                             
  return (                                   
    <div className="App">                    
      <header className="App-header">        
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
      </header>      
      <title />      
    </div>           
  );                 
}                    
                     
export default App;  
                     