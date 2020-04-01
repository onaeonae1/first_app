import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        
“You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.” 
      </span>
      <span> - Albert Camus</span>
    </div>
  );
}

export default About;