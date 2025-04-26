import "/home/pedro/repos/cv-application/src/styles/cv.css"

function Bio({personalDetails}) {
    return (
        <div className="personalDetails">
            <h3>{personalDetails.fullName}</h3>
            <h3>{personalDetails.email}</h3>
            <h3>{personalDetails.phoneNumber}</h3>
            <h3>{personalDetails.address}</h3>
        </div>
    )   
}

function Education({degree}) {
    return (
        <div className="degree">
            <h3>{degree.degree}</h3>
            <h3>{degree.school}</h3>
            <h3>{degree.startDate}</h3>
            <h3>{degree.endDate}</h3>
            <h3>{degree.location}</h3>
        </div>
    )
}

function Work({experience}) {
    return (
        <div className="experience">
            <h3>{experience.name}</h3>
            <h3>{experience.title}</h3>
            <h3>{experience.startDate}</h3>
            <h3>{experience.endDate}</h3>
            <h3>{experience.location}</h3>
            <h3>{experience.description}</h3>
        </div>
    )
}

function Cv({personalDetails, degrees, experiences}) {
    return (
        <div>
            <h1>Cv</h1>
            <h2>Personal Details</h2>
            <Bio personalDetails={personalDetails}/>
            <h2>Education</h2>
            {degrees.map(degree => <Education key={degree.id} degree={degree}/>)}
            <h2>Work Experience</h2>
            {experiences.map(experience => <Work key={experience.id} experience={experience} />)}
        </div>
    )
}

export default Cv;