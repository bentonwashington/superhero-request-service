const { Request, Category } = require('../models');

const resolvers = {
    Query: {
        requests: async () => {
            return await Request.find({});
        },
        categories: async () => {
            return await Category.find({});
        },
        request: async (parent, args) => {
            return await Request.findById(args.id);
        },
        category: async (parent, args) => {
            return await Category.findById(args.id);
        },
    },


    Mutation: {
        addRequest: async (parent, { title, description, details }) => {
            return await Request.create({ title, description, details });
        },
        updateRequest: async (parent, { description, details }) => {
            return await Request.findOneAndUpdate(
                { description },
                { details },
                { new: true }
            );
        },
        deleteRequest: async (parent, {}) => {
            return await Request.findByIdAndDelete({ _id: requestId})
        }

    },
}

module.exports = resolvers;