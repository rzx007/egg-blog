/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require('path');
module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_rzx196090';
  // 设置session的时长
  config.session={
    maxAge:3600 * 1000,
  };
  // 生产模式代理静态文件目录，一般将app/public代理为根目录
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    dynamic: true,
    preload: false,
    maxAge: 0,
    buffer: false,
  };
  // 文件上传
  config.multipart = {
    mode: 'file',
    tmpdir: path.join(appInfo.baseDir, 'app/public/temp'),
  };
  // 页面模板
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  // 设置最大数据量
  config.bodyParser = {
    jsonLimit: '5mb',
    formLimit: '6mb',
  };
  // 允许请求跨
  // config.cors = {
  //   origin: 'http://localhost:8080',
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  // };
  // config.security = {
  //   csrf: {
  //     enable: false,
  //   }
  // };
  // token
  config.jwt = {
    cert: 'huanggegehaoshuai' // jwt秘钥
  }
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'egg-example',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.cluster = {
    listen: {
      port: 7001,
      // hostname: '192.168.0.124',
      // path: '/var/run/egg.sock',
    }
  };
  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
