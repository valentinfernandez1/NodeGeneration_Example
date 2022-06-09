const {BookInstance} = require('../Models');

const controller = {
  getAll:  async (req, res, next) => {
    let list_BookInstance = await BookInstance.find()
      .populate('book')
      .exec();
      res.json(list_BookInstance);
  },
  getOneById: async (req, res, next)=> {
    let obtainedBookInstance = await BookInstance.findById(req.params.id)
      .populate('book')
      .exec();
      res.json(obtainedBookInstance);
  },
  saveOne: async (req, res, next)=> {
    let {bookInstance} = req.body;
    let newBookInstance = await BookInstance.create(BookInstance);
    res.json(newBookInstance);
  },
  updateOneById: async (req, res, next)=> {
    let {bookInstance} = req.body;
    let result = await BookInstance.updateOne({_id: req.params.id}, BookInstance);
    res.json({result, BookInstance});
  },
  deleteOneById: async (req, res, next)=> {
    let result = await BookInstance.deleteOne({_id: req.params.id});
    res.json(result);
  }
}

module.exports = controller;