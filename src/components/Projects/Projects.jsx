import React from 'react'
import './Projects.scss'

const projectsData = [
  {
    Name: "TCKTMASTER",
    ImageUrl: "/images/tcktmaster.png",
    TimeFrame: "Jul 2024 - Sep 2024",
    Link: "https://example.com/tcktmaster",
    Header1: "Seamless Ticket Management",
    Paragraph1: "Our goal was to get a site like EventBrite utilizing vanilla JS and Firebase for a client, included in the project is a database to store User credentials such as tickets purchased, a working payment system, QR Code scanning for the tickets, and a landing page which updates based on which events just got posted on the site with custom links generated for each event.",
    Header2: "Team-Oriented Professional Development",
    Paragraph2: "Great professional experience working with real world clients on a self-managed two person project, the main hurdles were eventually solved on getting the site up and functioning through extensive planning and reviewing web functionalities such as authentication services, adding user cart items to a database, and transferring cart items to user purchased tickets."
  },
  {
    Name: "RunR",
    ImageUrl: "/images/runrlogo.png",
    TimeFrame: "Sep 2023 - May 2024",
    Link: "https://github.com/m-bocelli/runr",
    Header1: "Run Docker Images without Container Escape risk",
    Paragraph1: "Runs regular Docker Images which are portable templates for building containers on any machine in a rust virtual machine monitor (VMM). Since we run the Docker Image on a VM rather than on your host kernel if you were to just use normal Docker.",
    Header2: "Another plausible solution",
    Paragraph2: "Docker uses runc as a default, which is the fastest in terms of runtime but has the most security risk with Docker Containers being shared with your host kernel. RunQ (QEMU) is also an efficient solution with the same steps of utilizing a VM to mitigater container escape, however we believe that runr would be way more efficient as rust is a very memory efficient program which can speed up runtimes and leave us with less of a security risk."
  },
  {
    Name: "Modular Music Player",
    ImageUrl: "/images/modularmusic.png",
    TimeFrame: "May 2023 - May 2024",
    Link: "https://github.com/Sensify-Lab/Modular-Music",
    Header1: "Dynamic Music Playback for Neurodivergent Elementary Students",
    Paragraph1: "A music player app designed as a tool to see what types of sounds and instruments utilized can lead to more engaging and active learning in elementary students. We've worked with University of Delaware Music Department to write songs for the application seperated by each instrument. My job was to load the songs into FMod, a custom audio workspace, and seperate each instrument as a parameter track and then implement all of the songs within Unity. The code was already written before for the prototype, but I utilized my in-depth knowledge of Unity's framework to condense alot of the redundant lines of code and utilize more of FMod for the audio based scripting which ended up reducing the each script used in the program by about 1,000 lines each.",
    Header2: "Custom Bluetooth Arduino Controller",
    Paragraph2: "Within the project was a custom bluetooth arduino controller for Kids to play with during each play session. The controller would be linked with the application and each button would have an icon to what instrument would be played. I was in charge of getting the application looking nicer with the AI generated photos on a parallaxing scrolling background with seamless photo transitions, aswell as adding all of the button icons with corressponding button colors to link with the Arduino controller."
  },
  {
    Name: "Assignment Timeline Maker",
    ImageUrl: "/images/assignmenttimelinemaker.png",
    TimeFrame: "Jan 2022 - May 2024",
    Link: "https://cbcolleg3.github.io/Assignment-Timeline-Maker/",
    Header1: "Easily Generated Customizable Timelines",
    Paragraph1: "Grants University professor's the ability to have their assignments transformed into a seamless automatically generated list of tasks which then gets put into a timeline from any given timeframe. From there, they can add or delete extra nodes as they see fit and then once they're done making changes, they can download the pdf and the timeline will be saved as an attachment of the original document.",
    Header2: "Personal To-Do List for Students",
    Paragraph2: "One big goal for this project was to help neurodiverse students manage their time and focus better while working on the many different assignments they will face on the day-to-day. The website would have a way for the students to mark their progress for each task given up until they are finished the assignment. If the students need more time to finish or if the due dates get extended, the website will accommodate and make sure each task is spread evenly until the eventual due date is reached."
  },
  {
    Name: "Blue Hen Planner",
    ImageUrl: "/images/bluehenplanner.png",
    TimeFrame: "Jan 2022 - May 2022",
    Link: "https://ud-cisc275-s22.github.io/cis-scheduler-team-16/",
    Header1: "Planner to help Planning?",
    Paragraph1: "University of Delaware freshman are often left confused on what they need to take for classes, as it's usually by word of mouth and suggestions from a single advisor we get in the department, so a fun solution was to make a website all about planning for UD, this site allows you to make a plan which can hold multiple semesters and the semesters can hold multiple courses from a list of all UD courses.",
    Header2: "Integrated Problem Checker",
    Paragraph2: "Included with applying for courses is a list of potential problems with your plan that can prevent you from graduating. We looked at every single major from UD and integrated a list of problems that contains all degree requirements."
  }
];

const Projects = () => {
  return (
    <div className="project-container">
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>

          <div className='project-image-container'>
            <img src={project.ImageUrl} alt={project.Name} className="project-image" />
          </div>

          <h2 className='project-title'>{project.Name}</h2>
          <i className="project-timeframe">{project.TimeFrame}</i>
          <h3 className="project-header">{project.Header1}</h3>
          <p className="project-body">{project.Paragraph1}</p>
          <h3 className="project-header">{project.Header2}</h3>
          <p className="project-body">{project.Paragraph2}</p>

          <div className='project-button-container'>
            <a href={project.Link} target="_blank" rel="noopener noreferrer">
              <button>Visit Website</button>
            </a>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Projects;