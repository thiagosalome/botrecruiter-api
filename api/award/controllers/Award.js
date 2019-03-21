'use strict';

/**
 * Award.js controller
 *
 * @description: A set of functions called "actions" for managing `Award`.
 */

module.exports = {

  /**
   * Retrieve award records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.award.search(ctx.query);
    } else {
      return strapi.services.award.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a award record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.award.fetch(ctx.params);
  },

  /**
   * Count award records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.award.count(ctx.query);
  },

  /**
   * Create a/an award record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.award.add(ctx.request.body);
  },

  /**
   * Update a/an award record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.award.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an award record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.award.remove(ctx.params);
  }
};
