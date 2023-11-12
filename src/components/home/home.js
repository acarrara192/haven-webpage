import React from "react"
import "./home.css"

function Home() {
    return(
        <div className="home">
                <div className="text-box">
                    <div className="text-box-content">
                        <h1> WELCOME TO HAVEN! </h1>
                        <p> 
                        A realm where you can play Dungeons & Dragons, go on epic quests, roleplay with your favorite characters and much more!
                        Haven is an expansive D&D 5e discord server with Adventure League style play, over 50+ roleplay channels, homebrew rulesets for crafting, guilds, pets & mounts and more! 
                        </p>
                        <p>
                            Join the discord server here: 
                            <a href="https://discord.gg/qdy9c7CMjf" target="_blank" rel="noopener noreferrer"> https://discord.gg/qdy9c7CMjf </a>
                        </p>
                    </div>
                </div>
            <p className="art-credit-home"> Art by Yuji Himukai</p>
        </div>   
    )
}

export default Home;