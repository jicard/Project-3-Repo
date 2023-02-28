const { Schema, model } = require("mongoose");

const listsSchema = new Schema({
  //for each list--completed boolean--include in schema or simply make state variable in React?
  packingList: [
    {
      packItemName: {
        type: String,
        required: true,
        trim: true,
      },
      //e.g. living room, kitchen etc.
      room: {
        type: String,
        trim: true,
      },
    },
  ],
  addressChanges: [
    {
      //eg Post office, bank etc.
      organization: {
        type: String,
        trim: true,
        required: true,
      },
      orgWebsite: {
        type: String,
        trim: true,
      },
      notes: {
        type: String,
        trim: true,
      },
    },
  ],
  shoppingList: [
    {
      purchaseItemName: {
        type: String,
        trim: true,
        required: true,
      },
      store: {
        type: String,
        trim: true,
      },
    },
  ],
  movers: [
    {
      moverName: {
        type: String,
        trim: true,
        required: true,
      },
      moverWebsite: {
        type: String,
        trim: true,
      },
      moverPhone: {
        type: String,
        trim: true,
        match: [
          /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
          "Please US phone number with area code",
        ],
      },
      quote: Number,
      willLoad: Boolean,
      willUnload: Boolean,
      willDrive: Boolean,
    },
  ],
});

const Lists = model("Lists", listsSchema);

module.exports = Lists;
