export const quoteCard = (quote) => {
    return `
    <div class="quoteCard">
        <p class="quoteCard__text">${quote.quote}</p>
        <p class=quoteCard__author>${quote.source}</p>
        <p class=quoteCard__location>${quote.location}</p>
        <p class=quoteCard__date>${quote.date}</p>
    </div>
    `
}