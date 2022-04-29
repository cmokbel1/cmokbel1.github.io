import ProjCard from './ProjCard'
import './portfolio.css'

const Portfolio = (props) => {
  const {projects} = props;
  return (
    <>
    <div className="title container"><h1>Claude Mokbel</h1>
    <p>A recent graduate of the UCI Continued Education Full Stack Web Developer bootcamp. I have 6 months of experience building web applications in HTML, CSS, and Javascript. I am currently focused on honing my skills in React.js, learning patterns as well as algorithms, and database functionality in web applications.</p>
    </div>
    <h3 className="title"><strong><u>Projects</u></strong></h3>
    <br></br>
    <div className="row justify-content-center">
      {projects.map((project, idx) => <ProjCard key={idx} project={project}/>)}
    </div>
    </>
  )
}

export default Portfolio;