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
    res.send('<h1>Hello world</h1><br><input id="username" value="username"><br><input id="password" value="password"><button type="submit" href="/login">Login</button><br><button type="submit" href="/register">Register</button>');
})
app.post("/register", (req, res) => {

});
app.post("/login", (req, res) => {

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