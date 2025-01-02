export default function Skills() {
  return (
    <>
      <section
        id="skills"
        className="my-5">
        <div className="container mt-5 mt-md-0">
          <h2 className="text-center">Skill & Techonologies</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <h4 className="mb-3">Tech Learned :</h4>
              <ul className="d-flex flex-row justify-content-center flex-wrap list-unstyled mb-5 gap-2">
                <li className="logo">
                  <img
                    src="/images/logo/html.png"
                    alt="HTML"
                    className="logo-cover"
                  />
                </li>
                <li className="logo">
                  <img
                    src="/images/logo/css.png"
                    alt="CSS"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src="/images/logo/javascript.png"
                    alt="JavaScript"
                    className="logo-cover"
                  />
                </li>
                <li className="logo">
                  <img
                    src="/images/logo/bootstrap.png"
                    alt="Bootstrap"
                    className="logo-cover"
                  />
                </li>
                <li className="logo">
                  <img
                    src="/images/logo/nodejs.png"
                    alt="NodeJS"
                    className="logo-cover"
                  />
                </li>
                <li className="logo">
                  <img
                    src="/images/logo/expressjs.png"
                    alt="ExpressJS"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src="/images/logo/react.png"
                    alt="React"
                    className="logo-contain"
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="mb-3">Tools :</h4>
              <ul className="d-flex flex-row justify-content-center flex-wrap list-unstyled mb-5 gap-2">
                <li className="logo">
                  <img
                    src="/images/logo/visual-studio-code.png"
                    alt="Visual Studio Code"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src="/images/logo/git.png"
                    alt="Git"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src="/images/logo/github_logo.png"
                    alt="GitHub"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src="/images/logo/npm.png"
                    alt="npm"
                    className="logo-cover"
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h4 className="mb-2">Other Skills :</h4>
              <ul className="d-flex flex-row justify-content-center flex-wrap list-unstyled mb-5 gap-2">
                <li className="logo">
                  <img
                    src="/images/logo/word.png"
                    alt="Ms. Word"
                    className="logo-cover"
                  />
                </li>
                <li className="logo">
                  <img
                    src="/images/logo/excel.png"
                    alt="Ms. Excel"
                    className="logo-contain"
                  />
                </li>
                <li className="logo">
                  <img
                    src="/images/logo/power-point.png"
                    alt="Ms. PowerPoint"
                    className="logo-cover"
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-12 text-center">
              <h4 className="mb-3">Languages :</h4>
              <ul className="list-unstyled mb-4 list-group d-flex flex-column align-items-center">
                <li className="list-group-item">Bahasa Indonesia (Native)</li>
                <li className="list-group-item">Bahasa Inggris (Proficient)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
