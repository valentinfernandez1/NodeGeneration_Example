const {City} = require('../Models');

const controller = {
  getAll:  async (req, res, next)=>{
    let City = await City.find()
    res.json(City);
  },
  getOneById: async (req, res, next)=> {
    let obtainedCity = await City.findById(req.params.id)
      .exec();
      res.json(obtainedCity);
  },
  saveOne: async (req, res, next)=> {
    let {city} = req.body;
    let newCity = await City.create(City)
    res.json(newCity);
  },
  updateOneById: async (req, res, next)=> {
    let {city} = req.body;
    let result = await City.updateOne({_id: req.params.id}, City);
    res.json({result, City});
  },
  deleteOneById: async (req, res, next)=> {
    let result = await City.deleteOne({_id: req.params.id});
    res.json(result);
  }
}

module.exports = controller;