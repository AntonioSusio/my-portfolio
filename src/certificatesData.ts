export interface Certificate {
  id: number;
  certificateImg: string;
  alternativeText: string;
}

const certificatesData: Certificate[] = [
  {
    id: 1,
    certificateImg: "/FrontEndCertificate.png",
    alternativeText: "Image of Scrimba Frontend path certificate",
  },

  {
    id: 2,
    certificateImg: "/Html&CssCertificate.png",
    alternativeText: "Image of Scrimba Html and Css course certificate",
  },

  {
    id: 3,
    certificateImg: "/JavascriptCertificate.png",
    alternativeText: "Image of Scrimba JavaScript course certificate",
  },

  {
    id: 4,
    certificateImg: "/ReactCertificate.png",
    alternativeText: "Image of Scrimba React course certificate",
  },

  {
    id: 5,
    certificateImg: "/AdvancedReact.png",
    alternativeText: "Image of Scrimba Advanced React course certificate",
  },

  {
    id: 6,
    certificateImg: "/TypescriptCertificate.png",
    alternativeText: "Image of Scrimba Typescript course certificate",
  },
];

export default certificatesData;
