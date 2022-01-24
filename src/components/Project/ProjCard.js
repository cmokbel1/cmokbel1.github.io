import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const ProjCard = (props) => {
  const { project } = props;
  return (
    <>
      <Card color="dark" className="col-sm-3 mb-4 white-border">
        <CardImg variant="top" src={project.img} />
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <CardText>
            {project.description}
          </CardText>
        </CardBody>
        <Button variant="primary" color="info" href={project.gitHub}>GitHub</Button>
        <Button variant="primary" color="warning" href={project.liveSite}>Live View</Button>
    </Card>
    <br />
    </>
  )
}

export default ProjCard
