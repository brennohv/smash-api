"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require("axios");
const vercelWebhook = strapi.config.get("custom.vercelWebhook");
module.exports = {
  // const netlifyWebhook = strapi.config.get("custom.netlifyWebhook");

  lifecycles: {
    async afterCreate(_, __) {
      netlifyWebhook && axios.post(vercelWebhook);
    },
    async afterUpdate(_, __, ___) {
      netlifyWebhook && axios.post(vercelWebhook);
    },
  },
};
