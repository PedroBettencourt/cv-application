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
        <div className="form">
            <h1>Personal Details</h1>
            <form action="">
                <label htmlFor="fullName"> Full Name 
                    <input type="text" id="fullName" name="fullName" onChange={onChangeFullName} defaultValue={personalDetails.fullName} />
                </label>
                <label htmlFor="email">Email 
                    <input type="email" id="email" name="email" onChange={onChangeEmail} defaultValue={personalDetails.email} />
                </label>
                <label htmlFor="phone">Phone Number 
                    <input type="tel" id="phone" name="phoneNumber" onChange={onChangePhoneNumber} defaultValue={personalDetails.phoneNumber} />
                </label>
                <label htmlFor="address">Address 
                    <input type="text" id="address" name="address" onChange={onChangeAddress} defaultValue={personalDetails.address} />
                </label>
            </form>
        </div>
    )
}

export default Bio;