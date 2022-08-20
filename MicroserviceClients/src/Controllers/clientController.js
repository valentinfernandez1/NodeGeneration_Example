import axios from "axios";
import dotenv from "dotenv";
import Client from "../Models/client.js";

dotenv.config();

/**
 * Los controladores generados corresponden a los necesarios para el
 * CRUD de las entidades modeladas.
 */

export default {
  getAll: async (req, res, next) => {
    try {
      let list_client = await Client.find({});
      res.json(list_client);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Ejemplo de llamada a otro microservicio
  getOneById: async (req, res, next) => {
    try {
      let obtainedClient = (await Client.findById(req.params.id)).toJSON();

      //REVISAR
      let newRentedBooks = await Promise.all(
        obtainedClient.rentedBooks.map((bookInstance) => {
          let rentedBooksEndpoint =
            process.env.MICROSERVICE_BOOKS_URL +
            "/api/entity/bookInstance/" +
            bookInstance;

          const data = axios
            .get(rentedBooksEndpoint)
            .then((response) => response.data)
            .catch((e) => res.send(e));

          return data;
        })
      );
      obtainedClient.rentedBooks = newRentedBooks;
      console.log(obtainedClient);
      res.json(obtainedClient);
    } catch (error) {
      res.status(500).json(err);
    }
  },
  saveOne: async (req, res, next) => {
    let { client } = req.body;
    try {
      let newClient = await Client.create(client);
      res.json(newClient);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateOneById: async (req, res, next) => {
    let { client } = req.body;
    try {
      let result = await Client.updateOne({ _id: req.params.id }, client);
      res.json({ result, client });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteOneById: async (req, res, next) => {
    try {
      let result = await Client.deleteOne({ _id: req.params.id });
      res.json(result);
    } catch (error) {
      res.status(500).json(err);
    }
  },
};
