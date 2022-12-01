export interface Project {
  title: string;
  technologies: string[];
  purpose: string;
  details: string;
  href: string;
  images: string[];
  gitHubRepo: string;
}

export const projectDescriptions: Project[] = [
  {
    title: "BackyardRestoration.net (No Longer Hosted)",
    technologies: [
      "JavaScript",
      "React",
      "React-Router",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Massive.js",
      "D3.js",
      "CSS",
      "Sass/SCSS",
      "git",
      "GitHub",
      "Postman",
      "Figma",
      "Heroku",
      "HTML5",
      "Bcrypt.js",
      "Axios",
      "Stripe",
      "Nodemailer",
      "PL/pgSQL",
    ],
    purpose:
      "Given my background in biology, horticulture and ecological restoration, I have long been interested in creating a website that would empower land owners and managers to complete their own ecological restoration projects. Very often, the costs associated with ecological restoration services are extremely high, often preventing the average land owner or manager from undertaking projects that might otherwise make a positive environmental difference. The purpose of BackyardRestoration.net is to provide these individuals with some of the tools necessary to make a positive environmental impact, specifically: a weed identification and management method selection tool, a weed management timeline and a native species selection tool (all native species in my database are currently local to the Upper Midwest, which is my area of expertise). This project was completed by me over the course of approximately four weeks including debugging and functionality add-ons.",
    details:
      "The frontend is built on a React.js framework utilizing React-Redux for state management and React-Router for navigation/routing. Prior to coding, the website was wireframed using Figma and all styling was completed using Sass/SCSS using mobile-first design principles. Backend infrastructure is built on Node.js in conjunction with Express.js to handle endpoints and Massive.js to interface with a Heroku PostgreSQL database. Upon registration, the user’s address is converted into coordinates using Google’s Geocoding API. This coordinate is then used to calculate four additional coordinates representing progressively larger ellipsoidal WGS84 bounding boxes until a NOAA weather station is identified via NOAA’s V2 API that can deliver the required 10 years of minimum and maximum daily temperature data. Received weather data is subsequently used to calculate the user’s USDA hardiness zone and calibrate all weed management actions to the user’s growing season within the D3.js weed management timeline. All API requests are conducted using Axios, and user authentication and password reset functionality is built using Bcrypt.js and Nodemailer. The native plant search API was created using Node.js and PL/pgSQL, enabling users to select native plants from the Heroku database that are most appropriate for their site conditions. The optional donation page uses the Stripe API to securely accept credit card payments.",
    href: "https://github.com/djkoser/backyard_restoration",
    images: [
      "/media/br/backyardRestoration1.png",
      "/media/br/backyardRestoration2.png",
      "/media/br/backyardRestoration3.png",
      "/media/br/backyardRestoration4.png",
      "/media/br/backyardRestoration5.png",
      "/media/br/backyardRestoration6.png",
      "/media/br/backyardRestoration7.png",
      "/media/br/backyardRestoration8.png",
      "/media/br/backyardRestoration9.png",
      "/media/br/backyardRestoration10.png",
    ],
    gitHubRepo: "https://github.com/djkoser/backyard_restoration",
  },
  {
    title: "TopTableGames.net",
    technologies: [
      "TypeScript",
      "JavaScript",
      "React",
      "React-Router",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Massive.js",
      "Chart.js",
      "CSS",
      "Sass/SCSS",
      "Emotion.js",
      "git",
      "GitHub",
      "Postman",
      "Figma",
      "bit.io",
      "HTML5",
      "Bcrypt.js",
      "Axios",
      "Stripe",
      "Nodemailer",
    ],
    purpose:
      "TopTableGames.net was completed by two other developers, including myself, in three weeks. The idea for this project was inspired by my board-game-enthusiast colleagues’ desire to create a place for other board-game enthusiasts to find new games, track their plays, rate games and read reviews. There is a public-facing portion of the site which allows unregistered users to search for games using a number of search criteria, view game details and read associated game reviews. In addition, registered users have the option to add games to their virtual library, track the total number of plays for each game, and rate and review these games, which subsequently become publicly accessible.",
    details:
      "The frontend is built on a TypeScript and React.js framework utilizing React-Redux for state management and React-router for navigation/routing. Prior to the start of this project, none of my team members, or myself, were familiar with TypeScript. As a result, the primary challenge of this project was learning and implementing TypeScript on the frontend within the relatively short span of three weeks. Project management and team collaboration was accomplished using git/GitHub Trello and Discord. The website was wireframed using Figma prior to coding and all styling was completed using Sass/SCSS using mobile-first design principles. Emotion.js was also used to build a number of styled components, including the button and hexagonal game rating components, the latter of which was created entirely by myself. The play count graph within the user’s library page is constructed using Chart.js. As lead backend developer, the entire backend infrastructure was built by myself in Node.js in conjunction with Express.js to handle endpoints and Massive.js to interface with a bit.io, serverless PostgreSQL database. Game information is acquired by querying the BoardgameAtlas.com API and is subsequently combined with user and rating data stored on the Heroku database. All API requests are conducted using Axios, and user authentication and password reset functionality is built using Bcrypt.js and Nodemailer.",
    href: "https://toptablegames.net",
    images: [
      "/media/ttg/topTableGames1.png",
      "/media/ttg/topTableGames2.png",
      "/media/ttg/topTableGames3.png",
      "/media/ttg/topTableGames4.png",
      "/media/ttg/topTableGames5.png",
      "/media/ttg/topTableGames6.png",
      "/media/ttg/topTableGames7.png",
      "/media/ttg/topTableGames8.png",
      "/media/ttg/topTableGames9.png",
      "/media/ttg/topTableGames10.png",
    ],
    gitHubRepo: "https://github.com/boardgame-project/boardgame-project",
  },
];
