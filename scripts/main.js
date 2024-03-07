import { getFish } from './database.js'
import { FishList } from './fish/fishlist.js'
import { mostHolyFish } from './database.js'
import { soldierFish } from './database.js'
import { nonHolyFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const parentHTMLElement = document.querySelector("#FishContainer")

parentHTMLElement.innerHTML = FishList()
