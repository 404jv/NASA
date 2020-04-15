require('dotenv').config();
const axios = require('axios');

const key = process.env.KEY;
let NearEarthObjects = [];

module.exports = {
    async index(req, res) {

        NearEarthObjects = [];

        const { dateStart, dateEnd } = req.body;

        const apiResponse = await axios.get(
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateStart}&end_date=${dateEnd}&api_key=${key}`
        );
    
        const { near_earth_objects } = apiResponse.data;
        
        Object.keys(near_earth_objects).forEach(itens =>
            NearEarthObjects.push(near_earth_objects[itens])
        );
    
        let NearEarthObjectsInfoUtils = [];

        NearEarthObjects.map(itens =>
            Object.keys(itens).forEach(item => {
                const object = {
                    id:                                 itens[item].id,
                    name:                               itens[item].name,
                    absolute_magnitude_h:               itens[item].absolute_magnitude_h,
                    estimated_diameter_kilometers:      itens[item].estimated_diameter.kilometers,
                    estimated_diameter_meters:          itens[item].estimated_diameter.meters,
                    is_potentially_hazardous_asteroid:  itens[item].is_potentially_hazardous_asteroid,
                }
                NearEarthObjectsInfoUtils.push(object);
            })
        );
        
        return res.json(NearEarthObjectsInfoUtils);
    },

    async store(req, res) {

        const id = req.params.id;

        NearEarthObjects.map(itens => {
            Object.keys(itens).forEach(item => {
                if (itens[item].id === id) {
                    const object = {
                        id:                                 itens[item].id,
                        name:                               itens[item].name,
                        absolute_magnitude_h:               itens[item].absolute_magnitude_h,
                        estimated_diameter_kilometers:      itens[item].estimated_diameter.kilometers,
                        estimated_diameter_meters:          itens[item].estimated_diameter.meters,
                        is_potentially_hazardous_asteroid:  itens[item].is_potentially_hazardous_asteroid,
                        nasa_jpl_url:                       itens[item].nasa_jpl_url,
                        close_approach_data_full:           itens[item].close_approach_data[0].close_approach_date_full,
                        kilometers_per_hour:                itens[item].close_approach_data[0].relative_velocity.kilometers_per_hour,
                        miss_distance_kilometers:           itens[item].close_approach_data[0].miss_distance.kilometers
                    }
                    return res.json(object);
                }
            })
        });
        return res.status(404).json();
    },
}
