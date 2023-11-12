import React from "react";

function Scribing(){
    return(

<div className="scribing" id="scribing">
    <div className="background-image scribing"></div>
    <div className="page">
        <h2>Downtime Activity: Scribing a Spell Scroll</h2>
        <p>With time and patience, a spellcaster can transfer a spell to a scroll, creating a spell scroll.</p>

        <h3>Resources</h3>
        <p>Scribing a spell scroll takes an amount of time and money related to the level of the spell the character wants to scribe, as shown in the table below. In addition, the character must have proficiency in the Arcana skill and must provide any material components required for the casting of the spell. Moreover, the character must have the spell prepared, or it must be among the character’s known spells, in order to scribe a scroll of that spell.</p>

        <table>
            <thead>
                <tr>
                    <td>Spell Level</td>
                    <td>Time</td>
                    <td>Cost (GP)</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cantrip</td>
                    <td>0.5 Day (14 / week) </td>
                    <td>15 gp </td>
                </tr>
                <tr>
                    <td>1st</td>
                    <td>0.5 Day (14 / week)</td>
                    <td>25 gp </td>
                </tr>
                <tr>
                    <td>2nd</td>
                    <td>1 Day (7 / week) </td>
                    <td>250 gp </td>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>3.5 Days (2 / week) </td>
                    <td>500 gp </td>
                </tr>
                <tr>
                    <td>4th</td>
                    <td>1 Week</td>
                    <td>2,500 gp</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>2 Weeks</td>
                    <td>5,000 gp</td>
                </tr>
                <tr>
                    <td>6th</td>
                    <td>4 Weeks</td>
                    <td>10,000 gp</td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>8 Weeks</td>
                    <td>25,000 gp</td>
                </tr>
                <tr>
                    <td>8th</td>
                    <td>16 Weeks</td>
                    <td>50,000 gp</td>
                </tr>
                <tr>
                    <td>9th</td>
                    <td>24 Weeks</td>
                    <td>100,000 gp</td>
                </tr>
            </tbody>
        </table>
        <h2> Downtime Activity: Copying Spells into a Spellbook </h2>
        <p> A wizard may spend a week of downtime Copying spells from another source into there spellbook. Spending a week of downtime doing this activity gives you access to 56 hours of time to copy as you wish. (for creatures that only sleep 4 hours they may copy spells for 84 hours a week). </p>
    </div>
</div>

    )
}

export default Scribing;