import * as React from 'react';
require('./contact.scss');

const Contact = (props) => {
    return (
        <div className="contact-styles">
            <form action="">
                <input type="email" placeholder='your email'/>
                <input type="text" placeholder='subject' />
                <textarea name="message" placeholder="Your Message" cols="30" rows="10"></textarea>
                <button disabled="disabled">Send</button>
            </form>
        </div>
    )
}

export default Contact;
