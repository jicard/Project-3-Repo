const { AuthenticationError } = require("apollo-server-express");
const { User, List } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("list");
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    allLists: async (parent, args, context) => {
      return List.find();
    }
  },


  Mutation: {
    //takes username, email, and password hash to create new user
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    //takes user email and password, logs user in
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    setUserInfo: async (
      parent,
      {
        username,
        email,
        password,
        currentAddress,
        destinationAddress,
        movingDate,
      },
      context
    ) => {
      if (context.user) {
        const userInfo = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            username,
            email,
            password,
            currentAddress,
            destinationAddress,
            movingDate,
          }
        );

        return userInfo;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //addList--takes listName, creates list and pushes to current User's array of lists
    addList: async (parent, { listTitle, listContent }, context) => {
      console.log(context);
      if (context.user) {
        const list = await List.create({
          listTitle,
          listUser: context.user.username,
          listContent
        });
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: {list: [list]}
          }
          );
      } 
      else {
      throw new AuthenticationError("You need to be logged in!");
      }
    },

    //addListItem--takes listName, itemName and itemNotes, creates list item and pushes to list
    addListItem: async (parent, { input }, context) => {
      if (context.user) {
        return Lists.findOneAndUpdate(
          { _id: listId },
          {
            $addToSet: {
              listItems: { itemName, itemNotes },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //update listItem-takes listItem id and list item input to update
    updateListItem: async (parent, { id, input }, context) => {
      if (context.user) {
        return Lists.findOneAndUpdate(
          { _id: listId, "listItems._id": id },
          {
            $set: {
              listItems: { itemName, itemNotes },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    //removeList--takes listId, deletes designated list and pulls from user's list array
    removeList: async (parent, { listId }, context) => {
      if (context.user) {
        const list = await Lists.findOneAndDelete({
          _id: listId,
          listUser: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { lists: list._id } }
        );
        return list;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeListItem: async (parent, { listId, listItemId }, context) => {
      if (context.user) {
        return Lists.findOneAndUpdate(
          { _id: listId },
          {
            $pull: {
              listItems: {
                _id: listItemId,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
