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
    swal(`name: ${contactState.name},
      email: ${contactState.email},
      message: ${contactState.message}`);
  }

 return (
   <>
   <h5>mail: claudemokbel@gmail.com</h5>
   <h6>tel: 714-362-7640</h6>
   <br />
   <div className="container">
     <Form>
       <FormGroup>
         <Label for="name">Name</Label>
         <Input 
         id="name" 
         name="name" 
         onChange={handleInputChange} 
         type="text" 
         value={contactState.name} 
         required></Input>
       </FormGroup>
       <FormGroup>
         <Label for="name">e-mail</Label>
           <Input 
           id="email" 
           name="email" 
           onChange={handleInputChange} 
           type="text" 
           value={contactState.email} 
           required></Input>
       </FormGroup>
       <FormGroup>
         <Label for="name">Message</Label>
           <Input 
           id="message" 
           name="message" 
           onChange={handleInputChange} 
           type="textarea" 
           value={contactState.message} 
           required></Input>
       </FormGroup>
         <Button 
         disabled={contactState.name < 1 || contactState.email < 1 || contactState.message < 1} 
         onClick={handleSubmit}>Send</Button>
     </Form>
     <br />
   </div>
   </>
 )
}

export default ContactForm