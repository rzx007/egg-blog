'use strict';

const Controller = require('egg').Controller;

class MsgController extends Controller {
  // 文章内容（根据文章id查找）
  async index() {
    const { ctx } = this;
    const params = ctx.params.id.split(".").shift() //截取url上的id
    const data = await ctx.service.client.article.index(params)
    data.create_time = ctx.helper.formatTime(data.create_time)
    await ctx.render('home/article.tpl', { list: data });
  }

    // 标签
  async tags() {
    const { ctx } = this
    const params = ctx.params.id ? ctx.params.id : ''
    const data = await ctx.service.client.article.tags(params)
    if (data.length) {
      const typeStr = data[0].type
      data.forEach(element => {
        element.time = ctx.helper.formatTime(element.time)
      });
      await ctx.render('home/tags.tpl', { list: data, typeStr: typeStr });
    } else {
      ctx.body = "未知分类"
    }
  }
}
module.exports = MsgController;
