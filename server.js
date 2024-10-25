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



//server listen to HTTP request
//alway have to be bottom of the file
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});