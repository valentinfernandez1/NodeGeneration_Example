const {Genre} = require('../Models');

const controller = {
  getAll: async (req, res, next) => {
    let list_genre = await Genre.find({});
    res.json(list_genre);
  },
  getOneById: async (req, res, next) => {
    let obtainedGenre = await Genre.findById(req.params.id);
    res.json(obtainedGenre);
  },
  saveOne: async (req, res, next) => {
    let {genre} = req.body;
    let newGenre = await Genre.create(genre);
    res.json(newGenre);
  },
  updateOneById: async (req, res, next) => {
    let {genre} = req.body;
    let result = await Genre.updateOne({_id: req.params.id}, genre);
    res.json({result, genre});
  },
  deleteOneById: async (req, res, next) => {
    let result = await Genre.deleteOne({_id: req.params.id});
    res.json(result);
  }
}

module.exports = controller;