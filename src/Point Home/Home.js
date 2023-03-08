import * as React from "react";
import './Home.css';
import Landinglogo from "./Landinglogo"


class Home extends React.Component {

  render() {
    return (
      
      <body>
        <div className="landing_logo">

        <Landinglogo/>

       </div>

       <div className="landing_text">

          <div className="landing_text1">
             <h1>Welcome to KraussMaffei</h1>
          </div>

          <div className="landing_text2">
             <h4>WE ARE THE PIONEERS OF THE PLASTICS INDUSTRY</h4>
          </div>

      </div>
      
    
      </body>

    );
  }
}

export default Home
