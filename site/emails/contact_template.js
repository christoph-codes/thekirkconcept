const ContactTemplate = (enteredData) => {
    return `
        <!DOCTYPE html>
        <head><title>New Website Contact Submission</title></head>
        <body style="margin: 0; padding: 0; display: grid; justify-content: center; align-items: center;">
            <div style="text-align: center;">
                <h1>New Contact Submission from ${enteredData.name}</h1>
                <p><b>Name</b><br/><span>${enteredData.name}</span></p>
                <p><b>Email</b><br/><span>${enteredData.email}</span></p>
                <p><b>Content</b><br/><span>${enteredData.content}</span></p>
            </div>
        </body>

    `;
}
module.exports = { ContactTemplate };