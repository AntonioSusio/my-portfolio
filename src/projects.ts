export interface Project {
    projectName: string,
    projectDescritpion: string,
    projectTechnologies: string[],
    projectImage: string,
    alternativeText: string
}

const projectsData: Project[] = [
    {
        projectName: "Vanlife",
        projectDescritpion: "A project based on the buying and selling of camper vans. React Routing method was used to navigate between pages and Authentication Required to access sections reserved only for logged-in users.",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "",
        alternativeText: "Image representing Vanlife site homepage",
    }
]

export default projectsData;