import { useState } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import swal from 'sweetalert';

function ContactForm() {

  const [contactState, setContactState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = ({ target: { name, value } }) => setContactState({ ...contactState, [name]: value })



  const handleSubmit = (event) => {
    event.preventDefault();
    if(!contactState.name) {
      swal("Name Required")
    }
    else if (!contactState.email) {
      swal("Email Required")
    }
    else if(!contactState.message) {
      swal("Message Required")
    } else {
    swal(`name: ${contactState.name},
      email: ${contactState.email},
      message: ${contactState.message}`);
    }
  }

 return (
   <>
   <h5>Contact directly: claudemokbel@gmail.com</h5>
   <br />
   <div className="container">
     <Form>
       <FormGroup>
         <Label for="name">Name</Label>
         <Input id="name" name="name" onChange={handleInputChange} type="text" value={contactState.name} required></Input>
       </FormGroup>
       <FormGroup>
         <Label for="name">e-mail</Label>
           <Input id="email" name="email" onChange={handleInputChange} type="text" value={contactState.email} required></Input>
       </FormGroup>
       <FormGroup>
         <Label for="name">Message</Label>
           <Input id="message" name="message" onChange={handleInputChange} type="textarea" value={contactState.message} required></Input>
       </FormGroup>
         <Button onClick={handleSubmit}>Send</Button>
     </Form>
     <br />
   </div>
   </>
 )
}

// disabled={contactState.name < 1 || contactState.email < 1 || contactState.message < 1} for button for later, when the program is over, for homework submission an alert is required for the fields, but isntead id like to have the disabled feature.

export default ContactForm