const { Message } = require("../models");

// const NEW_MESSAGE = 'NEW_MESSAGE'

module.exports = {
  Query: {
    messages: async () => await Message.find(),
  },
  Mutation: {
    postMessage: async (_, args, { req, res }) => {
      const post = await Message.create(args);
      return post;
    },
    // Subscription: {
    //   newMessage: {
    //     subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_USER)
    //   }
    // }
  },
};
