import React from "react";

function SellingMagicItems(){
    return(
        <div className="selling-magic-items" id="selling-magic-items">
        <div className="background-image selling-magic-items"></div>
        <div className="page">
            <h2>Downtime Activity: Selling Magic Items (XGE P.134)</h2>
            <p>In the event that a player wants to sell magic items she creates, finding a buyer may be difficult.</p>

            <p>A character can find a buyer for a single magic item by spreading the word and paying 25 gp for 1 workweek. Only one item at a time can be sold.</p>

            <p>After finding a buyer, the character must make a Charisma (Persuasion) check to determine what kind of an offer they receive. A character can decide to not sell the item after receiving an offer, but another workweek and 25 gp must be expended to find another.</p>

            <p>The price of selling consumables is HALF.</p>

            <table>
                <thead>
                    <tr>
                        <td>Charisma Check Result</td>
                        <td>Effect on Base Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1-10</td>
                        <td>Base price decreases by 50%</td>
                    </tr>
                    <tr>
                        <td>11-15</td>
                        <td>Base price decreases by 25%</td>
                    </tr>
                    <tr>
                        <td>16-20</td>
                        <td>No Change</td>
                    </tr>
                    <tr>
                        <td>21-25</td>
                        <td>Base price increases by 5%</td>
                    </tr>
                    <tr>
                        <td>26+</td>
                        <td>Base price increases by 10%</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Sell value by rarity:</strong></p>
            <ul>
                <li><strong>Common</strong> - 100 GP</li>
                <li><strong>Uncommon</strong> - 400 GP</li>
                <li><strong>Rare</strong> - 4,000 GP</li>
                <li><strong>Very Rare</strong> - 40,000 GP</li>
                <li><strong>Legendary</strong> - Not Sellable</li>
            </ul>
        </div>
    </div>
    )
}

export default SellingMagicItems;