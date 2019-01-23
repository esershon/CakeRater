var Cakes = require('./models');

module.exports = {

    getAllCakes:(req, res)=>{
        Cakes.find({})
            .then(cakes=>res.json(cakes))
            .catch(err =>res.json(err))
    },

    getCake:(req,res)=>{
        Cakes.findById(req.params.id)
            .then(cake=>res.json(cake))
            .catch(err=>res.json(err))
    },

    createCake:(req, res)=>{
        Cakes.create(req.body)
            .then(cake=>res.json(cake))
            .catch(err=>res.json(err))
    },

    addRating:(req,res)=>{
        console.log("Calling the addRating function in the express controller", req.params.id, req.body)
        Cakes.findByIdAndUpdate(req.params.id, {$push:{ratings:req.body}})
            .then(cake=>res.json(cake))
            .catch(err=>res.json(err))
    },

    deleteCake:(req, res)=>{
        Cakes.findByIdAndDelete(req.params.id)
            .then(cake=>res.json(cake))
            .catch(err=>res.json(err))
    },
}