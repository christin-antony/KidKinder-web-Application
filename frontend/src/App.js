import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Style.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import About from "./pages/About"
import Classes from "./pages/Classes"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Login from "./pages/Login"
import Pages from "./pages/Pages1"
import Teachers from "./pages/Teachers"
import Admin from './components/Admin';
import Table from './components/Table';
import Teachersadd from './components/Teachersadd';
import Classadd from './components/Classadd';
import Pages1 from './pages/Pages1';
import Page2 from './pages/Page2';
import Updateteacher from './components/Updateteacher';
import Updateclass from './components/Updateclass';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>

      <Route element={<Home/>} path='/'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Classes/>} path='/class'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Gallery/>} path='/gallery'/>  
      <Route element={<Pages/>} path='/pages'/>
      <Route element={<Teachers/>} path='/teacher'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Admin/>} path='/admin'/>
      <Route element={<Table/>} path='/table'/>
      <Route element={<Teachersadd/>} path='/teacheradd'/>
      <Route element={<Classadd/>} path='/classadd'/>
      <Route element={<Pages1/>} path='/blog'/>
      <Route element={<Page2/>} path='/detail'/>
      <Route element={<Updateteacher/>} path='/updateteacher'/>
      <Route element={<Updateclass/>} path='/updateclass'/>

     
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;