import * as React from "react";
import './Technologies.css';




class Technology extends React.Component {

  render() {
    return (
      <body >
     
  <div className="con5">  
     <div class="texting">
        <h1 class="texting1">KraussMaffei is one of the world's
                             leading manufacturers of machines and systems for producing and processing
                             plastics and rubber.</h1>
        

        
        <h2 class="texting2"> Our range of products and services covers all technologies
                              in injection molding, extrusion and reaction process machinery. This gives us a unique
                              selling proposition in the industry.</h2>
                              
    </div>
     

          
              <div className="containerbox">
                    <ul>
                      <li style={{listStyle:'none',margin:0}}>
                          <a href="./Additive_Manufacturing" className="sparte1">Additive Manufacturing</a>
                      </li>
                      <li style={{listStyle:'none',margin:0}}>
                        <a href="/Extrusion_technology" className="sparte2">Extrusion <br/>Technology</a> 
                      </li>
                      <li style={{listStyle:'none',margin:0}}>
                        <a href="/Reaction_process_machinery" className="sparte3">Reaction Process Machinery</a> 
                      </li>
                      <li style={{listStyle:'none',margin:0}}>
                        <a href="/Injection_molding_machinery "className="sparte4">Injection Molding Machinery</a>
                      </li>
                    </ul>
          
              </div>
            
  </div> 

      </body>
    );
  }
}

export default Technology
