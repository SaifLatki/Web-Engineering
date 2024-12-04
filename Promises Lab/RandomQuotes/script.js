const button = document.getElementById('btn');
const text = document.getElementById('showQuotes');
let qt = document.getElementById('quote');
let at = document.getElementById('author');

function getQuote() {
    const url = 'https://quotes-api-self.vercel.app/quote';
    fetch(url )
    .then(response => {
        // console.log('Response:', response);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const { quote, author } = data;
        console.log(`Quote: ${quote}, Author: ${author} `);
        qt.innerHTML = quote ;
        at.innerHTML = author;
       
    })
    .catch(error => console.error(`Error fetching quote data: ${error.message}`));
}
button.addEventListener('click', getQuote);