
        const url = 'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ecc7858407msh3f75cc491522625p14d68fjsneed142438221',
		'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
    
}

