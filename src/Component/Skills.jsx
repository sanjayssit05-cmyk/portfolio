import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiJquery
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
    { name: "jQuery", icon:<SiJquery size={40} color="#0769AD" />},
    { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "Node", icon: <FaNodeJs size={40} color="#339933" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
    { name: "Express", icon: <SiExpress size={40} color="#FFFFFF" /> },
  ];

  return (
    <section id="skills" className="p-5 text-center text-white ">
      <p className="eyebrow">TOOLS OF THE TRADE</p>
      <h2 className="mb-4">My toolkit<i>.</i></h2>

      <div id="contain" className="container ">
        <div className="row mt-5">
          {skills.map((skill, i) => (
            <div key={i} className="col-md-3 mb-3 ">
              <div id="card" className="card p-5 shadow d-flex align-items-center justify-content-center  text-white">
                {skill.icon}
                <h5 className="mt-3">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;