import { useTips } from "./TipDataProvider.js"
import { tipUl } from "./Tip.js"

export const tipList = () => {
    const contentElement = document.querySelector(".containerRight")
    const tips = useTips()

    let tipHTML = ""
    for (const tip of tips) {
        tipHTML += tipUl(tip)
    }

    contentElement.innerHTML += `
    <div class="containerRight__content">
        <ul>
        ${tipHTML}        
        </ul>
    </div>
    `
}