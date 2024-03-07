// Import the function that returns a copy of the fish array
import { getFish, mostHolyFish, nonHolyFish, soldierFish } from '../database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishCard">
            <div><img  class="fishCard__img" src="${fish.image}" /></div>
            <div class="fishCard__name">${fish.name}</div>
            <div class="fishCard__species">${fish.species}</div>
            <div class="fishCard__length">${fish.length}</div>
            <div class="fishCard__location">${fish.harvestLocation}</div>
            <div class="fishCard__diet">${fish.diet}</div>
        </section>
        `
    }
    htmlString += `</article>`

    return htmlString
}