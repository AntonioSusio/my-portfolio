import React from "react";
import Carousel from "../components/Carousel";
import type { JSX } from "react";
import type { Certificate } from "../certificatesData";
import certificatesData from "../certificatesData";

export default function Certificates(): JSX.Element {
  const [certificates, setCertificates] = React.useState<Certificate[]>([]);
  const [slideIndex, setSlideIndex] = React.useState<number>(0);
  const [lightBoxOpen, setLightBoxOpen] = React.useState<boolean>(false);
  const [activeImg, setActiveImg] = React.useState<string>("");

  React.useEffect((): void => {
    if (
      certificates.length === 0 ||
      certificatesData.length !== certificates.length
    ) {
      setCertificates(certificatesData);
    }
  }, [certificatesData]);

  function openLightBox(imgUrl: string): void {
    setActiveImg(imgUrl);
    setLightBoxOpen(true);
  }

  function closeLightBox(): void {
    setLightBoxOpen(false);
    setActiveImg("");
  }

  const certificatesEl: JSX.Element[] = certificates.map(
    (certificate: Certificate): JSX.Element => (
      <img
        key={certificate.id}
        src={certificate.certificateImg}
        className="certificate-img"
        alt={certificate.alternativeText}
        style={{ translate: `${-100 * slideIndex}%` }}
        onClick={() => openLightBox(certificate.certificateImg)}
      />
    )
  );

  return (
    <section className="certificates-section flex flex-col">
      <h1 className="certificates-heading flex">Certificates</h1>
      <Carousel certificates={certificatesEl} setSlideIndex={setSlideIndex} />

      {lightBoxOpen && (
        <div className="lightbox-overlay" onClick={closeLightBox}>
          <img
            src={activeImg}
            alt={`certificate image enlarged`}
            className="lightbox-image"
          />
        </div>
      )}
    </section>
  );
}
