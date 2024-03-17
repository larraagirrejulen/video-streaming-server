
const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Streaming server is working!')
})

// Handling internal server errors
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal server error ... Something broke!');
});

// Handling unsuported URL requests
app.use(function(req, res, next) {
    res.status(404).send('Provided URL does not exist!');
})

app.listen(port, () => {
    console.log(`Streaming server listening on port ${port}`)
})

