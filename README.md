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
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### 踩坑
$ 1.post请求时，需要将提交json数据显示转换JSON.stringfy为json,使用时需要显示JSON.parse(原因暂不详)
$ 2.egg-crs 跨域处理时，会出现session设置后无法获取（原因不详）

[egg]: https://eggjs.org