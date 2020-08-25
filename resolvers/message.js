const { Message } = require("../models");


module.exports = {
  Query: {
    messages: async () => await Message.find(),
  },
  Mutation: {
    postMessage: async (_, args, { req, res }) => {
      const post = await Message.create(args);
      return post;
    },
  },
};
