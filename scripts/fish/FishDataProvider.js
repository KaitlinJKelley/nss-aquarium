const fishCollection = [
    {
        image: "./images/Jerry.jpg",
        name: "Name: Jerry",
        food: "Favorite Food: shrimp",
        species: "Species: Mickey Mouse Platy",
        location: "Home: Guatemala",
        length: "Length: 2 inches"
    },

    {
        image: "./images/Tom.jpeg",
        name: "Name: Tom",
        food: "Favorite Food: algae",
        species: "Species: Mekong Giant Catfish (Endangered)",
        location: "Home: China",
        length: "Length: 9 feet"
    },

    {
        image: "./images/Simba.jpeg",
        name: "Name: Simba",
        food: "Favorite Food: Smaller Fish",
        species: "Species: Lion Fish (Invasive)",
        location: "Home: Indo-Pacific Region",
        length: "Length: 18 inches"
    },

    {
        image: "./images/Tigger.JPG",
        name: "Name: Tigger",
        food: "Favorite Food: Smaller Fish",
        species: "Species: Goliath Tiger Fish",
        location: "Home: Congo River Basin",
        length: "Length: 5 feet"
    },

    {
        image: "./images/Eeyore.jpeg",
        name: "Name: Eeyore",
        food: "Favorite Food: Smaller Fish and Crustaceans",
        species: "Species: Donkey Fish",
        location: "Home: All Over",
        length: "Length: 30 inches"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}