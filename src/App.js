import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
     return (
       <Router>
         <div className="App">
         
           <Navbar/>
           <Routes>
           <Route path="/" element={<MainPage />} />
           </Routes>
           
         
         
         </div>
   
       </Router>
   
     );
   }
   
   export default App;
   
