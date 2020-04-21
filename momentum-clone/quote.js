$(function () {
const quotesApi = "https://quotes.rest/qod?language=en"

fetch(quotesApi)
  .then(response => {
    return response.json();
  })
  .then(data => {
    const quoteText = data.contents.quotes[0].quote
    $("#quote").text(quoteText)
  })

})