'use strict';
const Service = require('egg').Service;;

class ArticleService extends Service {
    async save(article = {}) {
        const res = await this.app.mysql.insert('article', article);
        return res.affectedRows === 1;
    }
}
module.exports = ArticleService;
