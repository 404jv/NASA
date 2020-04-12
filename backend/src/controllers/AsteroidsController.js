require('dotenv').config();
const axios = require('axios');

const key = process.env.KEY1;

module.exports = {
    async index(req, res) {

        const { dateStart, dateEnd } = req.body;

        const apiResponse = await axios.get(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateStart}&end_date=${dateEnd}&api_key=${key}`
        );

        const { near_earth_objects } = apiResponse.data;
        
        let NearEarthObjects = [];
        let NearEarthObjectsInfoUtils = [];

        Object.keys(near_earth_objects).forEach(itens =>
            NearEarthObjects.push(near_earth_objects[itens])
        );

        NearEarthObjects.map(itens =>
            Object.keys(itens).forEach(item => {
                const object = {
                    id:                                 itens[item].id,
                    name:                               itens[item].name,
                    nasa_jpl_url:                       itens[item].nasa_jpl_url,
                    absolute_magnitude_h:               itens[item].absolute_magnitude_h,
                    estimated_diameter_kilometers:      itens[item].estimated_diameter.kilometers,
                    estimated_diameter_meters:          itens[item].estimated_diameter.meters,
                    is_potentially_hazardous_asteroid:  itens[item].is_potentially_hazardous_asteroid,
                    close_approach_data_full:           itens[item].close_approach_data[0].close_approach_date_full,
                    kilometers_per_hour:                itens[item].close_approach_data[0].relative_velocity.kilometers_per_hour,
                    miss_distance_kilometers:           itens[item].close_approach_data[0].miss_distance.kilometers,
                }
                NearEarthObjectsInfoUtils.push(object);
            })
        );
        
        return res.json(NearEarthObjectsInfoUtils);
    },
}
