'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.Index);
  router.get('/default/getArticleList', controller.default.home.getArticle);
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById);
};
