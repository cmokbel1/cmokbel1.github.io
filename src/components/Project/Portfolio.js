import ProjCard from './ProjCard'

const Portfolio = (props) => {
  const {projects} = props;
  return (
    <div className="row">
      {projects.map((project, idx) => <ProjCard key={idx} project={project}/>)}
    </div>
  )
}

export default Portfolio;