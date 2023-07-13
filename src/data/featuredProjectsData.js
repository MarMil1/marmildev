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
    description: `Exciting plans underway for a Next.js app that aims 
    to revolutionize the way athletic/health clubs manage their business 
    operations. This upcoming project will feature effortless generation 
    of multiple clubs, seamless multiple accounts registration,
    a user-friendly dashboard, and more. Stay tuned for updates as I 
    bring this innovative solution to life!"`,
    tools: [
      {
        name: "devicon-nextjs-line",
        tooltip: "Next.js",
      },
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
    description: `Created a dynamic React application that displays Reddit 
    posts along with a wealth of data points fetched from Reddit's JSON API. 
    Leveraging Axios for API requests and Redux Toolkit's createAsyncThunk 
    callback function, this project offers an array of features, 
    including post search, filter capabilities, the ability to select 
    multiple topics, a skeleton loading UI for smooth user experience, 
    and a responsive user interface. Explore this project to witness the 
    seamless integration of Reddit's API data into a user-friendly 
    and interactive application.`,
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
    description: `Developed a versatile Angular desktop application specifically 
    designed for creating and editing custom advertisement banners. This powerful 
    app streamlines the process by allowing users to generate content that can be 
    seamlessly uploaded to a third-party project management tool for efficient 
    distribution. Notably, the app generates HTML and CSS code from the updated 
    ad content, providing the marketing team with ready-to-use assets. Key 
    features include intuitive edit forms, an adaptive iframe that ensures optimal 
    banner display across various device sizes, and a convenient download feature 
    for accessing the generated code. Discover how this app simplifies and 
    enhances the banner creation process.`,
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
    description: `Built a dynamic Ruby on Rails social journalism application 
    that enables users to create and share articles as well as engage in 
    discussions through comments. The app offers user account creation, 
    article and comment creation functionality, and the ability to view and 
    interact with other users' posts. Users can like articles and save them to 
    their favorites for easy access. Key features include login/logout 
    functionality, user profile viewing, and comprehensive CRUD operations for 
    user profiles, posts, comments, user and article images, as well as 
    managing likes and favorites. Experience seamless social journalism and 
    collaboration with this Ruby on Rails app.`,
    tools: [
      {
        name: "devicon-rails-plain",
        tooltip: "Ruby on Rails",
      },
      {
        name: "devicon-ruby-plain",
        tooltip: "Ruby",
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
