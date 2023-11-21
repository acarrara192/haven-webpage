import React from "react"
import "./home.css"

function Home() {
    return(
        <div className="home">
            <div className="overlay">
                <div className="text-box">
                    <div className="text-box-content">
                        <h2> WELCOME TO </h2>
                        <h1> HAVEN </h1>
                        
                        <p> 
                        An expansive D&D 5e discord server with Adventure League style play, over 50+ roleplay channels, homebrew rulesets for crafting, guilds, pets & mounts and more! 
                        </p>
                        <p>
                            Join the discord server here: 
                            <a href="https://discord.gg/qdy9c7CMjf" target="_blank" rel="noopener noreferrer"> https://discord.gg/qdy9c7CMjf </a>
                        </p>
                    </div>
                </div>
                <div className="art-credit wrapper">
                    <p className="art-credit-home"> Art by Yuji Himukai</p>
                </div>
            </div>
        </div>   
    )
}

export default Home;