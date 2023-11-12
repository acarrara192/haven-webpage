import React from "react";

function Carousing() {
    return(
    <div className="carousing" id="carousing">
        <div className="background-image carousing" ></div>
        <div className="page">
        <h2>Downtime Activity: Carousing</h2>
        <p>Carousing is a default downtime activity for many characters. Between adventures, who doesn't want to relax with a few drinks and a group of friends at a tavern?</p>
        
        <h3>Resources</h3>
        <p>Carousing covers a workweek of fine food, strong drink, and socializing. A character can attempt to carouse among lower-, middle-, or upper-class folk. A character can carouse with the lower class for 10 gp to cover expenses, or 50 gp for the middle class. Carousing with the upper class requires 250 gp for the workweek and access to the local nobility.</p>
        <p>A character with the noble background can mingle with the upper class, but other characters can do so only if you judge that the character has made sufficient contacts. Alternatively, a character might use a disguise kit and the Deception skill to pass as a noble visiting from a distant city.</p>

        <h3>Resolution</h3>
        <p>After a workweek of carousing, a character stands to make contacts within the selected social class. The character makes a Charisma (Persuasion) check using the Carousing table.</p>

        <table>
            <thead>
                <tr>
                    <th>Check Total</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1—5</td>
                    <td>Character has made a hostile contact.</td>
                </tr>
                <tr>
                    <td>6—10</td>
                    <td>Character has made no new contacts.</td>
                </tr>
                <tr>
                    <td>11—15</td>
                    <td>Character has made an allied contact.</td>
                </tr>
                <tr>
                    <td>16—20</td>
                    <td>Character has made two allied contacts.</td>
                </tr>
                <tr>
                    <td>21+</td>
                    <td>Character has made three allied contacts.</td>
                </tr>
            </tbody>
        </table>

        <p>Lower-class contacts include criminals, laborers, mercenaries, the town guard, and any other folk who normally frequent the cheapest taverns in town.</p>
        <p>Middle-class contacts include guild members, spellcasters, town officials, and other folk who frequent well-kept establishments.</p>
        <p>Upper-class contacts are nobles and their personal servants. Carousing with such folk covers formal banquets, state dinners, and the like.</p>

        <p>Once a contact has helped or hindered a character, the character needs to carouse again to get back into the NPC's good graces. A contact provides help once, not help for life.</p>
        </div>
    </div>
    
    )

}

export default Carousing;