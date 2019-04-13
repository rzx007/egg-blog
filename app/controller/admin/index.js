'use strict';
// controller
const Controller = require('egg').Controller;
const fs = require('fs');
const util = require('util');
const path = require('path');
const readFilePromise = util.promisify(fs.readFile);

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.response.type = 'html';
    const page = await readFilePromise(path.resolve(__dirname, '../../public/admin/index.html'));
    ctx.body = page;
  }
  async saveArticle() {
    const { ctx } = this;
    const article = ctx.request.body
    article.id = ctx.helper.uuid();
    article.url = '/article/' + article.id + '.html';
    article.author = ctx.session.user.username;
    const nowTime = new Date();
    article.create_time = nowTime;
    article.update_time = nowTime;
    article.invisible = 1;
    const articleTag = {} //文章tags
    let resMsg = {
      errcode: 1,
      msg: '登录成功'
    }
    const isSave = await ctx.service.admin.index.save(article,articleTag);
    if (!isSave) {
      resMsg = {
        errcode: 0,
        msg: '保存失败'
      }
    }
    ctx.body = resMsg;
  }
}
module.exports = HomeController;
