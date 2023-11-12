import React from "react";

function Relaxation(){
    return(
<div className="relaxation" id="relaxation">
    <div className="background-image relaxation"></div>
    <div className="page">
        <h2>Downtime Activity: Relaxation</h2>
        <p>Sometimes the best thing to do between adventures is relax. Whether a character wants a hard-earned vacation or needs to recover from injuries, relaxation is the ideal option for adventurers who need a break. This option is also ideal for players who don't want to make use of the downtime system.</p>

        <h3>Resources</h3>
        <p>Relaxation requires one week. A character needs to maintain at least a modest lifestyle while relaxing to gain the benefit of the activity.</p>

        <h3>Resolution</h3>
        <p>Characters who maintain at least a modest lifestyle while relaxing gain several benefits. While relaxing, a character gains advantage on saving throws to recover from long-acting diseases and poisons. In addition, at the end of the week, a character can end one effect that keeps the character from regaining hit points, or can restore one ability score that has been reduced to less than its normal value. This benefit cannot be used if the harmful effect was caused by a spell or some other magical effect with an ongoing duration.</p>


        <h3>Relaxation Table</h3>
        <table>
            <thead>
                <tr>
                    <th> Rank </th>
                    <th> THP gained </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bronze [1-4]</td>
                    <td>2d4+4</td>
                </tr>
                <tr>
                    <td>Silver [5-8]</td>
                    <td>4d4+8</td>
                </tr>
                <tr>
                    <td>Electrum [9-12]</td>
                    <td>6d4+6</td>
                </tr>
                <tr>
                    <td>Gold [13-16]</td>
                    <td>8d4+8</td>
                </tr>
                <tr>
                    <td>Platinum [17-20]</td>
                    <td>10d4+20</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

    )
}

export default Relaxation;