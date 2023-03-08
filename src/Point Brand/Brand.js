import * as React from "react";
import './Brand.css';


class Brand extends React.Component {

  render() {
    return (
      <body>
     
      
      
      <div class="branding">
        <h1 class="branding1">Our customer promise: <span class="except_orange">Pioneering Plastics.</span></h1>

        <h2 class="branding2">In 2019 we merged our previous brands into one
                              strong brand: KraussMaffei. In order to
                              our customers benefit from united
                              Competences and always new pioneering achievements
                              Because we are and will remain the pioneers of
                              plastic industry. For over 180 years. Tied together
                              with the repositioning we have a clear one
                              Promises made to our customers.
                              A promise that our common pioneering spirit
                              reflects: Pioneering Plastics.</h2>
      

        <h2 class="branding3">In increasingly competitive markets, it is important to
                              to focus on its strengths, our goal as a brand
                              is to be trusted by our customers for three things
                              to be appreciated: As a pioneer of
                              We set the pace for digitization. We are waiting
                              the pinnacle of progress - as we have always done!
                              With our unique flair for the customer
                              we recognize what is really needed, and
                              manage to meet requirements with suitable solutions
                              encounter.
                              We pull together and talk
                              also outwardly with one voice. We join
                              combined forces and combined know-how.</h2>
       </div>


          <div className="mindset">
              <h2 class="mindset1">Curious.</h2>
              <h2 class="mindset1">Bold.</h2>
              <h2 class="mindset1">Enriching.</h2>
          </div>


          <div className="brandvideo">
              <video src="./BRAND.mp4" poster="BRAND.png" controls title="Another Milestone." frameborder="0" ></video>
          </div>
      
      
      
     </body>
    );
  }
}

export default Brand
