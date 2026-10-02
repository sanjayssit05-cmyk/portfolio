import Food from "../assets/Food.jpg";
import Hospital from "../assets/Hospital.jpg";
import Education from "../assets/Education.jpg";
import BMS from "../assets/BMS.jpg";
import Banking from "../assets/Banking.jpg";
import calculator from "../assets/calculator.jpeg";
const Projects = () => {
  const projects = [
    { image: Food, title: "Food Delivery App", desc: "React + Node.js + MongoDB", link: "https://food-delivery-lake-alpha.vercel.app/" },
    { image: Hospital, title: "Hospital Management", desc: "React + Node.js + MongoDB", link: "https://hms-eight-mu.vercel.app/" },
    { image: Education, title: "Education Web", desc: "HTML + CSS + Bootstrap + JavaScript", link: "https://sanjayssit05-cmyk.github.io/EduLearn/" },
    { image: BMS, title: "BANK Management System", desc: "React + Axios + REST API", link: "https://bms-react-six.vercel.app/" },
    { image: Banking, title: "Banking Management", desc: "HTML + CSS + JavaScript", link: "https://sanjayssit05-cmyk.github.io/Bank/" },
    { image: calculator, title: "Calculator", desc: "HTML + CSS + JavaScript", link: "https://sanjayssit05-cmyk.github.io/SIMPLE-CALCULATOR/" },
      ];
  return (
    <section id="projects" className="projects-section page-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">A FEW THINGS I&apos;VE MADE</p>
          <h1>Selected <span>work</span><i>.</i></h1>
          <p className="section-intro">A mix of useful tools and real-world experiences, made to work beautifully.</p>
        </div>
        <div className="row g-4">
          {projects.map((p, i) => (
            <div key={p.title} className="col-12 col-sm-6 col-lg-4">
              <article className="project-card">
                <div className="project-image-wrap">
                  <img
                  src={p.image}
                  alt={`${p.title} project preview`}
                  className="project-image"
                  loading="lazy"
                  />
                  <span className="project-number">0{i + 1}</span>
                </div>
                <div className="project-details">
                  <div>
                    <h2>{p.title}</h2>
                    <p>{p.desc}</p>
                  </div>
                <a
                  href={p.link}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${p.title} project`}
                >
                  ↗
                </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;