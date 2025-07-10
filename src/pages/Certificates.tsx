import React from "react";
import Carousel from "../components/Carousel";
import type { JSX } from "react";
import type { Certificate } from "../certificatesData";
import certificatesData from "../certificatesData";

export default function Certificates(): JSX.Element {
  const [certificates, setCertificates] = React.useState<Certificate[]>([]);
  const [slideIndex, setSlideIndex] = React.useState<number>(0);
  const [lightBoxOpen, setLightBoxOpen] = React.useState<boolean>(false);

  React.useEffect((): void => {
    if (
      certificates.length === 0 ||
      certificatesData.length !== certificates.length
    ) {
      setCertificates(certificatesData);
    }
  }, [certificatesData]);

  function openLightBox(index: number): void {
    setSlideIndex(index);
    setLightBoxOpen(true);
  }

  function closeLightBox(): void {
    setLightBoxOpen(false);
  }

  const certificatesEl: JSX.Element[] = certificates.map(
    (certificate: Certificate, index: number): JSX.Element => (
      <img
        key={certificate.id}
        src={certificate.certificateImg}
        className="certificate-img"
        alt={certificate.alternativeText}
        style={{ translate: `${-100 * slideIndex}%` }}
        onClick={() => openLightBox(index)}
      />
    )
  );

  return (
    <section className="certificates-section flex flex-col">
      <h1 className="certificates-heading flex">Certificates</h1>
      <Carousel
        certificates={certificatesEl}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />

      {lightBoxOpen && (
        <div className="lightbox-overlay" onClick={closeLightBox}>
          <div onClick={(e) => e.stopPropagation()}>
            <Carousel
              slideIndex={slideIndex}
              certificates={certificatesEl}
              setSlideIndex={setSlideIndex}
            />
          </div>
        </div>
      )}
    </section>
  );
}
