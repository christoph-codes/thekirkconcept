const QualifyTemplate = (enteredData) => {
    return `
        <!DOCTYPE html>
        <head><title>New Website Contact Submission</title></head>
        <body style="margin: 0; padding: 0; display: grid; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <h1>New Contact Submission from ${enteredData.fname} ${enteredData.lname} </h1>
                <p><b>Website</b><br/><span>${enteredData.website}</span></p>
                <p><b>Email</b><br/><span>${enteredData.email}</span></p>
                <p><b>Phone Number</b><br/><span>${enteredData.phone}</span></p>
                <p><b>Area to Upgrade</b><br/><span>${enteredData.upgrade}</span></p>
                <p><b>Budget</b><br/><span>${enteredData.budget}</span></p>
                <p><b>Additional Comments</b><br/><span>${enteredData.additionalComments}</span></p>
            </div>
        </body>

    `;
}
module.exports = { QualifyTemplate };