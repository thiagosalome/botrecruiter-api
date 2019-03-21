'use strict';

/**
 * Skill.js controller
 *
 * @description: A set of functions called "actions" for managing `Skill`.
 */

module.exports = {

  /**
   * Retrieve skill records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.skill.search(ctx.query);
    } else {
      return strapi.services.skill.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a skill record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.skill.fetch(ctx.params);
  },

  /**
   * Count skill records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.skill.count(ctx.query);
  },

  /**
   * Create a/an skill record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.skill.add(ctx.request.body);
  },

  /**
   * Update a/an skill record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.skill.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an skill record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.skill.remove(ctx.params);
  }
};
