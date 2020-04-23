require('dotenv').config();
const axios = require('axios');

const key = process.env.KEY;

module.exports = {
  async index(req, res) {
    const { sol } = req.body;
    let ArryMarsPhotos = [];

    const apiResponse = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${key}`
    );
    
    const { photos } = apiResponse.data

    photos.map(photo => {
      const {id, img_src, earth_date } = photo;
      const photoUtils = {
        id,
        nameCamera: photo.camera.name,
        img_src,
        earth_date
      };
      ArryMarsPhotos.push(photoUtils);
    });

    res.json(ArryMarsPhotos);
  }
}
