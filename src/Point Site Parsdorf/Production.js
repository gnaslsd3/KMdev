import * as React from "react";
import './Parsdorf.css';

class Production extends React.Component {

    render() {
      return (
        
<body>

          <div className="cont1">
             <h1>Production</h1>
          </div>

          <div className="prodcontainer1">
              <h2 class="con">The production is supplied by an automatic pallet warehouse</h2>
          </div>

<div className="prodcontainer2">
             <h3>Length: 38m</h3>
             <h3>Width: 16m</h3>
             <h3>Height: 14m</h3>
             <h3>Pallet space: 4.600</h3>
             <h3>Container space: 15.255</h3>
</div>



          <img className="photoclass" src="Storage.jpg"></img>

          <div className="cont2">
             <div id="goingback">
                   <a style={{listStyle:'none'}} className="text-link" href="./Site_Parsdorf">back to Site Parsdorf</a>
             </div>
         </div>

 </body>


        
  
        
        );
      }
    }
    
    export default Production