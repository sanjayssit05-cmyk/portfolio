import Hospital from "../assets/Hospital.jpg"
import calculator from "../assets/calculator.jpeg"
const Projects = () => {
  const projects = [
    { image:"food", title: "Food Delivary App", desc: "React + Node + MongoDB", link: "https://food-delivery-lake-alpha.vercel.app/" },
    { image:"Hospital", title: "Hospital Management System", desc: "React + Node + MongoDB", link: "https://hms-eight-mu.vercel.app/" },
    { image:"EduWeb", title: "Education Web", desc: "HTML +css + Bootstrap + javaScript", link: "https://sanjayssit05-cmyk.github.io/EduLearn/" },
    { image:"BMS",title: "BMS", desc: "React + Axios, API", link: "https://bms-react-six.vercel.app/" },
    { image:"Banking", title: "Banking Banking Management system", desc: "HTML + CSS + Javascript", link: "https://sanjayssit05-cmyk.github.io/Bank/" },
    { image:calculator, title: "Calculator", desc: "HTML + CSS + JS", link: "https://sanjayssit05-cmyk.github.io/SIMPLE-CALCULATOR/" },
      ];
  return (
    <section id="projects" className="p- text-white text-center">
      <h2 className="mb-2">Projects</h2>
      
      <div className="container align-content-md-center ">
        <div className="row g-3">
          {projects.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card  shadow text-dark p-3 d-flex  flex-column ">
                
                <img id="p.image"
                  src={p.image}
                  // alt={p.title}
                  className=" card-header  img-fluid rounded  h-100 w-100  "
                />
                <h5 className="card-body fw-bolder text-capitalize">{p.title}</h5>
                <p className="card-title">{p.desc}</p>



                <a
                  href={p.link}

                  className="btn btn-primary mt-auto"
                >
                  View
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;