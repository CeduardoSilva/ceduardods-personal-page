import React from "react";

export default function Welcome() {
    return (
        <div>
            <div id="MainText" className="Welcome">Welcome!</div>
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
        </div>
    );
}
