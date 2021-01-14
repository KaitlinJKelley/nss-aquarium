import { useLocations } from "./LocationDataProvider.js"
import { locationCard } from "./Location.js"

export const locationList = () => {
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locations = useLocations()

    let locationRep = ""
    for (const location of locations) {
        locationRep += locationCard(location)
    }

    contentElement.innerHTML += `
        ${locationRep}
    `
}

