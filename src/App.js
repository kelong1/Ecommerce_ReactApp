
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
   <Router>
    <Header/>
    <div>
      <Routes>
     <Route path="/" exact element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
     {/* <Route path ="*" element={<ErrorPage/>}/> */}
  
    </Routes>
   

      
     
      </div>
   
   </Router>
    
  );
}

export default App;
