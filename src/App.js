// import logo from './logo139.svg';
import './App.css';
import { Header } from './Components/Header';
// import {Presets} from "./Components/Presets.js";
import Presets from "./Components/Presets.js";
import { Pricing } from "./Components/Pricing.js";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { Aboutus } from './Components/Aboutus.js';
import { Login } from './Components/Login.js';
import { Singup } from './Components/Singup.js';
import { Benifits } from './Components/Benifits.js';

function App() {

  return (
    <>
      <Router>
        <Header title='EMPLOYEE PERKS' searchBar={true} />
        <Routes>
          <Route path='/' exact element={[<Presets />, <Benifits title="EMPLOYEE PERKS"/> ]} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/singup' element={<Singup/>}/>
        </Routes>
      </Router>
    </>
    
  );
}


export default App;
