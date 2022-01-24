import { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';

class Contact extends Component {
render() {
 return (
   <div className="container">
     <Form>
       <FormGroup>
         <Label for="name">Name</Label>
         <Input id="name" name="name" type="text" placeholder="First Name Last Name"></Input>
       </FormGroup>
       <FormGroup>
         <Label for="name">e-mail</Label>
         <Input id="email" name="email" type="text" placeholder="firstname@email.com"></Input>
       </FormGroup>
       <FormGroup>
         <Label for="name">Message</Label>
         <Input id="message" name="message" type="textarea" placeholder="Hey Claude really loved what I saw in your portfolio and your resume! We would love to hire you on for our upcoming project."></Input>
       </FormGroup>
       <Button>Send</Button>
     </Form>
   </div>
 )
}
}

export default Contact