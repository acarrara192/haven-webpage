import React from "react";


function Training(){
    return(
        <div className="training" id="training">
            <div className="background-image training"></div>
            <div className="page">
                <h2>Downtime Activity: Training</h2>
                <p>Given enough free time and the services of an instructor, a character can learn a language, pick up proficiency with a tool, instrument, or vehicle.</p>

                <h3>Resources</h3>
                <p>Receiving training in a language or tool typically takes at least ten workweeks, but this time is reduced by a number of workweeks equal to the rounded-down average between the character's Intelligence modifier and the teacher's modifier (an Intelligence penalty doesn't increase the time needed). Training costs 25 gp per workweek.</p>

                <h3>Results</h3>
                <p>The amount of time to complete your training is equal to 10 minus the rounded-down average intelligence of both the teacher and the student (Minimum 5).</p>
            </div>
        </div>
    )
}

export default Training;