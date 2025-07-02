export interface Resumes {
    period: string,
    schoolName: string,
    city?: string,
    country?: string,
    description: string,
    eqfLevel?: number,
    imageUrl?: string,
    alternativeText?: string
}

const resume: Resumes[] = [
    {
        period: "2014 - 2019",
        schoolName: "ITIS Alessandro Volta",
        city: "Naples,",
        country: "Italy",
        description: "High School Diploma in Computer Science and Telecommunications",
        eqfLevel: 4,
    },

    {
        period: "2023 - 2024",
        schoolName: "Scrimba",
        city: "Online platform",
        description: "Frontend Developer Career Path certificate of completion",
        imageUrl: "/FrontEndCertificate.png",
        alternativeText: "Image of Frontend developer career path certificate"
    }
]

export default resume;