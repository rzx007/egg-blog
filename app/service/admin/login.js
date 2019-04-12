'use strict';
const Service = require('egg').Service;
const jwt = require('jsonwebtoken');
const svgCaptcha = require('svg-captcha');

class LoginService extends Service {
    // 验证码生成
    getCaptcha() {
     return svgCaptcha.create({
        width: 85,
        height: 38
     })
    }
    // 检验客户端传过来得验证码
    checkCaptcha(code) {
        const { ctx } = this
        code = code.toLowerCase()
        // get code from session
        let sessionCode = ctx.session.code ? ctx.session.code.toLowerCase() : null
        if (code === sessionCode) {
            // 销毁code
            ctx.session.code = null
        }
        return code === sessionCode
     }
    //  验证码通过后，登陆操作
    async login(user,password){
        const { app } = this
        if (user) {
             // 找到则以用户id生成token
            const token = jwt.sign({
                id: app.config.keys
                }, app.config.jwt.cert, {
                expiresIn: '10h' // token过期时间
            })
            return {
                username:user,
                token:token
            }
        }
    }
}
module.exports = LoginService;
