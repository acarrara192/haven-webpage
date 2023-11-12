import React from "react";

function TrainingAnimals() {
    return(
        <div className="training-animals" id="training-animals">
            <div className="background-image training-animals"></div>
            <div className="page">
                <h2>Downtime Activity: Training Animals </h2>

                <h3> Resources </h3>
                <p> Taming or training an animal typically takes at least several workweeks, in which you constantly train with the animal. You need at least 2 hours of concentrated training each day to make any progress and a place to house it (See Guilds/Housing). Any additional training might risk overexerting the animal and losing training progress or its Trust (see below). However, you can train different animals on the same day. It costs 50gp for beasts, 500gp for monstrosities and plants, 1000gp for fey, fiends, and elementals, and 2000gp for dragons per training day.</p>

                <p>An untrained, but otherwise tame animal must always be trained as a pet before it can receive any further training. Likewise, any wild animal must first be tamed — becoming used to the presence of the trainer and accepting food and physical contact — before it can receive training as a pet. If you bought an already trained animal, you still need to gain its trust first.</p>

                <h3>Resolution</h3>
                <p>After each week of training, make a DC 15 Wisdom (Animal Handling) check. This check is modified by the type of training you wish to impart.</p>

                <h3>Complications</h3>
                <p>If you rolled a total of 5 or lower on your Wisdom (Animal Handling) check, you overexerted the animal or made a grave mistake. You lose 1 training success. Rolling a 1 always counts as a failure. If you fail twice in a row, you lost the animal's trust. If you fail twice in a row while trying to regain an animal's trust, you lost the last chance of cooperation. It will no longer follow any of your commands unless it has no other choice and will try to run away from you whenever the opportunity arises and must find a new companion to train.</p>

                <p>Once you have accumulated a certain number of training successes, the training is considered successfully finished.</p>
            </div>
        </div>
    )
}

export default TrainingAnimals;