import * as React from "react";
import './Parsdorf.css';

class Site extends React.Component {

    render() {
      return (
        
<body>

        <div className="cont1">
           <h1>Parsdorf</h1>
           
           
        </div>

        <img className="photoclass" src="Layout.png"></img>
        
        
        <div className="containerbox">
                    <ul>
                      <li style={{listStyle:'none',margin:0}}>
                          <a href="/Keyfacts" className="sparte1">Key facts</a>
                      </li>
                      <li style={{listStyle:'none',margin:0}}>
                          <a href="/Hall_B" className="sparte1">Hall B</a>
                      </li>
                      <li style={{listStyle:'none',margin:0}}>
                          <a href="/Hall_C" className="sparte1">Hall C</a>
                      </li>
                      <li style={{listStyle:'none',margin:0}}>
                          <a href="/Hall_E" className="sparte1">Hall E</a>
                      </li>
                    </ul>
          
              </div>




        <div className="cont2">
           <div id="goingback">
                  <a style={{listStyle:'none'}} className="text-link" href="./Site_Parsdorf">back to Site Parsdorf</a>
          </div>
          </div>
          
</body>
        
        );
      }
    }
    
    export default Site