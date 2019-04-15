const Service = require('egg').Service

class MsgService extends Service {
    async index(params) {
        if (params) {
            const sql = "SELECT * FROM article WHERE id = ?";
            const list = await this.app.mysql.query(sql, [params]);
            return list[0]
        }
    }
    async tags(params) {
        if (params == 'all') {
            const sql = "SELECT * FROM tags ";
            const list = await this.app.mysql.query(sql);
            return list
        } else {
            const sql = "SELECT * FROM tags WHERE type like  ? LIMIT 10";
            const list = await this.app.mysql.query(sql, ['%'+params+'%']);
            console.log(list);
            return list
        }

    }
}
module.exports = MsgService