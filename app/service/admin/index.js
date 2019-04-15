'use strict';
const Service = require('egg').Service;;

class ArticleService extends Service {
    async save(article,articleTag) {
        const res = await this.app.mysql.insert('article', article);
        const res1 = await this.app.mysql.insert('tags', articleTag);
        return res.affectedRows === 1 && res1.affectedRows === 1;
    }
}
module.exports = ArticleService;
