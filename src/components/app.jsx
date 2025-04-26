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

    // Testing
    function handleExample() {
        setPersonalDetails({fullName: "Tomas Meadows", email:"tomas@meadows.com", phoneNumber: "123-456-789", address: "3820 Indiana Avenue"});
        setDegrees([{id: crypto.randomUUID(), degree: "Sociology", school: "University of Sociology", startDate: "20-02-2010", endDate: "10-03-2013", location: "Lisbon"} ,
            {id: crypto.randomUUID(), degree: "Political Science", school: "University of Porto", startDate: "20-09-2015", endDate: "10-10-2017", location: "Porto"}]);
        setExperiences([{id: crypto.randomUUID(), name: "Wood Company", title: "Carpenter", startDate: "15-05-2018", endDate: "current", location: "Aveiro", description: "Working making furniture out of wood"}]);
    }

    function handleDelete() {
        setPersonalDetails({});
        setDegrees([]);
        setExperiences([]);
    }

    return (
        <>
            <div className="sections">
                <Bio personalDetails={personalDetails} setPersonalDetails={setPersonalDetails}/>
                <Education degrees={degrees} setDegrees={setDegrees}/>
                <Work experiences={experiences} setExperiences={setExperiences}/>
                <div className="example">
                    <button onClick={handleDelete} id="delete">Delete</button>
                    <button onClick={handleExample}>Example</button>
                </div>
            </div>
            <Cv personalDetails={personalDetails} degrees={degrees} experiences={experiences}/>
        </>
    )
}

export default App;