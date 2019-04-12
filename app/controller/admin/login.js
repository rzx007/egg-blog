const Controller = require('egg').Controller;

class LoginController extends Controller {
    // 获取验证码
    async getCaptcha() {
        const { ctx } = this
        const captcha = ctx.service.admin.login.getCaptcha()
        // 把生成的验证码文本信息（如：t8ec），存入session，以待验证
        ctx.session.code = captcha.text
        //返回前端
        ctx.body = captcha.text
    }
    // 登陆操作，1，验证验证码，2.再验证用户和密码
    async login() {
        const { ctx } = this
        // 结构，username, password, code客户端传过来得值
        const { username, password, code } = ctx.request.body
        let resMsg = {
            errcode: 0,
            data: {},
            msg: '登录成功'
        }
        // 验证码验证
        let isCaptchaVail = ctx.service.admin.login.checkCaptcha(code)
        if (!isCaptchaVail) {
            resMsg.msg = "验证码错误!"
            // 种植操作
            return
        }
        // 验证码通过
        const userData = await ctx.service.admin.login.login({ username, password })
        if (!userData) {
            resMsg.errcode = 2
            resMsg.msg = '用户名或密码错误'
            ctx.body = resMsg
            return
        }
        resMsg.token = userData.token
        resMsg.username = userData.username
        ctx.body = resMsg
    }
}

module.exports = LoginController