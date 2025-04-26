import "/home/pedro/repos/cv-application/src/styles/cv.css"

function Bio({personalDetails}) {
    return (
        <div className="bio">
            <h3>{personalDetails.fullName}</h3>
            <h3>{personalDetails.email}</h3>
            <h3>{personalDetails.phoneNumber}</h3>
            <h3>{personalDetails.address}</h3>
        </div>
    )   
}

function Education({degree}) {
    return (
        <div className="education">
            <h3 id="degree">{degree.degree}</h3>
            <h3 id="school">{degree.school}</h3>
            <h3 id="date">{degree.startDate} - {degree.endDate}</h3>
            <h3 id="location">{degree.location}</h3>
        </div>
    )
}

function Work({experience}) {
    return (
        <div className="work">
            <h3 id="name">{experience.name}</h3>
            <h3 id="title">{experience.title}</h3>
            <h3 id="date">{experience.startDate} - {experience.endDate}</h3>
            <h3 id="location">{experience.location}</h3>
            <h3 id="description">{experience.description}</h3>
        </div>
    )
}

function Cv({personalDetails, degrees, experiences}) {
    return (
        <div className="cv">
            <Bio personalDetails={personalDetails}/>
            <div className="experience">
                <h2>Education</h2>
                {degrees.map(degree => <Education key={degree.id} degree={degree}/>)}
                <h2>Work Experience</h2>
                {experiences.map(experience => <Work key={experience.id} experience={experience} />)}
            </div>
        </div>
    )
}

export default Cv;