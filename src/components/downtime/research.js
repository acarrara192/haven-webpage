import React from "react";

function Research(){
    return(
    <div className="research" id="research">
        <div className="background-image research"></div>
        <div className="page">     
            <h2>Downtime Activity: Research</h2>
            <p>Forewarned is forearmed. The research downtime activity allows a character to delve into lore concerning a monster, a location, a magic item, or some other particular topic.</p>

            <h3>Resources</h3>
            <p>Typically, a character needs access to a library or a sage to conduct research. Assuming such access is available, conducting research requires one workweek of effort and at least 50 gp spent on materials, bribes, gifts, and other expenses.</p>

            <h3>Resolution</h3>
            <p>The character declares the focus of the research—a specific person, place, or thing. After one workweek, the character makes an Intelligence check with a +1 bonus per 50 gp spent beyond the initial 50 gp, to a maximum of +6. In addition, a character who has access to a particularly well-stocked library or knowledgeable sages gains advantage on this check. Determine how much lore a character learns using the Research Outcomes table.</p>

            <table>
                <thead>
                    <tr>
                        <th>Check Total</th>
                        <th>Outcome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1—5</td>
                        <td>No effect.</td>
                    </tr>
                    <tr>
                        <td>6—10</td>
                        <td>You learn one piece of lore.</td>
                    </tr>
                    <tr>
                        <td>11—20</td>
                        <td>You learn two pieces of lore.</td>
                    </tr>
                    <tr>
                        <td>21+</td>
                        <td>You learn three pieces of lore.</td>
                    </tr>
                </tbody>
            </table>

            <p>Each piece of lore is the equivalent of one true statement about a person, place, or thing. Examples include knowledge of a creature's resistances, the password needed to enter a sealed dungeon level, the spells commonly prepared by an order of wizards, and so on.</p>

            <p>As DM, you are the final arbiter concerning exactly what a character learns. For a monster or an NPC, you can reveal elements of statistics or personality. For a location, you can reveal secrets about it, such as a hidden entrance, the answer to a riddle, or the nature of a creature that guards the place.</p>
            
            <h2>Downtime Activity: Arcane Research</h2>
            <p>Some players may wish to search for certain magical items in particular without having to craft them. This is a form of guaranteed loot, but it follows different rules. If you spend the below listed DT and Gold, you have a chance to be granted the item of your choice.</p>

            <p>Upon completion of this time and payment of this gold (gold must be paid at the start), you have a 50% chance to get the item you have searched for. You can attempt to get the same item more than once. Arcane Research is halved for consumables (rounded down). Tomes and Manuals are not considered consumables.</p>

            <h3>Rare Item</h3>
            <p><strong> Rank Required: Electrum [9-12] | Prestige Required: Adamantine [9-12]</strong></p>
            <p>5 weeks</p>
            <p>2,500gp</p>
            <p>50% Chance to succeed</p>

            <h3>Very Rare Item</h3>
            <p><strong> Rank Required: Gold [13-16] | Prestige Required: Mithral [13-16]</strong></p>
            <p>10 weeks</p>
            <p>25,000gp</p>
            <p>50% Chance to succeed</p>

            <h3>Tomes & Manuals</h3>
            <p><strong> Rank Required: Gold[13-16] </strong></p>
            <p> 15 weeks </p>
            <p> 100,000gp </p>
            <p> 50% Chance to succeed </p>
            <p> Stat Limit: 24 </p>
            <p> Prestige Stat Limit: 30 </p>

            <h3>Legendary Item</h3>
            <p><strong> Rank Required: Platinum [17-20] | Prestige Required: Diamond [17-20]</strong></p>
            <p>25 weeks</p>
            <p>250,000gp</p>
            <p>50% Chance to succeed</p>
        </div>
    </div>

    )
}

export default Research;