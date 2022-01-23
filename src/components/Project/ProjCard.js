import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const ProjCard = (props) => {
  const { project } = props;
  return (
    <>
      <Card border="dark" background-color="light" className="col-sm-3">
      <CardImg variant="top" src={project.img} height="75px" width="75px" />
      <CardBody>
        <CardTitle>{project.title}</CardTitle>
        <CardText>
         {project.description}
        </CardText>
          <Button variant="primary" color="info" href={project.gitHub}>GitHub</Button>
          <br />
          <Button variant="primary" color="danger" href={project.liveSite}>Live View</Button>
      </CardBody>
    </Card>
    </>
  )
}

export default ProjCard
