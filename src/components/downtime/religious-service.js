import React from "react";

function ReligiousService(){
    return(
    <div className="religious-service" id="religious-service">
        <div className="background-image religious-service"></div>
        <div className="page">
            <h2>Downtime Activity: Religious Service</h2>
            <p>Characters with a religious bent might want to spend downtime in service to a temple, either by attending rites or by proselytizing in the community. Someone who undertakes this activity has a chance of winning the favor of the temple's leaders.</p>

            <h3>Resources</h3>
            <p>Performing religious service requires access to, and often attendance at, a temple whose beliefs and ethos align with the character's. If such a place is available, the activity takes one workweek of time but involves no gold piece expenditure.</p>

            <h3>Resolution</h3>
            <p>At the end of the required time, the character chooses to make either an Intelligence (Religion) check or a Charisma (Persuasion) check. The total of the check determines the benefits of service, as shown on the Religious Service table.</p>

            <h3>Religious Service</h3>
            <table>
                <thead>
                    <tr>
                        <th>Check Total</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1—10</td>
                        <td>No effect. Your efforts fail to make a lasting impression.</td>
                    </tr>
                    <tr>
                        <td>11—20</td>
                        <td>You earn one favor.</td>
                    </tr>
                    <tr>
                        <td>21+</td>
                        <td>You earn two favors.</td>
                    </tr>
                </tbody>
            </table>

            <p>A favor, in broad terms, is a promise of future assistance from a representative of the temple. It can be expended to ask the temple for help in dealing with a specific problem, for general political or social support, or to reduce the cost of cleric spellcasting by 50 percent. A favor could also take the form of a deity's intervention, such as an omen, a vision, or a minor miracle provided at a key moment. This latter sort of favor is expended by the DM, who also determines its nature.</p>

            <p>Favors earned need not be expended immediately, but only a certain number can be stored up. A character can have a maximum number of unused favors equal to 1 + the character's Charisma modifier (minimum of one unused favor).</p>
        </div>
    </div>
    )
}

export default ReligiousService;