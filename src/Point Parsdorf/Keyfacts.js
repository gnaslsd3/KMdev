import * as React from "react";
import './Halls.css';

class Keyfacts extends React.Component {

    render() {
      return (
        
<body>
        <div className="cont1">
                <h1>Key facts</h1>
        </div>

        
       <h3 class="key">In terms of assembly – efficiency increase up to 15%</h3>
       <div className="keyfactscontainer1">
              <h4>Optimized arrangement of production areas.</h4>
              <h4>Parallelization of assembly steps to reduce the production time.</h4>
              <h4>2-shift assembly to increase the utilization of the equipment.</h4>
              <h4>Modern and efficient intra-logistic concept.</h4>

        </div>

        
      <h3 class="key">In terms of mechanical production – efficiency increase up to 12%</h3>
         <div className="keyfactscontainer2">
              <h4>Focus on core parts.</h4>
              <h4>Product oriented machine arrangement reduce the production time.</h4> 
              <h4>Invest in new and highly productive machine technology.</h4>
              <h4>Partial automation of parts handling.</h4>
              <h4>Implementation of multi-machine handling and low-man shifts.</h4>

        </div>


        <h3 class="key">In terms of sustainability</h3>
         <div className="keyfactscontainer3">
              <h4>Photovoltaic-System with 8.0 MW – 50% internal use.</h4>
              <h4>Heat pumps.</h4> 
              <h4>Compressed air generation with HRU and refrigeration dryer.</h4>
              <h4>Ventilation systems.</h4>
              <h4>High efficient LED-Lights.</h4>
         </div>

        <div className="cont2">
           <div id="goingback">
                <a style={{listStyle:'none'}} className="text-link" href="./Site">back to Parsdorf</a>
           </div>
         </div>
</body>
        
        
        );
      }
    }
    
    export default Keyfacts