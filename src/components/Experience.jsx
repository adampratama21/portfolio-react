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
                      <span>Electronic attendance data analysis :</span>
                      <ul className="ms-md-5">
                        <li className="text-justify col-md-12 col-10 my-1">
                          Analyzed electronic attendance data of security guards
                          for a specific project, gathered through the "Smart
                          Patrol" app, using Microsoft Excel.
                        </li>
                        <li className="text-justify col-md-12 col-10 my-1">
                          Created a report with a dashboard, summarizing
                          electronic attendance analysis. The dashboard showed
                          how often security staff used the Smart Patrol app,
                          their average lateness, and the total number of
                          patrols they completed. These reports were generated
                          on a weekly, monthly, or on-demand basis.
                        </li>
                      </ul>
                    </li>
                    <li className="ms-md-3 mt-2">
                      <span>"Smart Patrol" app :</span>
                      <ul className="col-12 ms-md-5">
                        <li className="text-justify  col-md-12 col-10 my-1">
                          Contributed to the establishment of Smart Patrol
                          accounts for security personnel of a certain project
                          and updated the personnel information on the admin
                          website when needed.
                        </li>
                      </ul>
                    </li>
                    <li className="ms-md-3 mt-2">
                      <span>Members Identification Card summary :</span>
                      <ul className="col-12 ms-md-5">
                        <li className="text-justify col-md-12 col-10 my-1">
                          Developed a Members Identification Card Summary
                          Dashboard, offering a concise overview of active and
                          soon-to-expire cards across all projects.
                        </li>
                      </ul>
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
