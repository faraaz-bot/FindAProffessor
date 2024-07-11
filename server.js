const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/api/find_professors', (req, res) => {
    const keywords = req.body.keywords.toLowerCase().split(' ');

    fs.readFile(path.join(__dirname, 'data', 'professors.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data');
        }

        const professors = JSON.parse(data);
        const matchedProfessors = professors.filter(professor => {
            return keywords.some(keyword =>
                professor.research_areas.toLowerCase().includes(keyword)
            );
        });

        res.json(matchedProfessors.slice(0, 3));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
