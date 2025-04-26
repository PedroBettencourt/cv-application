import Bio from './bio.jsx'
import Education from './education.jsx';
import Work from "./work.jsx";
import Cv from "./cv.jsx"
import "/home/pedro/repos/cv-application/src/styles/app.css"

import { useState } from 'react';

function App() {
    const [personalDetails, setPersonalDetails] = useState({});
    const [degrees, setDegrees] = useState([]);
    const [experiences, setExperiences] = useState([]);

    return (
        <div className="content">
            <div className="sections">
                <Bio personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/>
                <Education degrees={degrees} setDegrees={setDegrees}/>
                <Work experiences={experiences} setExperiences={setExperiences}/>
            </div>
            <Cv personalDetails={personalDetails} degrees={degrees} experiences={experiences}/>
        </div>
    )
}

export default App;