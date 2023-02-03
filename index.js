const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = 'LXfW6+p+KvLNuxPSkqHT6g==AkCn7LOYx6sseUy1';

const options = {
    method: 'GET',
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {

    try {
        jokeEl.innerText = 'updating...';
        btnEl.disabled = true;
        btnEl.innerText = 'tulia...';
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = 'Nipee Ingine Mzee!';

        jokeEl.innerText = data[0].joke;

    } catch (error) {
        jokeEl.innerText = 'check your internet connection and try again later';
        btnEl.disabled = false;
        btnEl.innerText = 'Nipee Ingine Mzee!';
        console.log(error);

    }

}


btnEl.addEventListener('click', getJoke);