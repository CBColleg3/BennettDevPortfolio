import React from 'react'
import './Games.scss'

const gameData = [
  {
    Name: "Climate Chantey",
    ImageUrl: "/images/climatechantey.png",
    TimeFrame: "Jan 2024 - Mar 2024",
    Link: "https://github.com/m-bocelli/climate-chantey",
    Header1: "Game Jam Winner",
    Paragraph1: "Earned an Award for the best Women Leadership in the 2024 Climate Jam through the player character Kaptain Kori. This was my first fully voice acted game project with every developer on the team providing some form of voicework which really helped with immersion beyond the simple text based dialogue.",
    Header2: "Games for the Environment",
    Paragraph2: "A game to represent the dangers of climate change, which has developed into a major world issue. It takes place in a world set in a distant future, with sea levels that have risen everywhere and you play as a Captain on a boat to rescue the islanders from impeding doom, you can also collect trash along the way and use it as ammo to destroy the trash monsters who formed from all of the plastic in the ocean, and the harmful oil rigs which have been polluting the waters with tons of oil every day. Once you save all of the islanders you can return home and end in a victory screen!"
  },
  {
    Name: "One Night At The Zoo",
    ImageUrl: "/images/onazimage.png",
    TimeFrame: "Jun 2023 - Jul 2023",
    Link: "https://store.steampowered.com/app/2303670/Escape_From_The_Sun/",
    Header1: "Youtube Tutorial Series",
    Paragraph1: "A guided tutorial series on how this game was developed is provided to those who would like to build their own 'Five Night's at Freddy's' game from scratch.",
    Header2: "Learning Tool for new developers",
    Paragraph2: "A clean codebase is provided for aspiring Unity developers to take the project and make it their own via modifications."
  },
  {
    Name: "Buccaneer Brawl",
    ImageUrl: "/images/buccaneerbrawl.png",
    TimeFrame: "Jan 2023 - May 2023",
    Link: "https://github.com/Spring-2023-CISC374/group-project-buccaneer-brawl",
    Header1: "Educational Game for Elementary Students",
    Paragraph1: "I believe that games serve more of a purpose then just having fun, so this game's goal was to be developed as a learning experience first, with targeted concepts that allow you to learn key concepts of what its trying to teach.",
    Header2: "Tool to learn code concepts in a fun game",
    Paragraph2: "Buccaneer Brawl was all about algorithmic function coded into a 2D Fighter, before the round begins each player would need to type out a list of attacks the pirate will use before the battle. During the match, each pirate will perform the actions given by the players sequentially until they run out of commands and start from the beginning. Victory is obtained through the player who utilizes the best step-by-step instructions to defeat the other player, similar to how algorithms run sequentially in code and how debugging works with knowing what line of code goes where."
  },
  {
    Name: "Escape From The Sun",
    ImageUrl: "/images/escapefromthesuntitle.png",
    TimeFrame: "Apr 2021 - Mar 2023",
    Link: "https://store.steampowered.com/app/2303670/Escape_From_The_Sun/",
    Header1: "Published Steam Game Project",
    Paragraph1: "My very first published game with both steam achievement functionality and backed up saves with Steam Cloud. All of the achievements had to be developed into the game after the steam release which led to a few achievement bugs I had to fix quickly, while there are some achievements that are going to be a huge challenge for players to complete, I'm ultimately eager to grant some great long term goals for players who want an extra challenge while completing the game.",
    Header2: "First Unity Project",
    Paragraph2: "Escape from the Sun was a personal learning experience during my early years of exploring programming. The game began as a test for a high school project, but over time, I realized it had the potential to become something greater. I frequently updated the game, even though the project was often lost due to my older laptops breaking down. These setbacks pushed me to create new prototypes, each improving the gameplay and helping me grow as a game designer. After developing 3–4 iterations of the game, I finally released the completed version on Steam in 2023."
  },
]

const Games = () => {
  return (
    <>
      <div className="game-container">
        {gameData.map((game, index) => (
          <div className="game-card" key={index}>
            <div className='game-image-container'>
              <img src={game.ImageUrl} alt={game.Name} className="game-image" />
            </div>

            <h2 className='game-title'>
              {game.Name}
            </h2>
            <i className="game-timeframe">{game.TimeFrame}</i>
            <h3 className="game-header">{game.Header1}</h3>
            <p>{game.Paragraph1}</p>
            <h3 className="game-header">{game.Header2}</h3>
            <p className="game-body">{game.Paragraph2}</p>

            <div className="game-button-container">
              <a href={game.Link} target="_blank" rel="noopener noreferrer">
                <button>View Game</button>
              </a>
            </div>

          </div>
        ))}
      </div>
    </>


  )
}

export default Games