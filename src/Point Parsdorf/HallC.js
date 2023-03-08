import * as React from "react";
import './Halls.css';

class HallC extends React.Component {

    render() {
      return (
        
<body>
        <div className="cont1">
                <h1>Hall C</h1>
        </div>

        <img className="photoclass" src="HalleC.png"></img>

        <div className="cont2">
           <div id="goingback">
                <a style={{listStyle:'none'}} className="text-link" href="./Site">back to Parsdorf</a>
           </div>
         </div>
</body>
        
        
        );
      }
    }
    
    export default HallC