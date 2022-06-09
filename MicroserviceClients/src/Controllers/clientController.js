const axios = require('axios');
require('dotenv').config()

const {Client} = require('../Models');

/**
 * Los controladores generados corresponden a los necesarios para el
 * CRUD de las entidades modeladas. 
*/

const controller = {
  getAll: async(req, res, next) => {
    let list_client = await Client.find({});
    res.json(list_client);
  },
  //Ejemplo de llamada a otro microservicio
  getOneById: async (req, res, next) => {
    let obtainedClient = (await Client.findById(req.params.id)).toJSON();
    
    let newRentedBooks = await Promise.all(
      obtainedClient.rentedBooks.map((bookInstance) => {
        let rentedBooksEndpoint = process.env.MICROSERVICE_BOOKS_URL + "bookInstance/" + bookInstance
        const data =  axios.get(rentedBooksEndpoint)
          .then((response) => response.data)
        return data
      })
    )
    obtainedClient.rentedBooks = newRentedBooks
    console.log(obtainedClient)
    res.json(obtainedClient);
  },
  saveOne: async (req, res, next) => {
    let {client} = req.body;
    let newClient = await Client.create(client);
    res.json(newClient);
  },
  updateOneById: async(req, res, next) => {
    let {client} = req.body;
    let result = await Client.updateOne({_id: req.params.id}, client);
    res.json({result, client});
  },
  deleteOneById: async (req, res, next) => {
    let result = await Client.deleteOne({_id: req.params.id});
    res.json(result);
  }
}

module.exports = controller;