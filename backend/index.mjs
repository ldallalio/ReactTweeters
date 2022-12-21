import bodyparser from 'body-parser';
import express from 'express'
import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv'
dotenv.config()
const app = express();

const port = 5000;


// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// GET USER APPOINTMENTS
app.get('/api/tweets', (req, res) => {
    const client = new TwitterApi(process.env.TOKEN);
    async function getTweets() {
        const result = await client.v2.get('tweets/search/recent', { query: '#react #cloud', max_results: 20 });
        console.log(result.data)
        res.send(result.data)
    }

    getTweets()
});

app.listen(port, () => {
    console.log('Server Started at --> ' + `http://localhost:${port}`);
});
