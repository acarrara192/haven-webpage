import React from "react";

function SpellwroughtTattoos(){
    return(
        <div className="spellwrought-tattoos" id="spellwrought-tattoos">
            <div className="background-image spellwrought-tattoos"></div>
            <div className="page">
                <h2>Downtime Activity: Spellwrought Tattoos</h2>
                <p>With time and patience, a spellcaster with Arcana Proficiency and proficiency in Calligrapher's Tools can transfer a spell they know to a magical Tattoo, creating a Spellwrought Tattoo. These Magical Tattoos do not follow the same rules as base magic item crafting. Below are the requirements listed:</p>

                <p>Creating the inkwell for a Spellwrought Tattoo takes an amount of time and money related to the level of the spell the character wants to create, as shown in the table below.</p>

                <table>
                    <thead>
                        <tr>
                            <td>Spell Level</td>
                            <td>Time</td>
                            <td>Cost (Gold Pieces)</td>
                            <td>Rarity</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>7 per Week</td>
                            <td>25 gp</td>
                            <td>Common</td>
                        </tr>
                        <tr>
                            <td>1st</td>
                            <td>7 per Week</td>
                            <td>50 gp</td>
                            <td>Common</td>
                        </tr>
                        <tr>
                            <td>2nd</td>
                            <td>2 per Week</td>
                            <td>500 gp</td>
                            <td>Uncommon</td>
                        </tr>
                        <tr>
                            <td>3rd</td>
                            <td>2 per Week</td>
                            <td>1,000 gp</td>
                            <td>Uncommon</td>
                        </tr>
                        <tr>
                            <td>4th</td>
                            <td>1 Week</td>
                            <td>5,000 gp</td>
                            <td>Rare</td>
                        </tr>
                        <tr>
                            <td>5th</td>
                            <td>2 Weeks</td>
                            <td>7,500 gp</td>
                            <td>Rare</td>
                        </tr>
                    </tbody>
                </table>

                <p>Tattoos, Spell Scrolls, and Storing spells require the material components to be paid up front.</p>
            </div>
        </div>
    )

}

export default SpellwroughtTattoos;