const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../helpers/index");

const contacts = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

contacts.post("save", handleMongooseError);

const Contact = model("contact", contacts);

module.exports = Contact;
