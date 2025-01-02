export default function Header() {
  return (
    <>
      <header id="header">
        <nav className="navbar navbar-expand-lg mb-md-5 px-3">
          <a
            className="navbar-brand navbar-dark"
            href="#">
            Adam Pratama
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#skills">
                  Skill
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#certificates">
                  Certificate
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#projects">
                  Project
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
