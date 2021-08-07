import { useState } from 'react';
import Layout from '../components/Layout';

const HireMe = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')

        let data = {
            name, 
            message,
            email
        }

        console.log(data)

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Responsive received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
            }
        })
    }

    return (
        submitted ? 
        
        <Layout>
            <h1>Sent!</h1>
        </Layout> : 

        <Layout title="Contact">
            <div className="container">
                <form className="main" onClick={(e) => {handleSubmit(e)}}>

                    <div className="inputGroup" >
                        < label htmlFor='name'>Name</label>
                        < input 
                            required 
                            type='text' 
                            value={name} 
                            onChange={(e) => {setName(e.target.value)}} 
                            name='name' 
                            className="inputField"
                        />  
                    </div>  

                    < div className="inputGroup" >
                        < label htmlFor='email'>Email</label>
                        < input 
                            required 
                            type='email' 
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}} 
                            name='email' 
                            className="inputField"
                        />
                    </div>  

                    < div className="inputGroup" >
                        < label htmlFor='message'>Message</label>
                        < input 
                            required 
                            type='text' 
                            value={message}
                            onChange={(e) => {setMessage(e.target.value)}} 
                            name='message' 
                            className="inputField"
                        />
                    </div>  
                    < input type='submit' value="Submit"/>

                </form >

                <style jsx>{`
                    .container {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .main{
                        padding: 5rem 0;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    .inputGroup {
                        height: 50%;
                        width: 200%;
                        display: flex;
                        flex-direction: column;
                        margin: 10px 0;
                    }
                    .inputLabel {
                        text-align: left;
                    }
                    .inputField {
                        height: 30px;
                    }
                `}</style>
            </div>
        </Layout>
        

            
    )
}


export default HireMe