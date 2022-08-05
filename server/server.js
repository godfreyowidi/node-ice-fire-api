import fetch from 'node-fetch';
import express from 'express';
const app = express();

app.get('/api', async (req, res) => {
    const url_api = `https://anapioficeandfire.com/api/books`;

    try {
        const response = await fetch(url_api);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        const errorMessage = error.message;
        res.status(500).send(errorMessage);
    }
})


app.listen(5000, () => { console.log('Server started on port 5000') });