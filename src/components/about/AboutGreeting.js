import React from 'react';
import Typewriter from 'typewriter-effect';
import Greeting from '../Greeting';

function AboutGreeting() {

    const typewriter = () => {
        return (
            <Typewriter
            onInit={(typewriter) => 
                typewriter.changeDelay(60)
                .typeString("<h3>Hello World</h3>")
                .pauseFor(500)
                .deleteChars(12)
                .typeString("<h1>I'm <span class='Important-text'>Zuby Javed</span></h1>")
                .typeString("<h4 style='padding-bottom: 2rem;'>Software Engineer</h4>")
                .pauseFor(1000)
                .typeString("<p>Welcome to my portfolio</p>")
                .pauseFor(1000)
                .deleteChars(23)
                .changeDelay(90)
                .typeString("Open to job opportunities")
                .start()
            }
            />
        )
    }

    return (
        <Greeting text={typewriter()} activePage="about"/>
    )
}

export default AboutGreeting;