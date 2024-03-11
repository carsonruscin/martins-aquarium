import { getFish } from './database.js'
import { FishList } from './fish/fishlist.js'
import { careTipList } from './tips/caretips.js'
import { locationList } from './locations/locations.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const mainHTMLElement = document.querySelector("#FishContainer")
mainHTMLElement.innerHTML = FishList()

const tipsHTMLElement = document.querySelector("#CareTips")
tipsHTMLElement.innerHTML = careTipList()

const locationsHTMLElement = document.querySelector("#FishLocations")
locationsHTMLElement.innerHTML = locationList()
