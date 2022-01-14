import { Button, Form } from "react-bootstrap"
import { useState } from "react";
// this does not display yet, I have tested. Can someone take a look?
function BaseChat() {
    const [messageArray, setMessageArray] = useState([])
    const [response, setResponse] = useState({message:''})
    const handleSubmit = (e) => {
        e.preventDefault();
       setMessageArray([...messageArray,response])
    }
    const updateField = (e) => {
        setResponse({
          ...response,
          [e.target.name]: e.target.value
        })
      }
    
    return (
        <>
            {messageArray.map((messageList, i)=> {
                return (
                    <div  key = {i}>{messageList.message}</div>
                )
            }
            
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Control type="text" placeholder="enter your message here" onChange={updateField} name="message"/>
                <Button onClick={handleSubmit}>Send</Button>
            </Form>
        </>
    )
}

export default BaseChat
