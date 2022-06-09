const {Author} = require('../Models');

/**
 * Los controladores generados corresponden a los necesarios para el
 * CRUD de las entidades modeladas. 
*/

const controller = {
  getAll: async(req, res, next) => {
    let list_author = await Author.find({});
    res.json(list_author);
  },
  getOneById: async (req, res, next) => {
    let obtainedAuthor = await Author.findById(req.params.id);
    res.json(obtainedAuthor);
  },
  saveOne: async (req, res, next) => {
    let {author} = req.body;
    let newAuthor = await Author.create(author);
    res.json(newAuthor);
  },
  updateOneById: async(req, res, next) => {
    let {author} = req.body;
    let result = await Author.updateOne({_id: req.params.id}, author);
    res.json({result, author});
  },
  deleteOneById: async (req, res, next) => {
    let result = await Author.deleteOne({_id: req.params.id});
    res.json(result);
  }
}

module.exports = controller;