/* eslint-disable react/no-unescaped-entities */
export default function Experience() {
  return (
    <>
      <section
        id="experience"
        className="my-5">
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5 mt-md-0">
          <h2 className="text-center">Experience</h2>
          <div className="row">
            <div className="d-flex flex-row justify-content-center col-md-10 col-12 mx-auto">
              <ol>
                <li>
                  <span>Oct - Dec 2023</span>
                  <p className="text-justify">
                    <span className="fw-bolder">PT. Satria Raksa Buminusa</span>{" "}
                    - A privately owned national company specializing in
                    security services.
                  </p>
                  <span className="fw-bolder">Data Analyst (Internship) :</span>
                  <ul>
                    <li className="ms-md-3">
                      Analyzed attendance data of 200+ security personnel using
                      Microsoft Excel, identifying weekly attendance rates
                      around 80%, which prompted management to issue reminders
                      and formal warnings to improve compliance with app-based
                      attendance procedures.
                    </li>
                    <li className="ms-md-3 mt-2">
                      Managed and updated{" "}
                      <span className="fst-italic">Smart Patrol</span> app
                      accounts for 200+ security personnel, ensuring accurate
                      and reliable personnel records
                    </li>
                    <li className="ms-md-3 mt-2">
                      Developed a dashboard to track weekly patrol activity for
                      200+ security personnel using Excel data extracted from
                      the <span className="fst-italic">Smart Patrol</span> admin
                      portal, enabling individual performance monitoring.
                    </li>
                    <li className="ms-md-3 mt-2">
                      Built a{" "}
                      <span className="fst-italic">KTA Summary Dashboard</span>{" "}
                      to monitor 800+ security personnel ID cards across 18
                      projects, enabling real-time tracking of card status
                      including active, expired, under extension, and personnel
                      without KTA
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
