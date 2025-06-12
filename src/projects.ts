export interface Project {
    projectName: string,
    projectDescritpion: string,
    projectTechnologies: string[],
    projectImage: string,
    alternativeText: string,
    projectUrl: string
}

const projectsData: Project[] = [
    {
        projectName: "Vanlife",
        projectDescritpion: "A project based on the buying and selling of camper vans. React Routing method was used to navigate between pages and Authentication Required to access sections reserved only for logged-in users.",
        projectTechnologies: ["React", "Javascript", "Typescript"],
        projectImage: "/VanLifeProject.png",
        alternativeText: "Image representing Vanlife site homepage",
        projectUrl: "https://van-life-antonio.netlify.app"
    },

    {
        projectName: "Quizzical",
        projectDescritpion: "A simple quiz app project where you have to answer five general knowledge questions.",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "/QuizzicalProject.png",
        alternativeText: "Image representing Quizzical app while the user is doing a quizz",
        projectUrl: "https://quizzical-app-antonio.netlify.app"
    },

    {
        projectName: "Movie Watchlist",
        projectDescritpion: "A Watchlist application project where you can create your own list of movies or TV shows to watch.",
        projectTechnologies: ["Javascript"],
        projectImage: "/MovieWatchlist.png",
        alternativeText: "Image representing Movie watchlist app homepage",
        projectUrl: "https://movie-watchlist-antonio.netlify.app"
    },

    {
        projectName: "Assembly Endgame",
        projectDescritpion: "This project is very similar to the game of Hangman. You have 8 lives. Each life is represented by a different programming technology. Try not to lose your favorite!",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "/AssemblyEndgameProject.png",
        alternativeText: "Image representing Assembly Endgame app",
        projectUrl: "https://assembly-endgame-antonio.netlify.app"
    },

    {
        projectName: "Tenzies Game",
        projectDescritpion: "A project that represents a game where you have to win by finding the same number on all the dices. Will you be lucky quickly?",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "/TenziesGameProject.png",
        alternativeText: "Image representing Tenzies Game app",
        projectUrl: "https://tenzies-game-antonio.netlify.app"
    },

    {
        projectName: "Meme Generator",
        projectDescritpion: "A simple project that generates random memes and allows you to write what you'd like to be shown on the image. Let your creativity flow! 😆",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "/MemeGeneratorProject.png",
        alternativeText: "Image representing Meme generator app",
        projectUrl: "https://meme-generator-antonio.netlify.app"
    },

    {
        projectName: "Travel Journal",
        projectDescritpion: "A simple static project built with React depicting my travel journal with all the destinations I would like to visit.",
        projectTechnologies: ["React", "Javascript"],
        projectImage: "/TravelJournalProject.png",
        alternativeText: "Image representing Travel journal app",
        projectUrl: "https://travel-journal-antonio.netlify.app"
    }
]

export default projectsData;