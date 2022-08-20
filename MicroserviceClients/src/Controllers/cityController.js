import City from "../Models/city.js";

export default {
  getAll: async (req, res, next) => {
    try {
      let city = await City.find();
      res.status(200).json(city);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  getOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let obtainedCity = await City.findById(_id).exec();
      res.status(200).json(obtainedCity);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  saveOne: async (req, res, next) => {
    let { name, code } = req.body;
    try {
      let newCity = await City.create({ name, code });
      res.json(newCity);
    } catch (error) {
      res.status(500).json(err);
    }
  },

  updateOneById: async (req, res, next) => {
    const _id = req.params.id;
    let { name, code } = req.body;

    try {
      let result = await City.updateOne({ _id }, { name, code });
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  deleteOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let result = await City.deleteOne({ _id });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
