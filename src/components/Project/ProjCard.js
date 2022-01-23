import { Card, Button } from 'reactstrap'

const ProjCard = (props) => {
  const { project } = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
         {project.description}
        </Card.Text>
        <Button variant="primary">{project.Github}</Button>
        <Button variant="primary">{project.LiveSite}</Button>
      </Card.Body>
    </Card>
  )
}

export default ProjCard