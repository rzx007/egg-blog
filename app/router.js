'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 后台授权中间件
  const auth = app.middleware.auth()

  // 客户端
  router.get('/', controller.client.home.index);//首页
  router.get('/article/:id',controller.client.article.index);//文章详情页
  router.get('/tags/:id',controller.client.article.tags)
  //后台服务 
  router.get('/admin', controller.admin.index.index);//首页
  // 接口
  router.get('/getCaptcha',controller.admin.login.getCaptcha) // 获取验证码
  router.post('/login',controller.admin.login.login)//登陆
  router.post('/saveArticle',controller.admin.index.saveArticle)//保存文章
  
};
