import mongoose from "mongoose";

//Extends from Person, since person is abstract
//it only implements the child (Client).
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 100,
  },
  birthDay: {
    type: Date,
    required: true,
  },

  //Relation with hasRoutes: False
  personAddress: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    //Relation to attribute with hasRoutes: true
    addressCity: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
    },
  },

  //Relation to class outside of microservice
  rentedBooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

export default mongoose.model("Client", ClientSchema);
