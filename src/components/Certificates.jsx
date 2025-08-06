import PropTypes from "prop-types";
import { useState } from "react";
import Card from "./Card";
import CertificateModal from "./CertificateModal";

export default function Certificates({ certificates }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <section
        id="certificates"
        className="my-5">
        <div className="container mt-5 mt-md-0">
          <h2 className="text-center">Certificate</h2>
          <div className="row">
            <div className="d-flex flex-column flex-md-row justify-content-md-center column-gap-md-5">
              {certificates.map((certificate, index) => (
                <div
                  className="col-md-4"
                  key={index}>
                  <Card
                    image={certificate.image}
                    name={certificate.name}
                    onViewDetails={() => setSelectedCertificate(certificate)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </>
  );
}

Certificates.propTypes = {
  certificates: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      dateIssued: PropTypes.string,
      issuedBy: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
};
