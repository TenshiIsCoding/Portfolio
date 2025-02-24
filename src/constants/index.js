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
    carrent,
    jobit,
    tripguide,
    threejs,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
        "Problem-Solving & Debugging – I’ve learned to tackle Web Developement challenges, optimize performance, and troubleshoot issues effectively.",
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
        "Project & Team Management – Leading the club has sharpened my ability to manage projects, coordinate events, and keep teams aligned—skills essential in software development.",
        "Problem-Solving & Adaptability – Organizing performances and handling logistics has enhanced my ability to troubleshoot issues, think critically, and stay adaptable under pressure.",
        "Building & Managing Online Presence – I’ve overseen the club’s digital presence, reinforcing my experience with digital strategy.",
        "Creativity – Composing music and organizing performances have honed my creative thinking, helping me approach software engineering challenges with innovative solutions."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };