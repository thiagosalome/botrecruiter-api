'use strict';

/**
 * Language.js controller
 *
 * @description: A set of functions called "actions" for managing `Language`.
 */

module.exports = {

  /**
   * Retrieve language records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.language.search(ctx.query);
    } else {
      return strapi.services.language.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a language record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.language.fetch(ctx.params);
  },

  /**
   * Count language records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.language.count(ctx.query);
  },

  /**
   * Create a/an language record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.language.add(ctx.request.body);
  },

  /**
   * Update a/an language record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.language.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an language record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.language.remove(ctx.params);
  }
};
