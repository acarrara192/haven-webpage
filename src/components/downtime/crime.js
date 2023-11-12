import React from "react";



function Crime(){
    return(
<div className="crime" id="crime">
    <div className="background-image crime"></div>
    <div className="page">
        <h2>Downtime Activity: Crime</h2>
        <p>Sometimes it pays to be bad. This activity gives a character the chance to make some extra cash, at the risk of arrest.</p>

        <h3>Resources</h3>
        <p>A character must spend one week and at least 25 gp gathering information on potential targets before committing the intended crime.</p>

        <h3>Resolution</h3>
        <p>The character must make a series of checks, with the DC for all the checks chosen by the character according to the amount of profit sought from the crime.</p>

        <p>To attempt a crime, the character makes three checks:</p>
        <ul>
            <li>Dexterity (Stealth)</li>
            <li>Dexterity using thieves' tools</li>
            <li>The player's choice of Intelligence (Investigation), Wisdom (Perception), or Charisma (Deception)</li>
        </ul>

        <p>If none of the checks are successful, the character is caught and jailed. The character must pay a fine equal to the profit the crime would have earned and must spend one week in jail for each 25 gp of the fine. If only one check is successful, the heist fails but the character escapes. If two checks are successful, the heist is a partial success, netting the character half the payout. If all three checks are successful, the character earns the full value of the loot.</p>

        <h3>Crime Loot Table</h3>
        <table>
            <thead>
                <tr>
                    <th>Difficulty</th>
                    <th>Gold Reward</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Easy</td>
                    <td>50 gp</td>
                </tr>
                <tr>
                    <td>Medium</td>
                    <td>100 gp</td>
                </tr>
                <tr>
                    <td>Hard</td>
                    <td>200 gp</td>
                </tr>
                <tr>
                    <td>Very Hard</td>
                    <td>1000 gp</td>
                </tr>
            </tbody>
        </table>

        <p>A DM may choose to be more creative with these checks and make the activity more complicated; however, if they choose to add difficulty, there will be a respective increased reward.</p>
    </div>
</div>
    )
}

export default Crime;