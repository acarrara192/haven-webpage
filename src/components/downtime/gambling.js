import React from "react";


function Gambling(){
    return(
    <div className="gambling" id="gambling">
        <div className="background-image gambling"></div>
        <div className="page">
            <h2>Downtime Activity: Gambling</h2>
            <p>Games of chance are a way to make a fortune—and perhaps a better way to lose one.</p>

            <h3>Resources</h3>
            <p>This activity requires one workweek of effort plus a stake of at least 10 gp, to a maximum of 1,000 gp.</p>

            <h3>Resolution</h3>
            <p>The character must make a series of checks, with a DC determined at random based on the quality of the competition that the character runs into. Part of the risk of gambling is that one never knows who might end up sitting across the table.</p>

            <p>The character makes three checks:</p>
            <ul>
                <li>Wisdom (Insight)</li>
                <li>Charisma (Deception)</li>
                <li>Charisma (Intimidation)</li>
            </ul>

            <p>If the character has proficiency with an appropriate gaming set, that tool proficiency can replace the relevant skill in any of the checks. The DC for each of the checks is 5 + 2d10; generate a separate DC for each one. Consult the Gambling Results table to see how the character did.</p>

            <h3>Gambling Results</h3>
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
                        <td>Lose all the money you bet, and accrue a debt equal to that amount.</td>
                    </tr>
                    <tr>
                        <td>1 success</td>
                        <td>Lose half the money you bet.</td>
                    </tr>
                    <tr>
                        <td>2 successes</td>
                        <td>Gain the amount you bet plus half again more.</td>
                    </tr>
                    <tr>
                        <td>3 successes</td>
                        <td>Gain double the amount you bet.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    )

}
export default Gambling;