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
    const formData = ctx.request.body
    console.log("文章：");
    console.log(formData);
    let resMsg = {
      errcode: 1,
      msg: '登录成功'
    }
    const isSave = await ctx.service.admin.index.save(formData);
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
