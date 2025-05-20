import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  threejs,
  Filmys,
  github2,
  bootstrap,
  rockgym,
  xmora,
  kmohamed,
  mahmoud,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "frontend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github2,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    icon: html,
    iconBg: "#383E56",
    date: "mar 2024",
    points: [
      "Developing and maintaining modern, user-friendly web applications that deliver a smooth and efficient user experience.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality digital products.",
      "Implementing responsive design to ensure seamless performance across different devices and browsers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "bootstrap Developer ",

    icon: bootstrap,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2024",
    points: [
      "Developing and maintaining responsive web interfaces using Bootstrap.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create clean and user-friendly UI components",
      "Implementing fully responsive layouts with Bootstrap and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React.js Developer",

    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2025 - Present ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "javascript Developer",

    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Crafting dynamic and interactive web features using JavaScript to elevate user engagement and application responsiveness.",
      "Working closely with product teams and UX/UI designers to translate creative concepts into performant front-end experiences.",
      "Optimizing client-side performance by leveraging modern JavaScript patterns, asynchronous programming, and browser APIs.",
      "Enforcing clean code standards through peer reviews, unit testing, and continuous refactoring to support long-term scalability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with youssef on a project, and I was blown away by their skills and professionalism. ",
    name: "coache mohamed",
    designation: "coach",
    company: "rock gym",
    image: kmohamed,
  },
  {
    testimonial:
      "I can't believe I got the chance to work with the best web developer in the industry.",
    name: "mostafa",
    designation: "COO",
    company: "creativo",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "He improved my graduation project in a beautiful and excellent way, and I recommend it hard",
    name: "mahmoud",
    designation: "student of computer science",
    company: "mansoura university",
    image: mahmoud,
  },
];

const projects = [
  {
    name: "ROCK GYM",
    description:
      "ROCK GYM is a fitness and wellness platform that offers personalized workout plans, nutrition tracking, and community support to help users achieve their fitness goals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "VITE",
        color: "green-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "pink-text-gradient",
      },
    ],
    image: rockgym,
    source_code_link: "https://github.com/YS-1911/ROCK-GYM",
  },
  {
    name: "Company YS",
    description:
      "YS is a dynamic software development firm that transforms ideas into high‑quality digital products. With a focus on agile collaboration and cutting‑edge technologies.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: Filmys,
    source_code_link: "https://github.com/YS-1911/YS-PROG",
  },
  {
    name: "XMORA",
    description:
      "XMORA is a cutting-edge e-commerce platform that leverages advanced technology to provide a seamless shopping experience",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "TELWIND",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: xmora,
    source_code_link: "https://github.com/YS-1911/xora-main",
  },
];

export { services, technologies, experiences, testimonials, projects };
