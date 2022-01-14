import { Button, Form } from "react-bootstrap"
// this does not display yet, I have tested. Can someone take a look?
function baseChat() {
    
    return (
        <>

            <Form>
                <Form.Control type="text" placeholder="enter your message here"/>
                <Button>Send</Button>
            </Form>
        </>
    )
}

export default baseChat
