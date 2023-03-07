const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Please use a valid email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
/*
  currentAddress: String,
  destinationZip: String,
  movingDate: {
    //Date provided by user not from Date.now, method to get date from user input here, in server-side query, or in front-end?
    type: Date,
  },
*/
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lists",
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
