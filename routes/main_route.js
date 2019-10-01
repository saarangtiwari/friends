const userRoute = require('./user.route');

module.exports = app => {
    app.get('/', (req, res) => res.status(200).json({ message: 'Welcome to Friends Server' }));
    app.use('/api/user', userRoute);
    app.get('/*', (req, res) => {
        res.status(404).json('Resource Not Found !!!');
    });
}