import React from "react";
import "./MainPage.css";
import FadeIn from "react-fade-in";

export default function MainPage() {
  return (
    <div className="MainPage">
      <FadeIn className="MainPageFadeIn" delay={125}>
        <div className="Welcome">Welcome!</div>
        <div className="MainText">
          <div>I'm Carlos, full stack software engineer!</div>
          <div>
            I'm passionate about building stuff for the web, both in the back as
            well as the front end, always keeping my focus on the user
            experience and needs.
          </div>
        </div>
        <div className="ContactButton">
          <a href="https://www.linkedin.com/in/carlos-eduardo-da-silva-420411116/">
            Contact me!
          </a>
        </div>
        <div className="AboutMe">
          <div className="AboutMeLabel">About me</div>
          <div className="AboutMeText">
              I've been interested in technologies since childhood and my dream
              was to be able to create cool things using technology. Growing up,
              this dream evolved to be able to better the lives of people and
              try to effect social change using technology. 
              <br/><br/>
              And so I've studied Science and Technology at Universidade Federal do ABC
              one of the most innovative and scientificaly active Federal Universities in
              Brazil. 
              <br/><br/>
              This allowed me to work at IBM Brazil's Innovation Lab where I had 
              contact with all kinds of technologies and exciting projects with 
              an amazing team. We even managed to create a patent for Virtual Assistant's caching. 
              <br/><br/>
              I also had the privile of working with educational start-ups where I 
              learned a lot about front-end development. 
              <br/><br/>
              My focus today is to share a lot more of what I do with the world 
              by working on this site and blog and continue to grow my knowledge while 
              working with people and companies to create amazing products and projects.
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
