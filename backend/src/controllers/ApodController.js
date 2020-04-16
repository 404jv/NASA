require('dotenv').config();
const axios = require('axios');

const key = process.env.KEY;

module.exports = {
    async index(req, res) {

        apiResponse = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=${key}`
        );
        
        const {copyright, date, explanation, hdurl, title} = apiResponse.data;
        
        const apod = {
            copyright,
            date,
            explanation,
            hdurl,
            title
        }
        
        return res.json(apod);
    }
}
