const { Router } = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const AsteroidsController = require('./controllers/AsteroidsController');
const ApodController = require('./controllers/ApodController');
const MarsPhotosController = require('./controllers/MarsPhotosController');

const routes = Router();

routes.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
        dateStart: Joi.string().required().min(10).max(10),
        dateEnd: Joi.string().required().min(10).max(10)
    }),
}), AsteroidsController.index);

routes.get('/detail/:id', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        id: Joi.number()
    }),
}), AsteroidsController.store);

routes.get('/apod', ApodController.index);

routes.post('/mars', MarsPhotosController.index);

module.exports = routes;
