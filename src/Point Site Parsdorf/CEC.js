import * as React from "react";
import './Parsdorf.css';

class CEC extends React.Component {

    render() {
      return (
        
<body> 
  
   <div className="cont1">
        <h1 >Customer Experience Center</h1>
        <h3>19.500m².</h3>
        <h3>3 floors.</h3>
        <h3>Trials, training & events.</h3>
   </div>

   <img className="photoclass2" src="CEC.png"></img>


        <div className="cont2">
           <div id="goingback">
               <a style={{listStyle:'none'}} className="text-link" href="./Site_Parsdorf">back to Site Parsdorf</a>
          </div>
        </div>
        
</body>
        
  
        
        );
      }
    }
    
    export default CEC