//Displays socials or skills while hiding the other.
function displayBlock(name) {

    let block = document.getElementById(name);

    // If the block isn't displayed, run the function
    if (block.style.display !== "block") {
        if (name === 'socials') {
            document.getElementById('skills').style.display = 'none';
        }
        else {
            document.getElementById('socials').style.display = 'none';
        }
        if (block.style.display === "block") {
            block.style.display = "none";
        }
        else {
            block.style.display = "block";
        }
    }

    window.scrollTo(0, document.getElementById(name).offsetTop);
}

// Copies the email to clipboard on click
function copyEmail(email, type) {
    let text = document.createElement("textarea");
    text.value = email;
    document.body.appendChild(text);
    text.select();
    document.execCommand("Copy");
    text.remove();
    document.getElementById(type).innerText = "Copied!";
}