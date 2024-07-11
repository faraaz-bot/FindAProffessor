document.addEventListener('DOMContentLoaded', () => {
    const resultsDiv = document.getElementById('results');
    const data = JSON.parse(localStorage.getItem('professorResults'));
    resultsDiv.innerHTML = '';
    data.forEach(professor => {
        const profDiv = document.createElement('div');
        profDiv.className = 'professor';
        profDiv.innerHTML = `<h2>${professor.name}</h2><p>${professor.research_areas}</p>`;
        resultsDiv.appendChild(profDiv);
    });
});

function retrySearch() {
    window.location.href = 'index.html';
}
