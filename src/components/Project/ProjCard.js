import { Card, Button } from 'reactstrap'

const ProjCard = (props) => {
  const { project } = props;
  return (
    <Card border="dark" background-color="light">
      <Card.Img variant="top" src={project.img} />
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