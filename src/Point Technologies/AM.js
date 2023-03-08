import * as React from "react";
import './Technologies.css';

class AM extends React.Component {

    render() {
      return (
        
        <body>
         
           <div className="con2">
                <h1>Additive Manufacturing</h1>
           </div>

          <img className="photoclass" src="AM_photo.jpeg"></img>




           <div class="">
           <h2 className="explain">Additive manufacturing is predestined for the production of geometrically complex components in small quantities.</h2>
           </div>

           <img className="photoclass" src="AM_process.png"></img>

           <div class="">
                <h2 className="explain">Production without material waste and infinite design possibilities - we bring these advantages of additive manufacturing from prototyping to the industrial series production of plastic components.
                                        Benefit from our cross-technology know-how in plastics processing. Together with our customers, we rethink system concepts and find efficient additive manufacturing solutions for their individual requirements.
                </h2>
 
           </div>
        
           <img className="photoclass" src="AM_cost.png"></img>

          <div className="con1">
             <div id="AMTeil1">
                 <h2 className="benefit1">MASS CUSTOMIZATION</h2>
                 <h3 className="explain_ben1">An essential advantage of additive manufacturing is the possibility of customer specific mass production mass customization. In this process, the same part is produced in a different form, taking into account personalized specifications, thus enabling individuality in series production. The cost per part remains unchanged.</h3>
             </div>

             <div id="AMTeil2">
                 <h2 className="benefit2">FREEDOM OF DESIGN</h2>
                 <h3 className="explain_ben2">The moldless technology guarantees limitless design options and enables on demand manufacturing according to individual requirements. Even the production of complex structures is no problem.</h3>
             </div>

             <div id="AMTeil3">
                 <h2 className="benefit3">ANY QUANTITY - SAME QUALITY</h2>
                 <h3 className="explain_ben3">With the economic lot size one and the elimination of investment in molds, additive manufacturing enables the production of even small, often unprofitable quantities. Here, cost remains low even for small quantities.</h3>
             </div>

          </div>

             <div className="con3">
                 <div id="goingback">
                        <a style={{listStyle:'none',}} className="text-link" href="./Technologies">back to Technologies</a>
                 </div>
             </div>

        </body>
        
  
        
      );
    }
  }
  
  export default AM
  
