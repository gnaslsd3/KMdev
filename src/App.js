
import Navbar from './Navbar/Navbar';
import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';

import Home from './Point Home/Home';
import Brand from './Point Brand/Brand';
import Parsdorf from './Point Site Parsdorf/Parsdorf';
import Technologies from './Point Technologies/Technologies';
import AM from './Point Technologies/AM';
import Et from './Point Technologies/Et';
import Imm from './Point Technologies/Imm';
import Rpm from './Point Technologies/Rpm';

import CEC from './Point Site Parsdorf/CEC';
import SF from './Point Site Parsdorf/SF';
import Production from './Point Site Parsdorf/Production';
import Site from './Point Site Parsdorf/Site';

import HallB from './Point Parsdorf/HallB';
import HallC from './Point Parsdorf/HallC';
import HallE from './Point Parsdorf/HallE';
import Keyfacts from './Point Parsdorf/Keyfacts';



function App() {
  return (
    <div className="App">


<Router>

           <Routes>
               <Route>
                 <Route path="/" element={<Home />} /> 
                 <Route path="/Brand" element={<Brand />} />
                 <Route path="/Site_Parsdorf" element={<Parsdorf />} /> 
                 <Route path="/Technologies" element={<Technologies />} /> 

                 <Route path="/Additive_Manufacturing" element={<AM />} />
                 <Route path="/Extrusion_technology" element={<Et />} />
                 <Route path="/Reaction_process_machinery" element={<Rpm />} />
                 <Route path="/Injection_molding_machinery" element={<Imm />} />

                 <Route path="/Customer_Experience_Center" element={<CEC />} />
                 <Route path="/Production" element={<Production />} />
                 <Route path="/Safety_Instructions" element={<SF />} />
                 <Route path="/Site" element={<Site />} />

                 <Route path="/Hall_B" element={<HallB />} />
                 <Route path="/Hall_C" element={<HallC />} />
                 <Route path="/Hall_E" element={<HallE />} />
                 <Route path="/Keyfacts" element={<Keyfacts />} />

               </Route>
           </Routes>
</Router>


      
    </div>
  );
}

export default App;
