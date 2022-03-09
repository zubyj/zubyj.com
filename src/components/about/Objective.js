import React, {useState} from 'react';
import GridItem from './AboutItem';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import Alert from '@mui/material/Alert';

function Objective() {

    const [showAlert, setShowAlert] = useState(false);

    const copyEmail = (e) => {
        const email = 'zubyjaved95@gmail.com';
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(email);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }

    const alert = <Alert className="Copy-email-alert" severity="success">Copied to clipboard</Alert>

    const sideA = 
        <div className="Objective">
            <ul>
                <li>
                    Entry level Software Engineer
                </li>
                <li className="Give-me-job">
                    Looking for job opportunities
                </li>
            </ul>
            <ButtonGroup className="Objective-btns" variant="outlined" aria-label="download resume and copy email buttons">
                    <Button 
                    onClick={(e) => e.stopPropagation()}
                    className="Dl-resume-btn"
                    target="_blank"
                    href={require('../../img/Zuby_Javed_Resume.pdf')}
                    >
                        <ArticleIcon />
                        Open Resume
                    </Button>
                    <Button 
                    className="Copy-email-btn"
                    onClick={(e) => copyEmail(e)}
                    >
                        <EmailIcon />
                        Copy Email
                    </Button>
                </ButtonGroup>
                {showAlert && alert}
        </div>

    const sideB = 
        <div className="Objective">
            <p>I'm interested in full-stack engineering. However, as a new grad, I'm open to most SWE related opportunities. Feel free to reach out!</p>
        </div>

    const icon = <CallToActionIcon className="Objective-icon" />

    return (
        <GridItem name="Objective" icon={icon} sideA={sideA} sideB={sideB}/>
    )
}

export default Objective;