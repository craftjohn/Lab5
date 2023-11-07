import React from 'react';


function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-3">
                    <h1>Contact Me</h1>
                    <form>
                        <div className="form-group p-3">
                            <label htmlFor="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="form-group p-3">
                            <label htmlFor="exampleFormControlInput1">Phone number</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="(555)-123-4567" />
                        </div>
                        <div className="form-group p-3">
                            <label htmlFor="exampleFormControlTextarea1">Enter Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message here"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;