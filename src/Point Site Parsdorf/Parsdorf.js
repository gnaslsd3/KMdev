import * as React from "react";
import './Parsdorf.css';


class Parsdorf extends React.Component {

  render() {
    return (
      <body>


          <div className="headlineParsdorf">
              <h1>Site Parsdorf</h1>
              
          </div>

          <div className="sitevideo">
             <video src="./Milestone.mp4" poster="KM-Werk.png" controls title="Another Milestone." frameborder="0" ></video>
         </div>

         <div className="upper2">
         <div class="containerbox2">
            <ul>
              <li className="hello">
                  <a style={{listStyle:'none',margin:20,height:50}} href="./Safety_Instructions" className="sparte">Instructions</a>
              </li>
              <li>
                  <a style={{listStyle:'none',margin:20,height:50}} href="./Site" className="sparte">Parsdorf</a>
              </li>
              <li>
                 <a style={{listStyle:'none',margin:20,height:50}} href="./Customer_Experience_Center" className="sparte">CEC</a>
              </li>
              <li>
                 <a style={{listStyle:'none',margin:20,height:50}} href="./Production" className="sparte">Production</a>
              </li>
            </ul>
          
         </div>
         </div>
      

      </body>

    );
  }
}

export default Parsdorf
