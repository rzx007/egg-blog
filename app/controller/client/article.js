'use strict';

const Controller = require('egg').Controller;

class MsgController extends Controller {
  async index() {
    const { ctx } = this;
    const params = ctx.params.id.split(".").shift() //截取url上的id
    const data = await ctx.service.client.article.index(params)
    await ctx.render('home/article.tpl', { list: data });
  }

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
    }else{
      ctx.body="未知分类"
    }
  }
}
module.exports = MsgController;
