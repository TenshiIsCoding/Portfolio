import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    leetmusic,
    enactus,
    wmd,
    threejs,
    vite,
    cub3d,
    inception,
    minibash,
    pongverse,
    simpleirssi,
    portfolio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "works",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developement",
      icon: web,
    },
    {
      title: "Software Engineering",
      icon: mobile,
    },
    {
      title: "Team Collaboration",
      icon: backend,
    },
    {
      title: "Commitment to Excellence",
      icon: creator,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "Vite",
      icon: vite,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Enactus FSA Member",
      company_name: "Agadir Faculty Of Science",
      icon: enactus,
      iconBg: "#ffffff",
      date: "Oct 2022",
      points: [
        "Entrepreneurial & Leadership Skills – I’ve learned how to develop and lead social impact projects, manage teams, and think innovatively to solve real-world problems..",
        "Project Management & Problem-Solving – I’ve gained hands-on experience in planning, executing, and scaling sustainable business solutions that create social and economic impact.",
        "Networking & Collaboration – I’ve connected with business leaders, mentors, and like-minded peers, which has helped me improve my teamwork and communication skills.",
        "Social Responsibility & Sustainable Development – I now understand the importance of ethical entrepreneurship and sustainability, and how to align business goals with social impact.",
      ],
    },
    {
      title: "Enactus FSA Project Manager",
      company_name: "Agadir Faculty Of Science",
      icon: enactus,
      iconBg: "#ffffff",
      date: "Apr 2022",
      points: [
        "Planning & Executing Projects – Setting clear goals, managing resources, and ensuring measurable impact.",
        "Collaboration & Teamwork – Working with other developers has strengthened my ability to communicate, share knowledge, and build projects efficiently.",
        "Problem-Solving – I’ve learned to tackle challenges, optimize performance, and troubleshoot issues effectively.",
        "Ensuring Sustainability – Measuring impact and building long-term, scalable solutions.",
      ],
    },
    {
      title: "1337 WebDev Club Member",
      company_name: "1337",
      icon: wmd,
      iconBg: "#000000",
      date: "Nov 2022",
      points: [
        "Diving Into Web Developement – I got introduced into web dev, UI/UX design,through hands-on projects.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Leet Music Club President",
      company_name: "1337",
      icon: leetmusic,
      iconBg: "#000000",
      date: "Oct 2023",
      points: [
        "Project & Team Management – Leading the club has sharpened my ability to manage projects, coordinating large events, and keeping teams aligned—skills essential in software development.",
        "Problem-Solving & Adaptability – Organizing performances and handling logistics has enhanced my ability to troubleshoot issues, think critically, and stay adaptable under pressure.",
        "Building & Managing Online Presence – I’ve overseen the club’s digital presence, reinforcing my experience with digital strategy.",
        "Creativity – Composing music and organizing performances have honed my creative thinking, helping me approach software engineering challenges with innovative solutions."
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "PongVerse",
      description:
        "A game website and a 3D gaming experience with Three.js, featuring real-time 1v1 matches and a tournament system. Contributed to a full-stack project with secure authentication, real-time communication, and scalable deployment. ",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: pongverse,
      source_code_link: "https://github.com/",
    },
    {
      name: "Simple Irssi",
      description:
        "An interesting project that undertakes exploring computer networking and communication protocols",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "networkprogramming",
          color: "green-text-gradient",
        },
        {
          name: "sockets",
          color: "pink-text-gradient",
        },
      ],
      image: simpleirssi,
      source_code_link: "https://github.com/",
    },
    {
      name: "Inception",
      description:
        "Inception is a foundational DevOps project in the 42 school curriculum designed to be an introduction to containerization, system administration, and infrastructure management. The goal is to set up a secure and scalable system using Docker while adhering to strict guidelines.",
      tags: [
        {
          name: "docker",
          color: "blue-text-gradient",
        },
        {
          name: "nginx",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: inception,
      source_code_link: "https://github.com/",
    },
    {
      name: "MiniBash",
      description:
        "MiniBash is an important project challenged me to build a simple UNIX shell from scratch, reinforcing my understanding of process management, system calls, and command execution.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "systemsprogramming",
          color: "green-text-gradient",
        },
        {
          name: "reverse_engineering",
          color: "pink-text-gradient",
        },
      ],
      image: minibash,
      source_code_link: "https://github.com/TenshiIsCoding/Inception",
    },
    {
      name: "Cub3D",
      description:
        "Cub3D is a 42 curriculum project that challenges students to create a basic 3D game engine using Raycasting, inspired by Wolfenstein 3D. It serves as an introduction to computer graphics, game development, and mathematical rendering techniques.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "minilibx",
          color: "green-text-gradient",
        },
        {
          name: "gamedev",
          color: "pink-text-gradient",
        },
      ],
      image: cub3d,
      source_code_link: "https://github.com/TenshiIsCoding/cub3d",
    },
    {
      name: "Portfolio",
      description:
        "A dev portfolio where i aimed to show off my creativity and also learn new techniques in front-end developement using React, Tailwind and Threejs Fiber.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/TenshiIsCoding/Portfolio",
    },
    
  ];
  
  export { services, technologies, experiences, projects };