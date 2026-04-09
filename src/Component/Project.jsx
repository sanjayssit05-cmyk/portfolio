import calculator from "../assets/calculator.jpeg"
const Projects = () => {
  const projects = [
    { image:"", title: "E-Commerce", desc: "React + Node + MongoDB", link: "" },
    { image:"", title: "Chat App", desc: "Socket.io + MERN", link: "" },
    { image:"", title: "Food Delivery", desc: "React + Bootstrap", link: "" },
    { image:"",title: "Education", desc: "HTML + Bootstrap + Css", link: "" },
    { image:"", title: "Restaurant", desc: "React + Bootstrap", link: "" },
    { image:calculator, title: "Calculator", desc: "HTML + CSS + JS", link: "https://sanjayssit05-cmyk.github.io/SIMPLE-CALCULATOR/" },
      ];

  return (
    <section id="projects" className="p-5  text-white text-center">
      <h2 className="mb-4">Projects</h2>

      <div className="container align-content-md-center">
        <div className="row g-3">
          {projects.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card  shadow text-dark p-3 d-flex  flex-column h-100 w-100">
                
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