import { skills } from "./SkillsData";

function Technical() {
  return (
    <div className="technical-card">
      <h2>Technical Arsenal</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div className="skill-box" key={index} style={{ "--hover-color": skill.color }}>
              <Icon
                className="icon"
                style={{ color: skill.color }}
              />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Technical;