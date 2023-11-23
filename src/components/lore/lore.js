import React from "react";
import "./lore.css"
import siblings from "../../images/lore/andrathion-and-edlothia.png"
import burning from "../../images/lore/the-burning-of-teldrassil-optimized.jpg"
import silvenore from "../../images/lore/silvenore-optimized.jpg"
import namira from "../../images/lore/namira-optimized.jpg"
import solemn from "../../images/lore/solemn.png"
import shambhala from "../../images/lore/shambhala.png"


function Lore() {
    return (
          <div className="lore-container">
            <div className="page">
            <div className="background-image lore-bg"></div>
              <h1> The World of Haven </h1>
              <hr></hr>
              <div id="world-of-haven" className="world-of-haven section">
                <p> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Haven is a realm teeming with wondrous places to discover. The world floats far above clouds in the skies. Its most notable feature is the large oak tree in the central area of the land. This oak is known as Eloviel and some refer it to as the World Tree.

                    Adventurers of all walks of life find themselves drawn to the call of Eloviel, as her voice rings out in your dreams. In your mind, she is a soothing presence, benevolent, and offers those in need her protection a place of respite.

                    In your dreams, she leads you through an oaken archway of wood and vine. Upon entering you are left under her branches, her caress, and protection in the island city of Haven, her warm presence never leaving.

                    You are free to come and go as you please using the World Tree, Elvoiel. She has many archways branching to different realms. If you wish to go and out and complete "Quests," you may hear her guiding voice in your head, relaying a message to you that comes from those who have asked for assistance, and she will lead you to the realm that is in need.
                </p>
              </div>
              <div id="era-of-chaos" className="era-of-chaos section">
                <h2> Era of Chaos </h2>
                <p> Long ago, a prophecy foretold visions of a realm being torn asunder, it spoke of destruction upon the world of arrogant mortals. However, within this turmoil, it has been said that in ancient tradition, among the elves, a child would bear the markings of the Elder Oak. But fate has an awful way of twisting one’s story. The prophecy would dictate two siblings, brother and sister. One would bring upon an era of chaos to the world, and the other a great sacrifice. </p>
                <p> Andrathion, meaning son of Andrath and "Long Journey," was a strong boy from birth, unlike his sister who was frail and prone to sickness. She was given the name Edlothia, meaning "To Blossom" or "Flower" in ancient tongue, in hopes she too would grow to be strong. There was nothing in this world that Andrathion cherished more than his younger sister, and it was that very love that would bring forth calamity.</p>
                <img src={siblings} alt="siblings"></img>
                <figcaption> Andrathion and Edlothia </figcaption>
                <p> The dark ages befell the lands and magic was taken from worlds, and with that came the decay. The same sickness befell Edlothia with the absence of magic. In order to save his sister from the ultimate sacrifice, Andrathion traveled the planes and stole the powers of magic, leaving behind nothing. But travelling the planes came at a cost. Remnants of such power was left behind in the worlds visited. These remnants would eventually ignite the spark within a select few, who would eventually rise to aid in the era of chaos. These individuals would be known as Planeswalkers.</p>            
                <img src={burning} alt="Burning of Teldrassil"></img>
                <figcaption> The first of the Planeswalkers to arrive to a distraught Haven. </figcaption>
                <p>Upon his return Andrathion unleashed the collective of gathered magic in an attempt to free his sister, Edlothia, from the shackles of fate. But fate has an awful way of twisting one’s story. Due to it reckless nature, the unleashed power of pure magic was unstable, bringing forth an era of void and chaos. It was then that Edlothia made her choice. She who bore the marking of the Elder Oak, blessed by the lands, returned her life force to it, planting the tiny seed of hope that would one day blossom into the realm known as Haven.</p>
                <p>As the passage of time dilutes the ancient tongue, Edlothia soon became known as Eloviel.</p>
                <p>Though fate may be the last page, how you earned it will undoubtedly define who you are. Though the Gods know all the moves you will ever make, even so, you did make all the moves yourself. And you, adventurer, will fate be the end of your journey?</p>
              </div>
              <div className="silvenore section" id="silvenore"> 
                <h2> Silvenore </h2>
                <p> 
                Silvenore was once a great established city, now left shrouded in mystery and overgrowth. Although Namira is the most urban area of Haven due to its market districts, Silvenore is a thriving region where one can feel most connected to the Elder Oak. 
                
                Those who feel a drawing to her find themselves wandering parts of old Silvenore and its magnificent ruins, ancient scriptures now overtaken by nature. 
                
                The flora and outstretched greenlands echo nature's beauty and wave in woodland winds, holding aloft a bounty of green only warm eyes can ever see, and is a beauty of nature sweet enough to invite you in, and so belong.
                </p>
                <img src={silvenore} alt="Silvenore"></img>
                <figcaption> Art by: Marthe Jonkers </figcaption>
              </div>
              <div className="namira section" id="namira">
                <h2> Namira - Town and Market Districts </h2>
                <p> Namira, founded through Eloviel's graces by wishing to expand her roots into making a better realm for those who sought refuge. The old realm of Namira is lost to time and the old minds of its founders, all that is known about their past life was darkness and dreary days. Eloviel founded this world and saw its potential for a new beginning, knowing it even deserved much of it. Namira has then since thrived, thrusting forward and is now the center of the realm known as Haven . A commoners area of mostly well, every race. Orcs and Humans live in relative peace as do drow and elves, of course the more normal races over take the realm where as the more monster or rare races simply pass on by. Nonetheless they all share prosperity and relative kinship to one another. Bad blood exists of course but to a degree of only words and not actions. </p>
                <img src={namira} alt="namira"></img>
                <figcaption> Artist: unknown </figcaption>
              </div>
              <div className="solemn section" id="solemn">
                <h2> Solemn - Monuments of the Dwarves </h2>
                <p> Solemn is the Lakeside Mountain District whose history and traditions live on in their people, but whose secrets are buried deep within the mountain it was built upon, remaining heavily guarded by stern unmoving lips and treacherous pathways that will swallow up the unprepared. No one knows truly where the Mountain Dwarves of Solemn came from, only that a massive structure had wrapped itself around the land's elevated portion; it operates under a stratocratic government, with mandatory military service being among its most ancient traditions, shaping their dark disposition and neigh endless war against forces unseen by Haven. </p>
                <img src={solemn} alt="solemn"></img>
              </div>
              <div className="shambhala section" id="shambhala">
                <h2> Shambhala - Lost City of the Elves </h2>
                <p> Shambhala, the lost kingdom of the Elves. Named after its sovereign Xiān'bālā Zhèn. A once immortal city, vast in culture and tradition of the High Elves. Created though and from Arselu'Tel'Quess, which loosely translates to "Great Art of the People" otherwise known as High Elven Magic. Shambhala will only reveal itself to those it deems worthy of its splendor. Most will never see these lands in their lifetime, only a select few will ever witness its majesty. The Everheart calls to those who possess the inner potential, those who have faced the trials before them and have proven themselves masters of their own kind. </p>
                <img src={shambhala} alt="shambhala"></img>
              </div>
            </div>
              <p className="art-credit-lore"> Art by Hachimoon </p>
          </div>
    );
  }
  export default Lore;
  

