const { Message } = require("../models");

const NEW_MESSAGE = 'NEW_MESSAGE'

module.exports = {
  Query: {
    messages: async () => await Message.find(),
  },
  Mutation: {
    postMessage: async (_, args, { pubsub }) => {
      const message = await Message.create(args);
      pubsub.publish(NEW_MESSAGE, { newMessage: message })
      return message;
    },
  },
  Subscription: {
    newMessage: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_MESSAGE)
    }
  }
};
