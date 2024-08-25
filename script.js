document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    const fetchJokeButton = document.getElementById('fetch-joke');
    const reactionDisplay = document.getElementById('reaction-display');

    async function fetchJoke() {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            jokeElement.textContent = `${data.setup} - ${data.punchline}`;
        } catch (error) {
            jokeElement.textContent = 'Failed to fetch a joke.';
        }
    }

    fetchJokeButton.addEventListener('click', fetchJoke);

    document.querySelectorAll('.emoji').forEach(emoji => {
        emoji.addEventListener('click', () => {
            reactionDisplay.textContent = `You reacted with ${emoji.textContent}!`;
        });
    });

    fetchJoke();
});
