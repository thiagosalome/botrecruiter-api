'use strict';

/**
 * Candidate.js controller
 *
 * @description: A set of functions called "actions" for managing `Candidate`.
 */

module.exports = {

  /**
   * Retrieve candidate records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.candidate.search(ctx.query);
    } else {
      return strapi.services.candidate.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a candidate record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.candidate.fetch(ctx.params);
  },

  /**
   * Count candidate records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.candidate.count(ctx.query);
  },

  /**
   * Create a/an candidate record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.candidate.add(ctx.request.body);
  },

  /**
   * Update a/an candidate record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.candidate.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an candidate record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.candidate.remove(ctx.params);
  }
};
