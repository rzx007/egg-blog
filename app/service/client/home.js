const Service = require('egg').Service

class HomeService extends Service {
    async index(page = 1) {
       const pageSize = 10 //一次查多少条
       const  pages =(page - 1)*pageSize;
        // 未传入page时，查固定条数
        const sql = "SELECT * FROM article WHERE invisible = 1 LIMIT ?,?";
        // 获取总条目数
        const sql2 = "SELECT COUNT(*) AS CustomerNilsen FROM article"
        const list =await this.app.mysql.query(sql,[pages,pageSize]);
        const count =await this.app.mysql.query(sql2);
        const pageNum = count[0].CustomerNilsen/pageSize<1?1:count[0].CustomerNilsen/pageSize
        return {list,page,pageNum}
        
        // [{
        //     create_time: "2019-04-11",
        //     invisible: 1,
        //     title: '[置顶]一份值得收藏的知识清单',
        //     detail: '随着学习的深入，越来越发现知识体系的重要性。平时积累的零碎知识，如果不做关联，在一些时候（比如面试）会不堪一击。',
        //     url: 'htmlcss',
        //     tags: ['javascript', 'html']
        // }]
    }
}
module.exports = HomeService;