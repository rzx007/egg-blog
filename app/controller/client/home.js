'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // 获取文章列表
    const { ctx } = this;
    const page = ctx.query.page?ctx.query.page:1
    var artList = await ctx.service.client.home.index(page)
    await ctx.render('home/home.tpl', {data:artList.list,pageIndex:artList.page,pageNum:artList.pageNum});
  }
}

module.exports = HomeController;
