import { quoteCard } from "./Quote.js"
import { useQuotes } from "./QuoteDataProvider.js"

export const quoteList = () => {

    const contentElement = document.querySelector(".containerLeft__travelQuotes")
    const quotes = useQuotes()

    let quoteRep = ""
    for (const quote of quotes) {
        quoteRep += quoteCard(quote)
    }

    contentElement.innerHTML += `
        ${quoteRep}
    `
}