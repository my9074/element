## 安装


### npm 安装
推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。
```shell
npm install -S 'git+http://git.jd.com/FE/element.git'
```
为方便起见，可以在webpack 的配置文件中增加alias，通过别名‘element-ui’来时使用@jd/element，从而达到与官方element用法的一致性。
```javascript
resolve: {
    alias: {
      "element-ui": "@jd/element-ui",
    }
//resolve,alias 只是为了帮助大家找到 webpack 配置文件中的位置，实际要添加的只有 "element-ui": "@jd/element-ui", 一行
```
:::tip
因package-lock.json会锁定依赖版本，当element有更新时，请再次执行 上述安装命令，可以更新到最新版本.<br/>
@jd/element 采用git进行版本发布，默认安装master分支<br/>
也可以安装指定版本，或指定分支,tag<br/>
npm install -S 'git+http://git.jd.com/FE/element.git#commitid'<br/>
npm install -S 'git+http://git.jd.com/FE/element.git#分支名'<br/>
npm install -S 'git+http://git.jd.com/FE/element.git#tag号'<br/>
:::

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：快速上手。
