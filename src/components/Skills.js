import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: 'fab fa-react' },
        { name: 'JavaScript', level: 90, icon: 'fab fa-js-square' },
        { name: 'TypeScript', level: 90, icon: 'fas fa-code' },
        { name: 'CSS/SCSS', level: 100, icon: 'fab fa-css3-alt' },
        { name: 'HTML5', level: 90, icon: 'fab fa-html5' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, icon: 'fab fa-node-js' },
        { name: 'Express', level: 90, icon: 'fas fa-server' },
        { name: 'MongoDB', level: 75, icon: 'fas fa-database' },
        { name: 'PostgreSQL', level: 70, icon: 'fas fa-database' },
        { name: 'REST APIs', level: 85, icon: 'fas fa-plug' },
        { name: 'PHP', level: 90, icon: 'fa-solid fa-file-code' }

      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
        { name: 'Docker', level: 70, icon: 'fab fa-docker' },
        { name: 'AWS', level: 65, icon: 'fab fa-aws' },
        { name: 'Canva', level: 100, icon: 'fab fa-figma' },
        { name: 'VS Code', level: 90, icon: 'fas fa-code' }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <i className={skill.icon}></i>
                      <span>{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;