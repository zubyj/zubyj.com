import React from 'react';
import Typewriter from 'typewriter-effect';
import Greeting from '../Greeting';

function ProjectsGreeting() {

    const typewriter = () => {
        return (
            <Typewriter
                onInit={(typewriter) =>
                    typewriter.typeString("<h2>Projects</h2>")
                        .changeDelay(50)
                        .typeString("<p><span class='Important-text'>(1)</span> iOS app in the App Store</p>")
                        .typeString("<p><span class='Important-text'>(3)</span> Websites live</p>")
                        .changeDelay(30)
                        .typeString("<p><span class='Important-text'>(2)</span> Web apps deployed</p>")
                        .typeString("<p><span class='Important-text'>(1)</span> Windows/MacOS apps available for download</p>")
                        .pauseFor(1000)
                        .typeString("<span class='App-link'>Stay tuned for more</span>")
                        .pauseFor(1000)
                        .start()
                }
            />
        )
    }

    return (
        <Greeting text={typewriter()} activePage="projects" />
    )
}

export default ProjectsGreeting;