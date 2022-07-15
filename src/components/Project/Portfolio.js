import ProjCard from './ProjCard'
import './portfolio.css'

const Portfolio = (props) => {
  const { projects } = props;
  return (
    <>
      <div className="title container"><h1>Claude Mokbel</h1>
        <p>A recent graduate of the UCI Continued Education Full Stack Web Developer bootcamp.
          I have 8 months of experience building web applications in HTML, CSS, and Javascript with mobile responsivity.
          I am currently focused on learning data structures as well as algorithms, and improving my javascript skills.
        </p>
      </div>
      <h3 className="title"><strong><u>Projects</u></strong></h3>
      <br></br>
      <div className="row justify-content-center text-center mx-auto">
        {projects.map((project, idx) => <ProjCard key={idx} project={project} />)}
      </div>
    </>
  )
}

export default Portfolio;