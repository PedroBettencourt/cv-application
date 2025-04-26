import "/home/pedro/repos/cv-application/src/styles/work.css"

import { useState } from "react";

function ExperienceForm({experienceFormShow, setExperienceFormShow, experiences, setExperiences}) {

    const toEditExperience = experienceFormShow[1];

    function handleSubmit(e) {
        setExperienceFormShow([false, ""]);
        e.preventDefault();
        
        // Get values from form
        const name = e.target.name.value;
        const title = e.target.title.value;
        const startDate = e.target.start.value
        const endDate = e.target.end.value;
        const location = e.target.location.value;
        const description = e.target.description.value;
        
        // Change array if experience already exists or add new experience to array
        if (toEditExperience.length !== 0) {
            const newExperiences = experiences.map((item) => {
                if(item.id === toEditExperience.id) {
                    item.name = name;
                    item.title = title;
                    item.startDate = startDate;
                    item.endDate = endDate;
                    item.location = location;
                    item.description = description;
                }
                return item;
            })
            setExperiences(newExperiences)

        } else {
            const id = crypto.randomUUID();
            setExperiences([...experiences, {id: id, name: name, title: title, startDate: startDate, endDate: endDate, 
                location: location, description: description}])
        }
    }

    function handleDelete() {
        setExperienceFormShow([false, ""])
        const newExperiences = experiences.filter(item => item.id !== toEditExperience.id)
        setExperiences(newExperiences)
    }

    function handleEdit() {
        setExperienceFormShow([false, ""])
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Company Name
                <input type="text" id="name" name="name" defaultValue={toEditExperience.name}/>
            </label>
            <label htmlFor="title"> Job Title
                <input type="text" id="title" name="title" defaultValue={toEditExperience.title} />
            </label>
            <label htmlFor="start"> Start Date
                <input type="text" id="start" name="start" defaultValue={toEditExperience.startDate} />
            </label>
            <label htmlFor="end"> End Date
                <input type="text" id="end" name="end" defaultValue={toEditExperience.endDate} />
            </label>
            <label htmlFor="location"> Location
                <input type="text" id="location" name="location" defaultValue={toEditExperience.location} />
            </label>
            <label htmlFor="description"> Description
                <input type="textarea" id="description" name="description" defaultValue={toEditExperience.description} />
            </label>
            <div className="buttons">
                <button onClick={handleDelete} id="delete">Delete</button>
                <button onClick={handleEdit} id="cancel">Cancel</button>
                <button type="submit" id="save">Save</button>
            </div>
        </form>
    )
}


function Work({experiences, setExperiences}) {
    const [experienceFormShow, setExperienceFormShow] = useState([]);

    function handleShow() {
        setExperienceFormShow([true, ""]);
    }

    function handleClickExperience(index) {
        setExperienceFormShow([true, experiences[index]]);
    }


    function renderElement() {
        if (experienceFormShow[0]) {
            return (
                <ExperienceForm experienceFormShow={experienceFormShow} setExperienceFormShow={setExperienceFormShow}
                    experiences={experiences} setExperiences={setExperiences}/>
            )
        } else {
            return (
                <>
                    <ul>
                        {experiences.map((experience, index) => <li key={experience.id} onClick={() => handleClickExperience(index)}>{experience.name}</li>)}
                    </ul>
                    <button onClick={handleShow}>+ Experience</button>
                </>
            )
        }
    }

    return (
        <div className="form">
            <h1>Work Experience</h1>
            {renderElement()}
        </div>
    )
}

export default Work;