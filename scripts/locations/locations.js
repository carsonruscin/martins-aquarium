import { getLocations } from "../database.js";

export const locationList = () => {
    // invoke the function that you imported from the database
    const locations = getLocations()

    // start building an HTML string with HTML syntax
    let htmlString = `<section>`

    // create an HTML representation of the fish harvest locations
    for (const location of locations) {
        
        htmlstring += `<div>${location.harvestLocation}</div>`
    }

    htmlString += `</section>`

    return htmlString

}