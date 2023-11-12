import React from "react";


function MonsterHunting(){
    return(
        <div className="monster-hunting" id="monster-hunting">
            <div className="background-image monster-hunting"></div>
            <div className="page">
                <h2>Downtime Activity: Monster Research / Monster Hunting for Parts</h2>
                <p>Adventurers can research what a creature is likely to desire, where it can be found, or whom might already possess a part. Specific creatures types need specific skills to track and trace. The DC for a relevant ability check equals 5 + the creature’s challenge rating.</p>

                <h3>Resolution</h3>
                <p>A successful result can yield crafting materials from select creature types. </p>
                <h3>Creature Types and Required Skills</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Creature Type</td>
                            <td>Required Skill(s)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aberration</td>
                            <td>Arcana</td>
                        </tr>
                        <tr>
                            <td>Beast</td>
                            <td>Animal Handling, Nature, or Survival</td>
                        </tr>
                        <tr>
                            <td>Celestial</td>
                            <td>Arcana or Religion</td>
                        </tr>
                        <tr>
                            <td>Construct</td>
                            <td>Arcana</td>
                        </tr>
                        <tr>
                            <td>Dragon</td>
                            <td>Arcana, History, or Nature</td>
                        </tr>
                        <tr>
                            <td>Elemental</td>
                            <td>Arcana or Nature</td>
                        </tr>
                        <tr>
                            <td>Fey</td>
                            <td>Arcana or Nature</td>
                        </tr>
                        <tr>
                            <td>Fiend</td>
                            <td>Arcana or Religion</td>
                        </tr>
                        <tr>
                            <td>Giant</td>
                            <td>History</td>
                        </tr>
                        <tr>
                            <td>Humanoid</td>
                            <td>History</td>
                        </tr>
                        <tr>
                            <td>Monstrosity</td>
                            <td>Nature or Survival</td>
                        </tr>
                        <tr>
                            <td>Ooze</td>
                            <td>Arcana or Survival</td>
                        </tr>
                        <tr>
                            <td>Plant</td>
                            <td>Nature or Survival</td>
                        </tr>
                        <tr>
                            <td>Undead</td>
                            <td>Arcana or Religion</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Cost by Rarity</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Rarity</td>
                            <td>Challenge Rating</td>
                            <td>Cost (GP)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Common</td>
                            <td>CR 1-5 Ingredient</td>
                            <td>50 GP</td>
                        </tr>
                        <tr>
                            <td>Uncommon</td>
                            <td>CR 6-11 Ingredient</td>
                            <td>250 GP</td>
                        </tr>
                        <tr>
                            <td>Rare</td>
                            <td>CR 12-18 Ingredient</td>
                            <td>500 GP</td>
                        </tr>
                        <tr>
                            <td>Very rare</td>
                            <td>CR 19+ Ingredient</td>
                            <td>1,000 GP</td>
                        </tr>
                    </tbody>
                </table>


                <p>Spells or abilities to get a benefit on this roll with a limited duration (such as the guidance and enhance ability spells) are not allowed for researching creatures. In contrast, the Ranger's "Favored Enemy" grants an advantage on the roll.</p>

                <p>No oversight required but may be subject to STAFF discretion, the above are some examples of possibilities. The same rank restrictions apply as those of "Crafting Magical Items."</p>

                <p>Cannot be done for homebrew monsters.</p>
        </div>
    </div>
    )
}

export default MonsterHunting;