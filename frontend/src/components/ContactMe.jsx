import React from 'react';

function ContactMe() {
    return (
        <div className="container">
            <h1>Contact Me</h1>
            <div className="flex">
                <div className="contact-info">
                    <h4>Contact Information</h4>
                    <p>Phone: 123-456-7890</p>
                    <p>Email: [john.doe@example.com](mailto:john.doe@example.com)</p>
                    <p>Address: 123 Main St, Anytown, USA</p>
                    <p>Social Media: [LinkedIn](https://www.linkedin.com/in/john-doe/) | [GitHub](https://github.com/johndoe)</p>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;