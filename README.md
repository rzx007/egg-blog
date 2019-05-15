# blog

'基于egg得个人博客应用'

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.

### 踩坑
```bash
$ 1.post请求时，需要将提交json数据显示转换JSON.stringfy为json,使用时需要显示JSON.parse(原因暂不详)
$ 2.egg-crs 跨域处理时，会出现session设置后无法获取（原因不详）（处理方法：前端进行代理）
$ 3.post请求时会报403错误，原因时egg的安全认证，默认访问时会再客户端cookies中存储一个key值为csrfToken的密钥，需要再请求头或者query或者body返回过去，默认的key值为x-csrf-token
```
[egg]: https://eggjs.org
