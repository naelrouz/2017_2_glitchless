const Router = require('./Router.js');
const ServiceLocator = require('./ServiceLocator.js');
const initViews = require('./views/index.js');

window.onload = () => {
    const serviceLocator = new ServiceLocator();

    initViews(serviceLocator);

    const router = new Router();
    router.init();
};