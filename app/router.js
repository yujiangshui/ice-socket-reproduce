'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  app.io.route('chat', app.io.controller.chat.ping);
  app.io.route('disconnect', app.io.controller.chat.disconnect);
};
