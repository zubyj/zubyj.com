import React from 'react';
import Typewriter from 'typewriter-effect';
import NavigationButtons from './NavigationButtons';

function HomeGreeting() {

    const typewriter = () => {
        return (
            <Typewriter
                onInit={(typewriter) =>
                    typewriter.changeDelay(60)
                        .typeString("<h1>Hello I'm <span class='Important-text'>Zuby</span></h1>")
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
        <NavigationButtons text={typewriter()} activePage="home" />
    )
}

export default HomeGreeting;