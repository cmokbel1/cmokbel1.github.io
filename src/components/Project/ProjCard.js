import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const ProjCard = (props) => {
  const { project } = props;
  return (
    <>
      <Card border="dark" background-color="light" className="col-sm-4">
        <CardImg variant="top" src={project.img} height="200px" width="100%" />
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <CardText>
            {project.description}
          </CardText>
        </CardBody>
        <Button variant="primary" color="info" href={project.gitHub}>GitHub</Button>
        <Button variant="primary" color="danger" href={project.liveSite}>Live View</Button>
    </Card>
    </>
  )
}

export default ProjCard
