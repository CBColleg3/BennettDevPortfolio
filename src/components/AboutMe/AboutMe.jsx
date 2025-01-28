import React from 'react'
import './AboutMe.scss'

const AboutMe = () => {
  return (
    <div className='aboutMe-container'>

      <div className='aboutMe-image-container' >
        <img src="/images/chris.jpg"></img>
      </div>

      <h3 className='aboutMe-header'>Who Are You?</h3>
      <div>
      My name is Christopher Bennett and I am a recent University of Delaware graduate with a bachelors degree in Computer Science. 
      I am interested in Software Development and Game Development. My hobbies involve lifting, cycling, and designing games.
      </div>

      <h3 className='aboutMe-header'>Why Programming?</h3>
      <div>
      I've been programming probably since I was 10, it all started with me aspiring to make my own games, this lead to countless tutorials on how to get started on programming 
      and here we are. One college degree later in computer science and programming is now my favorite thing to do, there are so many things you can learn and still be wanting 
      to know more, the opportunities involved with coding is endless and I'm here for it!
      </div>

      <h3 className='aboutMe-header'>Best line of code written?</h3>


      <div className='aboutMe-image-container' >
        <img src="/images/chriscode.png"></img>
      </div>


      <h3 className='aboutMe-header'>What is one dev tool you've used in production that you're excited about and why? </h3>
      <div>
      One development tool I became particularly excited about was the Runn API, which I utilized during my internship at Endevor. My manager needed an efficient way to oversee our engineering team by assigning tasks based on availability while avoiding scheduling conflicts across projects.
      My role was to build a timeline site that displayed all team members, the projects they were working on, and the start and completion dates for each task. Since the team was transitioning to Runn, I leveraged the Runn API to not only retrieve detailed data about team assignments but also to identify key projects from different sections and pinpoint potential overlaps.
      This project was a valuable learning experience, as it required me to quickly adapt to new tools and deliver results within a tighter-than-usual deadline. It also served as my final project for the internship, marking a culmination of my contributions to the team.
      </div>

      <h3 className='aboutMe-header'>What is one project you've worked on that required scaling  and how did that turn out?</h3>
      <div>
      One of my most significant projects requiring extensive scaling was Escape From The Sun, a game I developed over the course of a year and released on Steam. This project marked my introduction to the Unity game engine and C# programming, making it both a valuable learning experience and a stepping stone toward mastering the language.
      Through the development process, I gained a deeper understanding of key concepts such as reusable code, object-oriented programming, and breaking down complex tasks into manageable steps. These skills not only improved my ability to tackle challenging problems but also enhanced my overall efficiency as a developer.
      The game achieved moderate success, and the process greatly contributed to my growth. I became more adept at debugging and significantly improved my critical thinking skills. I also managed to refactor a considerable amount of legacy code and resolve numerous bugs more quickly than ever before. While there are aspects of the codebase I wish I had designed better, I'm ultimately proud of the project and satisfied with the final result.
      </div>
    </div>
  )
}

export default AboutMe