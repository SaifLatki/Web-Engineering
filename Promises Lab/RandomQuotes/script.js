const button = document.getElementById('btn');
        const text = document.getElementById('showQuotes');

        function getQuote() {
            const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
            fetch(url, {
                method: 'GET',
                headers: { 'X-Api-Key': 'YOUR_API_KEY' }
            })
            .then(response => {
                console.log('Response:', response);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const [quoteData] = data;
                const { quote, author } = quoteData;
                console.log(`Quote: ${quote}, Author: ${author}`);
            })
            .catch(error => console.error(`Error fetching quote data: ${error.message}`));
        }
        

        button.addEventListener('click', getQuote);