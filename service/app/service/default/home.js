'use strict';

const Service = require('egg').Service;

class HomeService extends Service {

  async getArticle() {
    const sql = 'SELECT article.id as id,' +
                'article.title as title,' +
                'article.introduce as introduce,' +
                'UNIX_TIMESTAMP(article.addTime) as addTime,' +
                'article.view_count as view_count,' +
                'type.typeName as typeName ' +
                'FROM article LEFT JOIN type ON  article.type_id = type.id';
    const results = await this.app.mysql.query(sql);
    return results;
  }

  async getArticleById() {
    const id = this.ctx.params.id;
    const sql = 'SELECT article.id as id,' +
                'article.title as title,' +
                'article.introduce as introduce,' +
                'article.article_content as article_content,' +
                'UNIX_TIMESTAMP(article.addTime) as addTime,' +
                'article.view_count as view_count,' +
                'type.typeName as typeName ' +
                'FROM article LEFT JOIN type ON  article.type_id = type.id ' +
                'WHERE article.id=' + id;
    const results = await this.app.mysql.query(sql);
    return results;
  }
}

module.exports = HomeService;
