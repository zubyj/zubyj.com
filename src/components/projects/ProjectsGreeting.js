import React from 'react';
import Typewriter from 'typewriter-effect';
import Greeting from '../Greeting';

function ProjectsGreeting() {

    const typewriter = () => {
        return (
            <Typewriter
            onInit={(typewriter) => 
                typewriter.typeString("<h2>Projects</h2>")
                .changeDelay(70)
                .typeString("<p><span class='Important-text'>(2)</span> Websites deployed</p>")
                .typeString("<p><span class='Important-text'>(1)</span> App in the iOS App Store</p>")
                .typeString("<p><span class='Important-text'>(2)</span> Web apps deployed</p>")
                .changeDelay(50)
                .typeString("<p><span class='Important-text'>(1)</span> Windows/MacOS apps available for download</p>")
                .typeString("<p>I know I gotta pump up these numbers. These are rookie numbers</p>")
                .pauseFor(1000)
                .deleteChars(62)
                .typeString("<span class='App-link'>Stay tuned for more!</span>")
                .pauseFor(1000)
                .start()
            }
            />
        )
    }

    return (
        <Greeting text={typewriter()} section="projects"/>
    )
}

export default ProjectsGreeting;