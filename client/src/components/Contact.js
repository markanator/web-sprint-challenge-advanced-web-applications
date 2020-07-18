import React, { useState } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';


function Contact () {
    const [message,setMessage] = useState({
        name: '',
        email: '',
        message:''
    })

    const [success,setSuccess] = useState(false);
    const [fail,setFail] = useState(false);


    const handleChange = e => {
        setMessage({
            ...message,
            [e.target.name]: e.target.value
        });
    };

    const handdleContactSubmit = (e)=>{
        e.preventDefault();
        if(isFormValid(message)){
            setSuccess(true)
            setTimeout(()=>{
                setSuccess(false);
            },1200);
        } else {
            setFail(true);
            setTimeout(()=>{
                setFail(false);
            },2000);
        }
    }

    const isFormValid = ({name,email,message}) =>{
        return name && email && message;
    }

    return (
        <div className='Contact'>
            <Form onSubmit={handdleContactSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <input
                        type='text'
                        name='name'
                        onChange={handleChange}
                        value={message.name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        onChange={handleChange}
                        value={message.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Message</label>
                    <input
                        type='text'
                        name='message'
                        onChange={handleChange}
                        value={message.message}
                    />
                </Form.Field>
                <Button>Submit</Button>
            </Form>

            {success?<Message success header="Message sent successfully!"
            content='Thank you!'/>: null}
            {fail?<Message negative header="Please fill out form!"
            content='Thank you!'/>: null}
        </div>
    )
}

export default Contact;