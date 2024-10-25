const express = require('express');
const app = express();
const port = 4000;


//get method listening to url, localhost
//excute function when HTTP come in --> response
app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});


//excute function when HTTP come in
app.get('/whatever',(req,res)=>{
    res.send('What ever I want');

})


//error-handling to catch any server error
//500 for server
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something went wrong!');

})


//add second URL paramenter for surname
app.get('/hello/:name/:surname', (req, res) => {
    res.send(`Hello `+req.params.name+' '+req.params.surname);
});

//get api that return list of movie
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(200).json({myMoives:movies});
});

//serve the HTML file
const path = require('path');
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// middleware to serve all static files (CSS, JS, etc.) from a public directory
app.use(express.static('public'));

//server listen to HTTP request
//alway have to be bottom of the file
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});