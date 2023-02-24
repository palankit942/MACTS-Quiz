import { v4 as uuid } from 'uuid';

export const categoryData = [
    {
        id: uuid(),
        categoryName: "Harry Potter",
        categoryDescription: "A Quiz that test your knowledge about the wizarding world of Harry Potter.",
        categoryImage: require("../assets/harrypotter.jpg"),
        categoryValue: "harry-potter"
    },
    {
        id: uuid(),
        categoryName: "Attack On Titan",
        categoryDescription: "A Quiz that test your knowledge about the Attack On Titan world of Titans.",
        categoryImage: require("../assets/aot.jpg"),
        categoryValue: "aot"
    },
    {
        id: uuid(),
        categoryName: "Marvel Cinematic Universe",
        categoryDescription: "A Quiz that test your knowledge about the MCU. Who is your Favourite Avenger ?",
        categoryImage: require("../assets/avengers.jpg"),
        categoryValue: "mcu"
    },
    {
        id: uuid(),
        categoryName: "Naruto",
        categoryDescription: "A Quiz that test your knowledge about the Naruto and it's five nations & Kages.",
        categoryImage: require("../assets/naruto.jpg"),
        categoryValue: "naruto"
    },
    {
        id: uuid(),
        categoryName: "Twilight",
        categoryDescription: "A Quiz that test your knowledge about the Twilight world of Werewolf and Vampires.",
        categoryImage: require("../assets/twilight.jpg"),
        categoryValue: "twilight"
    },
];
