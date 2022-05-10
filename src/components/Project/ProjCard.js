import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const ProjCard = (props) => {
  const { project } = props;
  return (
    <>
      <Card className="col-sm-3 border-primary mb-3 small">
      <CardTitle className="card-header">{project.title}</CardTitle>
        <CardImg className= "maxHeight" variant="top" src={project.img} />
        <CardBody className="scroll">
          <CardText>
            {project.description}
          </CardText>
        </CardBody>
        <div className="text-center btn-group my-2">
        <Button variant="primary" color="primary" className="btn btn-primary mr-2" href={project.gitHub}>GitHub</Button>
        <Button variant="secondary" className="btn btn-primary" href={project.liveSite}>Live View</Button>
        </div>
    </Card>
    <br />
    </>
  )
}

export default ProjCard
