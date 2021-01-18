const fishCollection = [
    {
        image: "./images/Jerry.jpg",
        name: "Name: Jerry",
        food: "Favorite Food: shrimp",
        species: "Species: Mickey Mouse Platy",
        location: "Home: Guatemala",
        length: 2
    },

    {
        image: "./images/Tom.jpeg",
        name: "Name: Tom",
        food: "Favorite Food: algae",
        species: "Species: Mekong Giant Catfish (Endangered)",
        location: "Home: China",
        length: 108
    },

    {
        image: "./images/Simba.jpeg",
        name: "Name: Simba",
        food: "Favorite Food: Smaller Fish",
        species: "Species: Lion Fish (Invasive)",
        location: "Home: Indo-Pacific Region",
        length: 18
    },

    {
        image: "./images/Tigger.JPG",
        name: "Name: Tigger",
        food: "Favorite Food: Smaller Fish",
        species: "Species: Goliath Tiger Fish",
        location: "Home: Congo River Basin",
        length: 60
    },

    {
        image: "./images/Eeyore.jpeg",
        name: "Name: Eeyore",
        food: "Favorite Food: Smaller Fish and Crustaceans",
        species: "Species: Donkey Fish",
        location: "Home: All Over",
        length: 30
    }
]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const holy of fishCollection) {
        if (holy.length % 3 === 0) {
            holyFish.push(holy)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const soldier of fishCollection) {
        if (soldier.length % 5 === 0) {
            soldiers.push(soldier)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const reg of fishCollection) {
        if (reg.length % 3 !== 0 && reg.length % 5 !== 0) {
            regularFish.push(reg)
        }
    }
    return regularFish
}