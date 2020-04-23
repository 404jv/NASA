require('dotenv').config();
const axios = require('axios');

const key = process.env.KEY;

module.exports = {
  async index(req, res) {

    apiResponse = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${key}`
    );
    
    const { media_type } = apiResponse.data;
    
    if (media_type === 'image') {
      const { copyright, date, explanation, hdurl, title } = apiResponse.data;

      const apod = {
        media_type,
        copyright,
        date,
        explanation,
        hdurl,
        title
      }
      return res.json(apod);
    }

    if (media_type === 'video') {
      const { copyright, date, explanation, url, title } = apiResponse.data;

      const apod = {
        media_type,
        copyright,
        date,
        explanation,
        url,
        title
      }
      return res.json(apod);
    }
      
    res.status(404).json();
  }
}
