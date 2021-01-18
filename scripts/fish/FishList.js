import { useFish, mostHolyFish, nonHolyFish, soldierFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

const fishFilter = (filterFunction) => {
    const fishes = filterFunction()

    let fishHtmlRepresentation = ""
    for (const fish of fishes) {
        
        fishHtmlRepresentation += Fish(fish)

    }
    return fishHtmlRepresentation
}


export const FishList = () => {

    const contentElement = document.querySelector(".content")
    
    const holyFishList = fishFilter(mostHolyFish)
    const soldierFishList = fishFilter(soldierFish)
    const regularFishList = fishFilter(nonHolyFish)


    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += `
        <h3>Holy Fish</h3>
        <article class="fishList">
            
            ${holyFishList}
        </article>

        <h3>Soldier Fish</h3>
        <article class="fishList">
            ${soldierFishList}
        </article>

        <h3>Regular Fish</h3>
        <article class="fishList">
            ${regularFishList}
        </article>
    `
}