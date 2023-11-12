import React from "react";


function Work(){
    return(
    <div className="work" id="work">
        <div className="background-image work"></div>
        <div className="page">
            <h3>Downtime Activity: Work</h3>
            <p>When all else fails, an adventurer can turn to an honest trade to earn a living. This activity represents a character’s attempt to find temporary work, the quality and wages of which are based upon your rank.</p>

            <p>Upon completion of your week of working, you may either choose to work for an NPC in Haven or another realm and gain an amount of gold based upon your rank (as detailed below), or you may choose to work for a Guild, spending your time building or construction. If you choose this option, the payment amount is decided by the Guild Leader.</p>

            <ul>
                <li><strong>@Bronze [1-4]</strong> - 50gp</li>
                <li><strong>@Silver [5-8]</strong> - 100gp</li>
                <li><strong>@Electrum [9-12]</strong> - 250gp</li>
                <li><strong>@Gold [13-16]</strong> - 500gp</li>
                <li><strong>@Platinum [17-20]</strong> - 1000gp</li>
            </ul>
        </div>
    </div>
    )
}

export default Work; 