import selfie from '../../selfie.png';

const About = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={selfie} className="App-logo" alt="Claude Mokbel" />
        <h1>
          About Me
        </h1>
        <h2> Claude Mokbel</h2>
        <p> I am a full-stack web developer currently based in Southern California. I've been studying web development for roughly 2 years and intend to continue my studies long into the future. I work effectively with others and display strong leadership skills when needed. Capacity to meet strict deadlines, delegate tasks, and be of assistance to team members at a moments notice.</p>
      </header>
    </div>
  )
}

export default About;