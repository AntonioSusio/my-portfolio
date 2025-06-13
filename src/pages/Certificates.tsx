import React from "react";
import Carousel from "../components/Carousel";
import type { Certificate } from "../certificatesData";
import certificatesData from "../certificatesData";

export default function Certificates() {
  const [certificates, setCertificates] = React.useState<Certificate[]>([]);
  const [slideIndex, setSlideIndex] = React.useState<number>(0);

  const certificatesEl = certificates.map((certificate) => (
    <img
      key={certificate.id}
      src={certificate.certificateImg}
      className="certificate-img"
      alt={certificate.alternativeText}
      style={{ translate: `${-100 * slideIndex}%` }}
    />
  ));

  React.useEffect(() => {
    if (
      certificates.length === 0 ||
      certificatesData.length !== certificates.length
    ) {
      setCertificates(certificatesData);
    }
  }, [certificatesData]);

  return (
    <section className="certificates-section flex flex-col">
      <h1 className="certificates-heading flex">Certificates</h1>
      <Carousel certificates={certificatesEl} setSlideIndex={setSlideIndex} />
    </section>
  );
}
