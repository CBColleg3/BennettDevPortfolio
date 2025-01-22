import React from 'react'

const projectsData = [
  {
    Name: "TCKTMASTER",
    ImageUrl: "/images/tcktmaster.jpg",
    TimeFrame: "Jan 2023 - Mar 2023",
    Link: "https://example.com/tcktmaster",
    Header1: "Seamless Ticket Management",
    Paragraph1: "An efficient platform to buy, sell, and manage event tickets with ease.",
    Header2: "User-Friendly Design",
    Paragraph2: "A clean interface ensuring a smooth experience for all users."
  },
  {
    Name: "Assignment Timeline Maker",
    ImageUrl: "/images/assignmenttimelinemaker.png",
    TimeFrame: "Apr 2023 - Jun 2023",
    Link: "https://example.com/assignment-timeline-maker",
    Header1: "Streamline Your Work",
    Paragraph1: "A tool to help students and professionals manage deadlines effectively.",
    Header2: "Customizable Timelines",
    Paragraph2: "Easily create and adjust timelines to fit your needs."
  },
  {
    Name: "Modular Music Player Application",
    ImageUrl: "/images/modular_music_player.jpg",
    TimeFrame: "Jul 2023 - Sep 2023",
    Link: "https://example.com/modular-music-player",
    Header1: "Dynamic Music Playback",
    Paragraph1: "An innovative app for creating and playing modular music tracks.",
    Header2: "Flexible Features",
    Paragraph2: "Enhance your listening experience with powerful customization tools."
  },
  {
    Name: "Blue Hen Planner",
    ImageUrl: "/images/bluehenplanner.png",
    TimeFrame: "Oct 2023 - Dec 2023",
    Link: "https://example.com/blue-hen-planner",
    Header1: "Simplify Your Scheduling",
    Paragraph1: "Plan your week effectively with this intuitive scheduling app.",
    Header2: "Effortless Organization",
    Paragraph2: "Keep track of your tasks and appointments in one place."
  }
];

const Projects = () => {
  return (
    <div className="project-container">
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.ImageUrl} alt={project.Name} className="project-image" />
          <h2>{project.Name}</h2>
          <p className="project-body">{project.TimeFrame}</p>
          <h3 className="project-header">{project.Header1}</h3>
          <p>{project.Paragraph1}</p>
          <h3 className="project-header">{project.Header2}</h3>
          <p className="project-body">{project.Paragraph2}</p>
          <a href={project.Link} target="_blank" rel="noopener noreferrer">
            <button>Visit Website</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;