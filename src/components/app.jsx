import Bio from './bio.jsx'
import Education from './education.jsx';
import Work from "./work.jsx";
import Cv from "./cv.jsx"
import "/home/pedro/repos/cv-application/src/styles/app.css"

import { useState } from 'react';

function App() {
    const [personalDetails, setPersonalDetails] = useState({fullName:""});

    return (
        <div className="content">
            <div className="sections">
                <Bio personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/>
                <Education />
                <Work />
            </div>
            <Cv personalDetails={personalDetails} />
        </div>
    )
}

export default App;