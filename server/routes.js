const controller = require('./controller')

module.exports = function(app){
    app.get('/api/cakes', controller.getAllCakes);
    app.get('/api/cakes/:id', controller.getCake);
    app.post('/api/cakes', controller.createCake);
    app.patch('/api/cakes/:id', controller.addRating);
    // app.put('/api/cakes/:id', controller.updateCake);
    //put is for editing the mail model?
    //patch is for editing the document??
    app.delete('/api/cakes/:id', controller.deleteCake);
}