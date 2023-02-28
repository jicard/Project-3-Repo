require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./config/connection");
// const { ApolloServer } = require("apollo-server-express");
// const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const User = require("./models/User");
const app = express();
const PORT = process.env.PORT || 3001;
/*
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1><br><input id="username" value="username"><br><input id="password" value="password"><br><button type="submit" href="/login">Login</button><br><button type="submit" href="/register">Register</button>');
})
app.post("/register", async (req, res) => {
  try {
    // Get user input
    const { username, password } = req.body;

    // Validate user input
    if (!(username && password)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ username });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      username,
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, username },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});
app.post("/login", async (req, res) => {
    try {
      // Get user input
      const { username, password } = req.body;
  
      // Validate user input
      if (!(username && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ username });
  
      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { user_id: user._id, username },
          process.env.JWT_SECRET,
          {
            expiresIn: "2h",
          }
        );
  
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
});
app.post("/welcome", authMiddleware, (req, res) => {
    res.status(200).send("welcome");
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    //console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });

/*
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

startApolloServer(typeDefs, resolvers);
*/

/*
"start": "node server/server.js",
    "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
    "install": "cd server && npm i && cd ../client && npm i",
    "build": "node server/server.js"
*/