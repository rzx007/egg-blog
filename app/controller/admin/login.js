const Controller = require('egg').Controller;
const fs = require('mz/fs');

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
        // 结构，username, password, code客户端传过来得值.
        // 坑：将post过来的数据Json序列化，取时又转为对象
        ctx.body = ` ${JSON.stringify(ctx.request.body)}`
        const { username, password, code } = JSON.parse(ctx.body)
        let resMsg = {
            errcode: 1,
            data: {},
            msg: '登录成功'
        }
        // 验证码验证
        // let isCaptchaVail = ctx.service.admin.login.checkCaptcha(code)
        let isCaptchaVail = true;
        if (!isCaptchaVail) {
            resMsg.errcode = 0
            resMsg.msg = "验证码错误!"
            ctx.body = resMsg
            // 种植操作
            return
        }
        // 验证码通过
        const userData = await ctx.service.admin.login.login(username, password)
        if (!userData) {
            resMsg.errcode = 0
            resMsg.msg = '用户名或密码错误'
            ctx.body = resMsg
            return
        }
        // 设置 Session
        ctx.session.user = { username: userData.username };
        // 调用 rotateCsrfSecret 刷新用户的 CSRF token
        // ctx.rotateCsrfSecret();
        resMsg.data.token = userData.token
        resMsg.data.username = userData.username

        ctx.body = resMsg
    }
    // 注册用户
    async register() {
        const { ctx } = this
        ctx.body = ` ${JSON.stringify(ctx.request.body)}`
        const { username, password } = JSON.parse(ctx.body)
        const avatar = ctx.request.files[0]
        // 默认头像
        let filepathNew = this.config.baseDir + '\\app\\public\\avatar\\default.jpg';
        // 如果上传的头像
        if (avatar) {
            console.log('file:%j', avatar)
            // 对图片重命名，以防名称冲突
            let filenameNew = Math.random(10).toString(36) + new Date().getTime() + avatar.filename.split('.').pop();
            filepathNew = this.config.baseDir + '\\app\\public\\avatar\\' + filenameNew;
            // 把临时文件剪切到新目录取
            await fs.rename(avatar.filepath, filepathNew);
        }
        const nowTime = new Date();
        const userNew = {
            id: ctx.helper.uuid(),
            username: username,
            password: password,
            phone: '15623476282',
            avatar_url: filepathNew.split("\\app")[1],
            create_time: nowTime,
            update_time: nowTime
        };
        const flag = await ctx.service.login.register(userNew);
        if (flag) {
            ctx.body = {
                errcode: 1,
                data: {},
                msg: '注册成功'
            }
        } else {
            tx.body = {
                errcode: 0,
                data: {},
                msg: '注册失败'
            }
        }
    }
    async upload() {
        const { ctx } = this
        const avatar = ctx.request.files[0]
        // 默认头像
        let filepathNew = '';
        // 如果上传的头像
        if (avatar) {
            console.log('file:%j', avatar)
            // 对图片重命名，以防名称冲突
            let filenameNew = Math.random(10).toString(36) + new Date().getTime() + '.' + avatar.filename.split('.').pop();
            filepathNew = this.config.baseDir + '\\app\\public\\avatar\\' + filenameNew;
            // 把临时文件剪切到新目录取
            await fs.rename(avatar.filepath, filepathNew);
        }
        ctx.body = {
            errcode: 1,
            data: {},
            msg: '文件上传成功！！'
        }
    }
}

module.exports = LoginController