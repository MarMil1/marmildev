import stackOverflow from "../assets/stack-overflow-ide-1.webp";
import bmmnViz from "../assets/bmmn-viz-1.webp";
import bizCards from "../assets/bizCards-1.webp";
import msGen from "../assets/msGen-1.webp";
import apisMicro from "../assets/apisMicro-1.webp";
import codepen from "../assets/codepen-1.webp";
import healthTracker from "../assets/health-tracker-1.webp";
import stockWatch from "../assets/stock-watch-1.webp";

export const projectData = [
  {
    name: "Stack Overflow IDE",
    type: "desktop",
    description: "Stack Overflow extension for VS Code IDE.",
    tools: [
      {
        name: "devicon-vuejs-plain",
        tooltip: "Vue.js",
      },
      {
        name: "devicon-html5-plain",
        tooltip: "HTML",
      },
      {
        name: "devicon-css3-plain",
        tooltip: "CSS3",
      },
      {
        name: "devicon-javascript-plain",
        tooltip: "JavaScript",
      },
    ],
    image: stackOverflow,
    siteURL: "",
    sourceURL: "https://github.com/MarMil1/foundation",
  },
  {
    name: "Health Tracker",
    type: "mobile",
    description: "Personal nutrition & fitness tracker for iOS.",
    tools: [
      {
        name: "devicon-swift-plain",
        tooltip: "Swift",
      },
      {
        name: "devicon-xcode-plain",
        tooltip: "Xcode",
      },
    ],
    image: healthTracker,
    siteURL: "",
    sourceURL: "https://github.com/MarMil1/ios-health-tracker",
  },
  {
    name: "BMMNViz",
    type: "desktop",
    description: "Graph visualizations of K-12 enrollment dataset.",
    tools: [
      {
        name: "devicon-d3js-plain",
        tooltip: "D3JS",
      },
      {
        name: "devicon-python-plain",
        tooltip: "Python",
      },
      {
        name: "devicon-html5-plain",
        tooltip: "HTML",
      },
      {
        name: "devicon-css3-plain",
        tooltip: "CSS3",
      },
      {
        name: "devicon-javascript-plain",
        tooltip: "JavaScript",
      },
    ],
    image: bmmnViz,
    siteURL: "",
    sourceURL: "https://github.com/MarMil1/CSC468",
  },
  {
    name: "Stock Watch",
    type: "mobile",
    description: "Daily stock prices tracker for Android.",
    tools: [
      {
        name: "devicon-java-plain",
        tooltip: "Java",
      },
      {
        name: "devicon-androidstudio-plain",
        tooltip: "Android Studio",
      },
    ],
    image: stockWatch,
    siteURL: "",
    sourceURL: "https://github.com/MarMil1/stockWatch",
  },
  {
    name: "Biz Cards",
    type: "desktop",
    description: "Business card collecting/scanning tool.",
    tools: [
      {
        name: "devicon-angularjs-plain",
        tooltip: "Angular",
      },
      {
        name: "devicon-typescript-plain",
        tooltip: "TypeScript",
      },
      {
        name: "devicon-html5-plain",
        tooltip: "HTML",
      },
      {
        name: "devicon-css3-plain",
        tooltip: "CSS3",
      },
      {
        name: "devicon-firebase-plain",
        tooltip: "Google Firebase",
      },
    ],
    image: bizCards,
    siteURL: "https://business-card-app-be379.firebaseapp.com/login",
    sourceURL: "https://github.com/MarMil1/CSC436-business-card-app",
  },
  {
    name: "msGen",
    type: "desktop",
    description: "Random message generator game.",
    tools: [
      {
        name: "devicon-javascript-plain",
        tooltip: "JavaScript",
      },
      {
        name: "devicon-html5-plain",
        tooltip: "HTML",
      },
      {
        name: "devicon-css3-plain",
        tooltip: "CSS3",
      },
      {
        name: "devicon-github-original",
        tooltip: "GitHub Pages",
      },
    ],
    image: msGen,
    siteURL: "https://marmil1.github.io/msgen/",
    sourceURL: "https://github.com/MarMil1/msgen",
  },
  {
    name: "ApisMicro",
    type: "desktop",
    description: "Set of short APIs/microservices apps.",
    tools: [
      {
        name: "devicon-express-original",
        tooltip: "ExpressJS",
      },
      {
        name: "devicon-javascript-plain",
        tooltip: "JavaScript",
      },
      {
        name: "devicon-git-plain",
        tooltip: "Git",
      },
    ],
    image: apisMicro,
    siteURL: "https://boilerplate-project-exercisetracker.marmil1.repl.co/",
    sourceURL: "https://github.com/MarMil1/apis-and-microservices",
  },
  {
    name: "Codepen",
    type: "desktop",
    description: "Mini projects and apps on Codepen.",
    tools: [
      {
        name: "devicon-react-original",
        tooltip: "React",
      },
      {
        name: "devicon-html5-plain",
        tooltip: "HTML",
      },
      {
        name: "devicon-css3-plain",
        tooltip: "CSS3",
      },
      {
        name: "devicon-javascript-plain",
        tooltip: "JavaScript",
      },
    ],
    image: codepen,
    siteURL: "",
    sourceURL: "https://codepen.io/marmil1",
  },
];

export default projectData;
