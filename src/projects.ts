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
        projectTechnologies: ["React", "Javascript", "Typescript"],
        projectImage: "/VanLifeProject.png",
        alternativeText: "Image representing Vanlife site homepage",
    },

    {
        projectName: "Quizzical",
        projectDescritpion: "A simple quiz app project where you have to answer five general knowledge questions.",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "/QuizzicalProject.png",
        alternativeText: "Image representing Quizzical app while the user is doing a quizz",
    },

    {
        projectName: "Movie Watchlist",
        projectDescritpion: "A Watchlist application project where you can create your own list of movies or TV shows to watch.",
        projectTechnologies: ["Javascript"],
        projectImage: "/MovieWatchlist.png",
        alternativeText: "Image representing Movie watchlist app homepage",
    }
]

export default projectsData;