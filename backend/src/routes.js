const { Router } = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const AsteroidsController = require('./controllers/AsteroidsController');

const routes = Router();

routes.post('/', celebrate({
    [Segments.BODY]: Joi.object().keys({
        dateStart: Joi.string().required().min(10).max(10),
        dateEnd: Joi.string().required().min(10).max(10)
    }),
}), AsteroidsController.index);

routes.post('/detail/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        dateStart: Joi.string().required().min(10).max(10),
        dateEnd: Joi.string().required().min(10).max(10)
    }),
}), AsteroidsController.store);

module.exports = routes;
