const { AuthenticationError } = require("apollo-server-express");
const { User, Lists } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("lists");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("lists");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
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
    //addList--user selects type of list from dropdown menu which becomes key in list object
    addList: async (parent, { listName }, context) => {
      if (context.user) {
        const list = await Lists.create({
          listName,
          listUser: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { lists: list._id } }
        );

        return list;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //setListItem--user adds or updates item of array of designated field within lists object

    setListItem: async (parent, { listId, itemName, itemNotes }, context) => {},

    //     addComment: async (parent, { thoughtId, commentText }, context) => {
    //       if (context.user) {
    //         return Thought.findOneAndUpdate(
    //           { _id: thoughtId },
    //           {
    //             $addToSet: {
    //               comments: { commentText, commentAuthor: context.user.username },
    //             },
    //           },
    //           {
    //             new: true,
    //             runValidators: true,
    //           }
    //         );
    //       }
    //       throw new AuthenticationError('You need to be logged in!');
    //     },
    //     removeThought: async (parent, { thoughtId }, context) => {
    //       if (context.user) {
    //         const thought = await Thought.findOneAndDelete({
    //           _id: thoughtId,
    //           thoughtAuthor: context.user.username,
    //         });

    //         await User.findOneAndUpdate(
    //           { _id: context.user._id },
    //           { $pull: { thoughts: thought._id } }
    //         );

    //         return thought;
    //       }
    //       throw new AuthenticationError('You need to be logged in!');
    //     },
    //     removeComment: async (parent, { thoughtId, commentId }, context) => {
    //       if (context.user) {
    //         return Thought.findOneAndUpdate(
    //           { _id: thoughtId },
    //           {
    //             $pull: {
    //               comments: {
    //                 _id: commentId,
    //                 commentAuthor: context.user.username,
    //               },
    //             },
    //           },
    //           { new: true }
    //         );
    //       }
    //       throw new AuthenticationError('You need to be logged in!');
    //     },
  },
};

module.exports = resolvers;
