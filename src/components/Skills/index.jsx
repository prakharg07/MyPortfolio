import "./style.css";

const About = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>JavaScript</li>
        </div>
        <div>
          <strong>Libraries:</strong>
          <li>OpenGL</li>
          <li>React.js</li>
        </div>
        <div>
          <strong>Tools:</strong>
          <li>Webpack</li>
          <li>Git & Github</li>
        </div>
      </div>
    </div>
  );
};

export default About;