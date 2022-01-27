import { useState } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

function ContactForm() {

  const [contactState, setContactState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = ({ target: { name, value } }) => setContactState({ ...contactState, [name]: value })



  const handleSubmit = (event) => {
    event.preventDefault();
    alert(contactState);
  }

 return (
   <>
   <h5>Contact directly: claudemokbel@gmail.com</h5>
   <br />
   <div className="container">
     <Form>
       <FormGroup>
         <Label for="name">Name</Label>
         <Input id="name" name="name" onChange={handleInputChange} type="text" value={contactState.name}></Input>
       </FormGroup>
       <FormGroup>
         <Label for="name">e-mail</Label>
           <Input id="email" name="email" onChange={handleInputChange} type="text" value={contactState.email}></Input>
       </FormGroup>
       <FormGroup>
         <Label for="name">Message</Label>
           <Input id="message" name="message" onChange={handleInputChange} type="textarea" value={contactState.message} ></Input>
       </FormGroup>
       <Button onClick={handleSubmit} disabled={contactState.name<1 && contactState.email <1 && contactState.message<1}>Send</Button>
     </Form>
     <br />
   </div>
   </>
 )
}


export default ContactForm