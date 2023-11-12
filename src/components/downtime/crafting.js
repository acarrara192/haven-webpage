import React from "react";

function Crafting() {
    return(
    <div className="crafting" id="crafting">
        <div className="background-image crafting" ></div>
        <div className="page">
            <h2> Downtime Activity: Crafting Non-Magical Items </h2>
    
            <p>Crafting non-magical items requires the appropriate tool proficiency (detailed in ⁠server-mechanics), an amount of weeks to craft equal to its gold piece cost divided by 50, and an amount of materials worth half the items value. 

                You may complete multiple items in a week if the items’ combined cost is 50 gp or lower. Items that cost more than 50 gp can be completed over longer periods of time, as long as the work in progress is stored in a safe location.

                Multiple characters can combine their efforts. Multiple characters may spend their downtime on the same item to complete its faster, however this does not reduce the total amount of time spent required. 
            </p>

            <h2> Downtime Activity: Crafting Magic Items </h2>

            <p>Creating a magic item requires more than just time, effort, and materials. It is a long-term process that requires the following:</p>
            <ul>
                <li>Arcana proficiency</li>
                <li>The appropriate Rank</li>
                <li>A non-magical item base (Ex: Leather armor, or a Shortsword)</li>
                <li>A Magic Item Ingredient (detailed in ⁠server-mechanics)</li>
                <li>Either the appropriate Tool Proficiency, or the appropriate Tool Workstation granted from a guild.</li>
            </ul>
            <h3>Magic Item Crafting</h3>
            <table>
            <thead>
                <tr>
                    <th>Rarity</th>
                    <th>Time</th>
                    <th>Cost (in gp)</th>
                    <th>CR Range of Ingredient</th>
                    <th>Ingredient Material</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Common</td>
                    <td>1 week</td>
                    <td>100</td>
                    <td>1-5</td>
                    <td>Bronze</td>
                </tr>
                <tr>
                    <td>Uncommon</td>
                    <td>2 weeks</td>
                    <td>500</td>
                    <td>6-11</td>
                    <td>Silver</td>
                </tr>
                <tr>
                    <td>Rare</td>
                    <td>10 weeks</td>
                    <td>5000</td>
                    <td>12-18</td>
                    <td>Electrum</td>
                </tr>
                <tr>
                    <td>Very Rare</td>
                    <td>25 weeks</td>
                    <td>50000</td>
                    <td>19+</td>
                    <td>Gold</td>
                </tr>
            </tbody>
            </table>

            <p>The CR of an Ingredient will be told to you when you receive the part.</p>
            <p>Characters may only craft magic items of their relevant rank or lower. Multiple characters can contribute time to crafting a magic item if they meet the same requirements.</p>
            <p>Consumable magic items will take half as long to craft, cost half as much gold, however, will still require the pertinent rank, monster part, and Tool Workstation/Proficiency.</p>

            <h2>Downtime Activity: Crafting Healing Potions Revised</h2>
            <p>Crafting Healing potions is an exception to the Magic Item Crafting rules. Crafting healing potions requires a Herbalism Kit, Herbalism Kit Proficiency.</p>
            <table>
            <thead>
                <tr>
                    <th>Potion Type</th>
                    <th>Cost</th>
                    <th>Rank</th>
                    <th>Production Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Regular Healing</td>
                    <td>150gp total</td>
                    <td>Bronze</td>
                    <td>7 Per Week</td>
                </tr>
                <tr>
                    <td>Greater Healing</td>
                    <td>400gp total</td>
                    <td>Silver</td>
                    <td>4 Per Week</td>
                </tr>
                <tr>
                    <td>Superior Healing</td>
                    <td>1,000gp total</td>
                    <td>Electrum</td>
                    <td>1 Per Week</td>
                </tr>
                <tr>
                    <td>Supreme Healing</td>
                    <td>10,000gp total</td>
                    <td>Gold</td>
                    <td>2 Weeks for 1</td>
                </tr>
            </tbody>
            </table>
            <p>You must use the full weeks of downtime to gain any items.</p>
            <h2> Downtime Activity: Crafting Enchanted Items (+X Items)</h2>
            <p>Crafting enchanted items is slightly easier than other magic items. The relevant tool proficiency and Arcana proficiency are required; stronger level enchantment requires monster parts. In addition to these requirements, you need the base item.</p>

            <table>
            <thead>
                <tr>
                    <th>Rarity</th>
                    <th>Enchantment</th>
                    <th>Time</th>
                    <th>Cost (in gp)</th>
                    <th>Material</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Uncommon</td>
                    <td>+1 ammunition</td>
                    <td>1 week</td>
                    <td>250</td>
                    <td>Silver</td>
                </tr>
                <tr>
                    <td>Uncommon</td>
                    <td>+1 weapons/+1 shields</td>
                    <td>2 weeks</td>
                    <td>500</td>
                    <td>Silver</td>
                </tr>
                <tr>
                    <td>Rare</td>
                    <td>+2 Ammunition</td>
                    <td>5 weeks</td>
                    <td>1000</td>
                    <td>Electrum</td>
                </tr>
                <tr>
                    <td>Rare</td>
                    <td>+2 weapons/+2 shields/+1 armor</td>
                    <td>10 weeks</td>
                    <td>5000</td>
                    <td>Electrum</td>
                </tr>
                <tr>
                    <td>Very Rare</td>
                    <td>+3 Ammunition</td>
                    <td>25 weeks</td>
                    <td>5000</td>
                    <td>Gold</td>
                </tr>
                <tr>
                    <td>Very Rare</td>
                    <td>+3 weapons/+3 shields/+2 armor</td>
                    <td>25 weeks</td>
                    <td>25000</td>
                    <td>Gold</td>
                </tr>
                <tr>
                    <td>Legendary</td>
                    <td>+3 Armor</td>
                    <td>50 weeks</td>
                    <td>50000</td>
                    <td>Platinum</td>
                </tr>
            </tbody>
            </table>

            <p>When crafting +X ammo, you receive 10 pieces of ammunition.</p>

            <h2> Downtime Activity: Crafting Guns</h2>
            <p>Crafting guns requires Firearm proficiency and proficiency in Tinkers Tools.</p>

            <table>
            <thead>
                <tr>
                    <th>Firearm Type</th>
                    <th>Materials Cost (in gp)</th>
                    <th>Time</th>
                    <th>Material</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Palm Pistol</td>
                    <td>100</td>
                    <td>1 week</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Pistol</td>
                    <td>250</td>
                    <td>1 week</td>
                    <td>Silver</td>
                </tr>
                <tr>
                    <td>Musket</td>
                    <td>500</td>
                    <td>2 weeks</td>
                    <td>Silver</td>
                </tr>
                <tr>
                    <td>Blunderbuss</td>
                    <td>1000</td>
                    <td>2 weeks</td>
                    <td>Electrum</td>
                </tr>
                <tr>
                    <td>Pepperbox</td>
                    <td>1000</td>
                    <td>2 weeks</td>
                    <td>Electrum</td>
                </tr>
                <tr>
                    <td>Bad News</td>
                    <td>2500</td>
                    <td>5 weeks</td>
                    <td>Electrum</td>
                </tr>
            </tbody>
            </table>
            <h3>Ammunition Cost and Crafting Rate</h3>
            <p>Firearm ammunition is crafted much more carefully and costs slightly more.</p>

            <table>
            <thead>
                <tr>
                    <th>Firearm Type</th>
                    <th>Materials Cost (in gp)</th>
                    <th>Amount Crafted</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Palm Pistol</td>
                    <td>2</td>
                    <td>20 Pieces</td>
                </tr>
                <tr>
                    <td>Pistol</td>
                    <td>4</td>
                    <td>20 Pieces</td>
                </tr>
                <tr>
                    <td>Musket</td>
                    <td>5</td>
                    <td>20 Pieces</td>
                </tr>
                <tr>
                    <td>Blunderbuss</td>
                    <td>5</td>
                    <td>20 Pieces</td>
                </tr>
                <tr>
                    <td>Pepperbox</td>
                    <td>5</td>
                    <td>5 Pieces</td>
                </tr>
                <tr>
                    <td>Bad News</td>
                    <td>10</td>
                    <td>5 Pieces</td>
                </tr>
            </tbody>
            </table>

            <h2> Downtime Activity: Assisting in Crafting</h2>
            <p>If multiple characters wish to contribute time to crafting an item (magical or otherwise) or completing an activity, they may put downtime towards that activity ONLY if they meet the same requirements.</p>
            <h2> Downtime Activity: Poison Crafting</h2>
            <p>Crafting poisons requires Poisoner's Tool proficiency, a set of Poisoner's Tools, ingredients to craft the poison, and Downtime based upon the poison. Upon completion of a poison crafting, you will receive 1 dose unless otherwise stated (Such as if it says 2 per week you will receive 2).</p>

            <h3>Poison Options</h3>
            <table>
            <thead>
                <tr>
                    <th>Poison (Type)</th>
                    <th>Materials Per Dose</th>
                    <th>DT Required</th>
                    <th>Rank Required</th>
                    <th>Additional Requirements (If existing)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Assassin's Blood (Ingested)</td>
                    <td>75 gp Worth</td>
                    <td>2 Per Week</td>
                    <td>Bronze</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Truth Serum (Ingested)</td>
                    <td>75 gp Worth</td>
                    <td>2 Per Week</td>
                    <td>Bronze</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Crawler Mucus (Contact)</td>
                    <td>100 gp Worth</td>
                    <td>2 Per Week</td>
                    <td>Bronze</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Drow Poison (Injury)</td>
                    <td>100 gp Worth</td>
                    <td>2 Per Week</td>
                    <td>Bronze</td>
                    <td>Drow Race Only</td>
                </tr>
                <tr>
                    <td>Serpent Venom (Injury)</td>
                    <td>100 gp Worth</td>
                    <td>2 Per Week</td>
                    <td>Bronze</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Pale Tincture (Ingested)</td>
                    <td>125 gp Worth</td>
                    <td>2 Per Week</td>
                    <td>Silver</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Burnt othur fumes (Inhaled)</td>
                    <td>250 gp Worth</td>
                    <td>1 Week</td>
                    <td>Silver</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Malice (Inhaled)</td>
                    <td>150 gp Worth</td>
                    <td>1 Week</td>
                    <td>Silver</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Oil of Taggit (Contact)</td>
                    <td>200 gp Worth</td>
                    <td>1 Week</td>
                    <td>Silver</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Wyvern Poison (Injury)</td>
                    <td>600 gp Worth</td>
                    <td>3 Weeks</td>
                    <td>Silver</td>
                    <td>Find a Wyvern Part (CR 5+), cannot be purchased.</td>
                </tr>
                <tr>
                    <td>Essence of ether (Inhaled)</td>
                    <td>150 gp Worth</td>
                    <td>1 Week</td>
                    <td>Electrum</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Torpor (Ingested)</td>
                    <td>300 gp Worth</td>
                    <td>1 Week</td>
                    <td>Electrum</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Midnight Tears (Ingested)</td>
                    <td>750 gp Worth</td>
                    <td>4 Weeks</td>
                    <td>Electrum</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Purple Worm Poison (Injury)</td>
                    <td>1000 gp Worth</td>
                    <td>5 Weeks</td>
                    <td>Electrum</td>
                    <td>Find a Purple Worm Part (CR 15+), cannot be purchased.</td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
    )

}

export default Crafting;