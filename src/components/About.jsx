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
            <div className="tentang col-md-12">
              <img
                src={fotoAdam}
                alt="Adam Pratama"
                className="rounded-circle my-4 img-fluid"
                width="200"
              />
              <p className="col-10 text-justify mx-auto">
                I am seeking an opportunity to start my career as a front-end
                web developer. I am eager to further develop my skills in web
                development, with a strong focus on front-end development.
              </p>
            </div>
            <div className="col-md-8 mt-5 mx-auto">
              <h4>Social Media</h4>
              <ul className="d-flex flex-row justify-content-center flex-wrap list-unstyled mt-3 column-gap-md-5 column-gap-3">
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
          </div>
        </div>
      </section>
    </>
  );
}