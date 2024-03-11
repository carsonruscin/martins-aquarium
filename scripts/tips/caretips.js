import { getCareTips } from "../database.js";

export const careTipList = () => {
    // invoke the function that you imported from the database module
    const tips = getCareTips()

    // start building a string filled with HTML syntax
    let htmlString = `<section>`

    // create an HTML representation of care tips
    for (const tip of tips) {
        
        htmlString += `<h4>Martin's Aquarium Tips</h4>
        <div class="careTips__tankTip">${tip.tankTip}</div>
        <div class="careTips__waterTip">${tip.waterTip}</div>
        <div class="careTips__filterTip">${tip.filterTip}</div>`
    }
    htmlString += `</section>`
    
    return htmlString
}