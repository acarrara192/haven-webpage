import React from "react";

function PitFighting(){
    return(
    <div className="pit-fighting" id="pit-fighting">
        <div className="background-image pit-fighting"></div>
        <div className="page">
            <h2>Downtime Activity: Pit Fighting</h2>
            <p>Pit fighting includes boxing, wrestling, and other nonlethal forms of combat in an organized setting with predetermined matches. If you want to introduce competitive fighting in a battle-to-the-death situation, the standard combat rules apply to that sort of activity.</p>

            <h3>Resources</h3>
            <p>Engaging in this activity requires one workweek of effort from a character.</p>

            <h3>Resolution</h3>
            <p>The character must make a series of checks, with a DC determined at random based on the quality of the opposition that the character runs into. A big part of the challenge in pit fighting lies in the unknown nature of a character's opponents.</p>

            <p>The character makes three checks:</p>
            <ul>
                <li>Strength (Athletics)</li>
                <li>Dexterity (Acrobatics)</li>
                <li>Constitution check</li>
            </ul>

            <p>The DC for each of the checks is 5 + 2d10; generate a separate DC for each one. Consult the Pit Fighting Results table to see how the character did.</p>

            <h3>Pit Fighting Results</h3>
            <table>
                <thead>
                    <tr>
                        <th>Result</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0 successes</td>
                        <td>Lose your bouts, earning nothing.</td>
                    </tr>
                    <tr>
                        <td>1 success</td>
                        <td>Win 50 gp.</td>
                    </tr>
                    <tr>
                        <td>2 successes</td>
                        <td>Win 100 gp.</td>
                    </tr>
                    <tr>
                        <td>3 successes</td>
                        <td>Win 200 gp.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )   
}

export default PitFighting;