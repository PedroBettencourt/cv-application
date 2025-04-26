import "/home/pedro/repos/cv-application/src/styles/education.css"

import { useState } from "react";

function DegreeForm({degreeFormShow, setDegreeFormShow, degrees, setDegrees}) {

    const toEditDegree = degreeFormShow[1];

    function handleSubmit(e) {
        setDegreeFormShow([false, ""]);
        e.preventDefault();
        
        // Get values from form
        const degree = e.target.degree.value;
        const school = e.target.school.value;
        const startDate = e.target.start.value
        const endDate = e.target.end.value;
        const location = e.target.location.value;
        
        // Change array if degree already exists or add new degree to array
        if (toEditDegree.length !== 0) {
            const newDegrees = degrees.map((item) => {
                if(item.id === toEditDegree.id) {
                    item.degree = degree;
                    item.school = school;
                    item.startDate = startDate;
                    item.endDate = endDate;
                    item.location = location;
                }
                return item;
            })
            setDegrees(newDegrees)

        } else {
            const id = crypto.randomUUID();
            setDegrees([...degrees, {id: id, degree: degree, school: school, startDate: startDate, endDate: endDate, location: location}])
        }
    }

    function handleDelete() {
        setDegreeFormShow([false, ""])
        const newDegrees = degrees.filter(item => item.id !== toEditDegree.id)
        setDegrees(newDegrees)
    }

    function handleEdit() {
        setDegreeFormShow([false, ""])
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="degree"> Degree
                <input type="text" id="degree" name="degree" defaultValue={toEditDegree.degree}/>
            </label>
            <label htmlFor="school"> School
                <input type="text" id="school" name="school" defaultValue={toEditDegree.school} />
            </label>
            <label htmlFor="start"> Start Date
                <input type="text" id="start" name="start" defaultValue={toEditDegree.startDate} />
            </label>
            <label htmlFor="end"> End Date
                <input type="text" id="end" name="end" defaultValue={toEditDegree.endDate} />
            </label>
            <label htmlFor="location"> Location
                <input type="text" id="location" name="location" defaultValue={toEditDegree.location} />
            </label>
            <div className="buttons">
            <button onClick={handleDelete} id="delete">Delete</button>
                <button onClick={handleEdit} id="cancel">Cancel</button>
                <button type="submit" id="save">Save</button>
            </div>
        </form>
    )
}


function Education({degrees, setDegrees}) {
    const [degreeFormShow, setDegreeFormShow] = useState([]);

    function handleShow() {
        setDegreeFormShow([true, ""]);
    }

    function handleClickDegree(index) {
        setDegreeFormShow([true, degrees[index]]);
    }


    function renderElement() {
        if (degreeFormShow[0]) {
            return (
                <DegreeForm degreeFormShow={degreeFormShow} setDegreeFormShow={setDegreeFormShow}
                    degrees={degrees} setDegrees={setDegrees}/>
            )
        } else {
            return (
                <>
                    <ul>
                        {degrees.map((degree, index) => <li key={degree.id} onClick={() => handleClickDegree(index)}>{degree.degree}</li>)}
                    </ul>
                    <button onClick={handleShow}>+ Education</button>
                </>
            )
        }
    }

    return (
        <div className="form">
            <h1>Education</h1>
            {renderElement()}
        </div>
    )
}

export default Education;