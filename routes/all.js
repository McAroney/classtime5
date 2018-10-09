const authRoutes = require('./auth');
const viewRoutes = require('./views');


module.exports = (app) => {
    authRoutes(app);
    viewRoutes(app);
    
}
