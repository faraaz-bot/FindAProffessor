async function findProfessors() {
    const keywords = document.getElementById('keywords').value;
    const response = await fetch('/api/find_professors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ keywords })
    });
    const data = await response.json();
    localStorage.setItem('professorResults', JSON.stringify(data));
    window.location.href = 'results.html';
}
