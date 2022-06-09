const {Book} = require('../Models');

const controller = {
  getAll:  async (req, res, next)=>{
    let list_Book = await Book.find()
    res.json(list_Book);
  },
  getOneById: async (req, res, next)=> {
    let obtainedBook = await Book.findById(req.params.id)
      .populate('author')
      .populate('genre')
      .exec();
      res.json(obtainedBook);
  },
  saveOne: async (req, res, next)=> {
    let {book} = req.body;
    let newBook = await Book.create(Book)
    res.json(newBook);
  },
  updateOneById: async (req, res, next)=> {
    let {book} = req.body;
    let result = await Book.updateOne({_id: req.params.id}, Book);
    res.json({result, Book});
  },
  deleteOneById: async (req, res, next)=> {
    let result = await Book.deleteOne({_id: req.params.id});
    res.json(result);
  }
}

module.exports = controller;