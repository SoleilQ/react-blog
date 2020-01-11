'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async Index() {
    const { ctx, service } = this;
    const data = await service.default.home.find();
    ctx.body = data;
  }

  async getArticle() {
    const { ctx, service } = this;
    const data = await service.default.home.getArticle();
    ctx.body = {
      data,
    };
  }

  async getArticleById() {
    const { ctx, service } = this;
    const data = await service.default.home.getArticleById();
    ctx.body = {
      data,
    };
  }
}

module.exports = HomeController;
