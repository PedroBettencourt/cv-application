import "/home/pedro/repos/cv-application/src/styles/education.css"

function Degree() {
    return (
        <form action="">
            <label htmlFor="school"> School
                <input type="text" id="school" name="school" />
            </label>
            <label htmlFor="degree"> Degree
                <input type="text" id="degree" name="degree" />
            </label>
            <label htmlFor="start"> Start Date
                <input type="text" id="start" name="start" />
            </label>
            <label htmlFor="end"> End Date
                <input type="text" id="end" name="end" />
            </label>
            <label htmlFor="location"> Location
                <input type="text" id="location" name="location" />
            </label>
        </form>
    )
}

function Education() {
    function handleClick() {
        
    }

    // Add multiple schools!!
    return (
        <div>
            <h1>Education</h1>
            <button onClick={handleClick}></button>
            <Degree />
        </div>
    )
}

export default Education;