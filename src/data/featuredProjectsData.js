import cariokka1 from "../assets/cariokka1.webp";
import redditClient1 from "../assets/reddit-client-1.webp";
import redditClient2 from "../assets/reddit-client-2.webp";
import redditClient3 from "../assets/reddit-client-3.webp";
import redditClient4 from "../assets/reddit-client-4.webp";
import redditClient5 from "../assets/reddit-client-5.gif";
import adshark1 from "../assets/adshark-1.webp";
import adshark2 from "../assets/adshark-2.webp";
import adshark3 from "../assets/adshark-3.webp";
import adshark4 from "../assets/adshark-4.webp";
import adshark5 from "../assets/adshark-5.gif";
import marmilBlog1 from "../assets/marmil-blog-1.webp";
import marmilBlog2 from "../assets/marmil-blog-2.webp";
import marmilBlog3 from "../assets/marmil-blog-3.webp";
import marmilBlog4 from "../assets/marmil-blog-4.webp";
import marmilBlog5 from "../assets/marmil-blog-5.gif";

export const featuredProjectsData = [
  {
    name: "Cariokka (Upcoming)",
    backgroundColor: "#303030",
    description: `Next.js app that helps athletic/health clubs manage their business operations. 
      Features: multiple accounts registration, multiple clubs generation, dashboard, and more.`,
    tools: [
      {
        name: "devicon-react-original",
        tooltip: "React",
      },
      {
        name: "devicon-nextjs-line",
        tooltip: "Next.js",
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
        name: "devicon-typescript-plain colored",
        tooltip: "TypeScript",
      },
      {
        name: "devicon-postgresql-plain colored",
        tooltip: "PostgreSQL",
      },
    ],
    media: {
      0: cariokka1,
    },
    siteURL: "https://www.cariokka.com",
    sourceURL: "",
  },
  {
    name: "Reddit-Client",
    backgroundColor: "#303030",
    description: `React app showing Reddit posts and their numerous data points 
      fetched from Reddit's JSON API using Axios and Redux Toolkit's createAsyncThunk callback function. 
      Features: post search, filter, multiple topic selection, skeleton loading, responsive UI.`,
    tools: [
      {
        name: "devicon-react-original",
        tooltip: "React",
      },
      {
        name: "devicon-redux-original",
        tooltip: "Redux",
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
      {
        name: "devicon-materialui-plain",
        tooltip: "MaterialUI",
      },
    ],
    media: {
      0: redditClient1,
      1: redditClient2,
      2: redditClient3,
      3: redditClient4,
      4: redditClient5,
    },
    siteURL: "https://reddit-client22.netlify.app",
    sourceURL: "https://github.com/MarMil1/reddit-client",
  },
  {
    name: "AdShark",
    backgroundColor: "#303030",
    description: `Angular desktop app used for creating/editing custom adverisement banners. 
    The generated content is uploaded to third party project management tool for further distribution. 
    Updated ad content generates HTML and CSS code for marketing team's use. Features: 
    edit forms, iframe used to adapt banners on various device sizes,
    download generated code feature.`,
    tools: [
      {
        name: "devicon-angularjs-plain",
        tooltip: "Angular",
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
      {
        name: "devicon-nodejs-plain",
        tooltip: "NodeJS",
      },
    ],
    media: {
      0: adshark1,
      1: adshark2,
      2: adshark3,
      3: adshark4,
      4: adshark5,
    },
    siteURL: "https://marmil1.github.io/AdShark/",
    sourceURL: "https://github.com/MarMil1/AdShark",
  },
  {
    name: "Marmil_Blog",
    backgroundColor: "#9a8888",
    description: `Ruby on Rails social journalism app used to post articles and comments. 
    Users can create an account, add articles/comments, view each other's posts, like and 
    save articles to favorites. Features: login/logout, user view each other's profiles, 
    CRUD(user profile, posts/comments, user image, article image, likes, favorites).`,
    tools: [
      {
        name: "devicon-ruby-plain",
        tooltip: "Ruby",
      },
      {
        name: "devicon-rails-plain",
        tooltip: "Ruby on Rails",
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
      {
        name: "devicon-postgresql-plain",
        tooltip: "PostgreSQL",
      },
    ],
    media: {
      0: marmilBlog1,
      1: marmilBlog2,
      2: marmilBlog3,
      3: marmilBlog4,
      4: marmilBlog5,
    },
    siteURL: "https://marmil-blog.fly.dev/",
    sourceURL: "https://github.com/MarMil1/marmilblog",
  },
];
