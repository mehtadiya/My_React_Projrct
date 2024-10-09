import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Item from './components/Item/Item';
import Homepage from './pages/Homepage';
import All_jewellery from './pages/All_jewellery';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Earrings from './pages/Earrings';
import Rings from './pages/Rings';
import Collections from './pages/Collection';
import More from './pages/More';
import Bracelets from './pages/Bracelets';
import All_jewellery_id from './pages/All_jewellery_id';
import Admin from './pages/Admin';
import Necklace from './pages/Necklace';
import Layout from './pages/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <Routes>
         <Route path="/" element={<Layout/>}>
         <Route index  element={<Homepage/>}/>
         <Route path="/alljewellery" element={<All_jewellery/>}/>
         <Route path="/necklace" element={<Necklace/>}/>
         <Route path="/bracelets" element={<Bracelets/>}/>
         <Route path="/earrings" element={<Earrings/>}/>
         <Route path="/rings" element={<Rings/>}/>
         <Route path="/details" element={<All_jewellery_id/>}/>
         <Route path="/admin" element={<Admin/>}/>
         </Route>
  </Routes>
  </BrowserRouter>
  
);

