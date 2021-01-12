const fishCollection = [
    {
        image: './images/Bart.jpg',
        name: "Bart",
        food: "crustaceans",
        species: "Amphiprioninae",
        location: "Great Barrier Reef, Australia",
        length: 2
    },

    {
        name: "Marlin",
        food: "crustaceans",
        species: "Angel Fish",
        location: "Atlantic Ocean",
        length: 5
    },

    {
        name: "Marlina",
        food: "crustaceans",
        species: "Lion Fish",
        location: "Pacifice Ocean",
        length: 3
    }
]

export const useFish = () => {
    return fishCollection.slice()
}