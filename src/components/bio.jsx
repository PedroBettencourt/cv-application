import "/home/pedro/repos/cv-application/src/styles/bio.css";

function Bio({personalDetails, setPersonalDetails}) {

    const onChangeFullName = (e) => {
        setPersonalDetails({...personalDetails, fullName: e.target.value});
    }

    const onChangeEmail = (e) => {
        setPersonalDetails({...personalDetails, email: e.target.value});
    }

    const onChangePhoneNumber = (e) => {
        setPersonalDetails({...personalDetails, phoneNumber: e.target.value});
    }
    
    const onChangeAddress = (e) => {
        setPersonalDetails({...personalDetails, address: e.target.value});
    }

    return (
        <div>
            <h1>Personal Details</h1>
            <form action="">
                <label htmlFor="fullName"> Full Name 
                    <input type="text" id="fullName" name="fullName" onChange={onChangeFullName}/>
                </label>
                <label htmlFor="email">Email 
                    <input type="email" id="email" name="email" onChange={onChangeEmail} />
                </label>
                <label htmlFor="phone">Phone Number 
                    <input type="tel" id="phone" name="phoneNumber" onChange={onChangePhoneNumber} />
                </label>
                <label htmlFor="address">Address 
                    <input type="text" id="address" name="address" onChange={onChangeAddress} />
                </label>
            </form>
        </div>
    )
}

export default Bio;