'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // 获取文章列表
    const { ctx } = this;
    console.log(ctx.href);
    
    const page = ctx.query.page ? ctx.query.page : 1
    var artList = await ctx.service.client.home.index(page)
    if (artList.list) {
      artList.list.forEach(element => {
        element.create_time = ctx.helper.formatTime(element.create_time)
      });
    }
    await ctx.render('home/home.tpl', { data: artList.list, pageIndex: artList.page, pageNum: artList.pageNum });
  }
  async error404() {
    const { ctx } = this;
    await ctx.render('404/404.tpl');
  }
}

module.exports = HomeController;
