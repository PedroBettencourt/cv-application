import "/home/pedro/repos/cv-application/src/styles/cv.css"

function Cv({personalDetails}) {
    return (
        <div>
            <h1>Cv</h1>
            <h2>Personal Details</h2>
            <h3>{personalDetails.fullName}</h3>
            <h3>{personalDetails.email}</h3>
            <h3>{personalDetails.phoneNumber}</h3>
            <h3>{personalDetails.address}</h3>
        </div>
    )
}

export default Cv;