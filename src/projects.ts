export interface Project {
    id: number,
    projectName: string,
    projectDescritpionId: string,
    projectTechnologies: string[],
    projectImage: string,
    alternativeText: string,
    projectUrl: string
}

const projectsData: Project[] = [
    {
        id: 1,
        projectName: "Vanlife",
        projectDescritpionId: "vanlife_desc",
        projectTechnologies: ["React", "Javascript", "Typescript"],
        projectImage: "/VanLifeProject.png",
        alternativeText: "Image representing Vanlife site homepage",
        projectUrl: "https://vanlife-antonio.netlify.app"
    },

    {
        id: 2,
        projectName: "Quizzical",
        projectDescritpionId: "quizzical_desc",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "/QuizzicalProject.png",
        alternativeText: "Image representing Quizzical app while the user is doing a quizz",
        projectUrl: "https://quizzical-app-antonio.netlify.app"
    },

    {
        id: 3,
        projectName: "Movie Watchlist",
        projectDescritpionId: "watchlist_desc",
        projectTechnologies: ["Javascript"],
        projectImage: "/MovieWatchlist.png",
        alternativeText: "Image representing Movie watchlist app homepage",
        projectUrl: "https://movie-watchlist-antonio.netlify.app"
    },

    {
        id: 4,
        projectName: "Assembly Endgame",
        projectDescritpionId: "endgame_desc",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "/AssemblyEndgameProject.png",
        alternativeText: "Image representing Assembly Endgame app",
        projectUrl: "https://assembly-endgame-antonio.netlify.app"
    },

    {
        id: 5,
        projectName: "Tenzies Game",
        projectDescritpionId: "tenzies_desc",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "/TenziesGameProject.png",
        alternativeText: "Image representing Tenzies Game app",
        projectUrl: "https://tenzies-game-antonio.netlify.app"
    },

    {
        id: 6,
        projectName: "Meme Generator",
        projectDescritpionId: "meme_desc",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "/MemeGeneratorProject.png",
        alternativeText: "Image representing Meme generator app",
        projectUrl: "https://meme-generator-antonio.netlify.app"
    },

    {
        id: 7,
        projectName: "Travel Journal",
        projectDescritpionId: "travel_desc",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "/TravelJournalProject.png",
        alternativeText: "Image representing Travel journal app",
        projectUrl: "https://travel-journal-antonio.netlify.app"
    }
]

export default projectsData;