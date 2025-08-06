import fotoAdam from "../assets/images/foto_adam.jpg";
import instagram from "../assets/images/logo/instagram_logo.png";
import linkedin from "../assets/images/logo/linkedin_logo.png";
import github from "../assets/images/logo/github_logo.png";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="text-center">
        <div className="container d-flex flex-column mt-5 mt-md-0">
          <h2>About Me</h2>
          <div className="row">
            <div className="about col-md-12">
              <img
                src={fotoAdam}
                alt="Adam Pratama"
                className="rounded-circle my-4 img-fluid"
                width="200"
              />
              <div className="col-10 text-center mx-auto">
                <p className="d-block mb-3">
                  I'm an aspiring tech professional with interests in Front-End
                  Development, Data Analysis, and IT Support. Over the past
                  year, I've been building responsive web applications using
                  HTML, CSS (Bootstrap), JavaScript, and React.
                </p>
                <p className="d-block mb-3">
                  I enjoy solving problems using technology and continuously
                  develop my skills through personal projects and
                  certifications. While I have a strong foundation in front-end
                  development, I'm currently exploring the world of data by
                  learning tools like Excel, Power BI, and SQL.
                </p>
                <p className="d-block">
                  I'm open to entry-level opportunities in web development, data
                  analysis, IT support, or other tech-related roles—where I can
                  contribute, grow, and learn from real-world experiences.
                </p>
              </div>
            </div>
            <div className="col-md-8 mt-5 mx-auto">
              <h4>Social Media</h4>
              <ul className="d-flex flex-row justify-content-center flex-wrap list-unstyled mt-3 column-gap-md-5 column-gap-3 mb-5">
                <li className="logo">
                  <a
                    href="https://www.instagram.com/adam__pratama"
                    target="_blank">
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="logo-cover"
                    />
                  </a>
                </li>
                <li className="logo">
                  <a
                    href="https://www.linkedin.com/in/adampratama21/"
                    target="_blank">
                    <img
                      src={linkedin}
                      alt="Linkedin"
                      className="logo-contain"
                    />
                  </a>
                </li>
                <li className="logo">
                  <a
                    href="https://github.com/adampratama21"
                    target="_blank">
                    <img
                      src={github}
                      alt="GitHub"
                      className="logo-contain"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8 mt-3 mx-auto"></div>
            <h4>Contact :</h4>
            <ul className="list-unstyled mt-2 mb-5 mx-auto list-group d-flex flex-column align-items-center">
              <li className="btn btn-light list-group-item contact-email">
                <a
                  href="mailto:adam629pratama@gmail.com"
                  className="text-decoration-none">
                  adam629pratama@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
