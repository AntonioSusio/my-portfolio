export interface Data {
  name: string;
  secondName: string;
  description: string;
  skills: string[];
}

const data: Data = {
  name: "Antonio",
  secondName: "Susio",
  description: "I am a graduate frontend student from the Scrimba platform, with a particular interest in constantly improving and discovering new things about coding. I enjoy difficult challenges, even if it takes me time to solve them, because I like finding and analyzing new approaches that are unknown to me for solve them. I like collectible card games, strategy games, rope jumping, and I am a fan of cannelloni (a typical Neapolitan dish). But most importantly, I really love listening to music.",
  skills: ["Html", "Css", "Javascript", "React", "Typescript"]
};

export default data;
