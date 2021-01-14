

export const locationCard = (location) => {
    return `
    <div class="locationCard">
        <img class="locationCard__landmark" src=${location.image} alt="photo of landmark">
        <p class="locationCard__waterBody">${location.bodyOfWater}</p>
        <p class="locationCard__city">${location.city}</p>
        <p class="locationCard__country">${location.country}</p>
    </div>
    `
}