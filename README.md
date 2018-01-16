<p align="center">
  <img src="https://cdn.rawgit.com/ElemeFE/element/dev/element_logo.svg">
</p>

# Element

[![Build Status](https://travis-ci.org/ElemeFE/element.svg?branch=master)](https://travis-ci.org/ElemeFE/element)
[![Coverage Status](https://coveralls.io/repos/github/ElemeFE/element/badge.svg?branch=master)](https://coveralls.io/github/ElemeFE/element?branch=master)
[![CDNJS](https://img.shields.io/cdnjs/v/element-ui.svg)](https://cdnjs.com/libraries/element-ui)
[![npm package](https://img.shields.io/npm/v/element-ui.svg)](https://www.npmjs.org/package/element-ui)
[![NPM downloads](http://img.shields.io/npm/dm/element-ui.svg)](https://npmjs.org/package/element-ui)
![JS gzip size](http://img.badgesize.io/https://unpkg.com/element-ui/lib/index.js?compression=gzip&label=gzip%20size:%20JS)
![CSS gzip size](http://img.badgesize.io/https://unpkg.com/element-ui/lib/theme-default/index.css?compression=gzip&label=gzip%20size:%20CSS)
[![Join the chat at https://gitter.im/ElemeFE/element](https://badges.gitter.im/ElemeFE/element.svg)](https://gitter.im/ElemeFE/element?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)(Chinese)
[![Join the chat at https://gitter.im/element-en/Lobby](https://badges.gitter.im/element-en/Lobby.svg)](https://gitter.im/element-en/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)(English)
[![OpenCollective](https://opencollective.com/element/backers/badge.svg)](#backers) 
[![OpenCollective](https://opencollective.com/element/sponsors/badge.svg)](#sponsors)

> A Vue.js 2.0 UI Toolkit for Web.

<!--<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/bD3dKbdDE2F7Ky9LUN1kjTFK/ElemeFE/element'>-->
  <!--<img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/bD3dKbdDE2F7Ky9LUN1kjTFK/ElemeFE/element.svg' />-->
<!--</a >-->

## Links
- [Home Page](http://element.eleme.io/)
- [Docs](http://element.eleme.io/#/component)
- [awesome-element](https://github.com/ElementUI/awesome-element)
- [FAQ](./FAQ.md)
- [Customize Theme](http://element.eleme.io/#/en-US/component/custom-theme)
- [Preview and generate theme online](https://elementui.github.io/theme-preview)
- [Element for React](https://github.com/eleme/element-react)
- [Atom helper](https://github.com/ElemeFE/element-helper)
- Starter Kit
  - [element-starter](https://github.com/ElementUI/element-starter)
  - [element-cooking-starter](https://github.com/ElementUI/element-cooking-starter)
  - [element-in-laravel-starter](https://github.com/ElementUI/element-in-laravel-starter)
- [Design resources](https://github.com/ElementUI/Resources)
- Boilerplate for bug reports
  - [CodePen](https://codepen.io/anon/pen/ozYpNA)
  - [JSFiddle](https://jsfiddle.net/gmve9d3p/)
- [Mint UI](https://github.com/ElemeFE/mint-ui) - Mobile UI elements for Vue.js

## Install
由于项目存放在 jnpm 仓库中，但通过 `jnpm install` 无法生成 `package-lock.json` 文件，
故需要将设置 `npm config` 将 `@jd` 的 scope 的地址指向 `jnpm` 的 `registry`

>`npm config set @jd:registry http://registry.m.jd.com`
>
>`npm install @jd/element-ui`

## Quick Start
### 标准方式
``` javascript
import Vue from 'vue'
import Element from '@jd/element-ui'
import '@jd/element-ui/lib/theme-default/index.css'

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from '@jd/element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
### 兼容现有 element 
如果项目由 webpack 打包，可通过 webpack 提供的 `alias` 功能，添加 `'element-ui': @jd/element-ui` 别名映射

``` javascript
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

// or
import {
  Select,
  Button
  // ...
} from 'element-ui'
```

## Browser Support
Modern browsers and Internet Explorer 9+.

## Development
Skip this part if you just want to use Element.

For those who are interested in contributing to Element, please refer to our contributing guide ([中文](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.zh-CN.md) | [English](https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.en-US.md)) to see how to run this project.

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/ElemeFE/element/releases).

## FAQ

<details>
<summary>如何使用京东云版 Element-ui？</summary>

由于该组件库存放在京东自己的私有 npm 库 jnpm 中，所以安装的时候需要先安装 jnpm：
```shell
npm install @jd/jnpm -g --registry=http://registry.m.jd.com
```

```shell
jnpm install @jd/element-ui --save
```

``` javascript
import Vue from 'vue'
import Element from '@jd/element-ui'
import '@jd/element-ui/lib/theme-default/index.css'

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from '@jd/element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```
</details>
<details>
<summary>给组件绑定的事件为什么无法触发？</summary>

在 Vue 2.0 中，为**自定义**组件绑定**原生**事件必须使用 `.native` 修饰符：
```html
<my-component @click.native="handleClick">Click Me</my-component>
```

从易用性的角度出发，我们对 `Button` 组件进行了处理，使它可以监听 `click` 事件：
```html
<el-button @click="handleButtonClick">Click Me</el-button>
```

但是对于其他组件，还是需要添加 `.native` 修饰符。
</details>

<details>
<summary>如何在 Table 组件的每一行添加操作该行数据的按钮？</summary>

使用 [Scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots) 即可：
```html
<el-table-column label="操作">
  <template scope="props">
    <el-button @click.native="showDetail(props.row)">查看详情</el-button>
  </template>
</el-table-column>
```
参数 `row` 即为对应行的数据。
</details>

<details>
<summary>Tree 组件的 `render-content` 和 Table 组件的 `render-header` 怎么用？</summary>

请阅读 Vue 文档 [Render Function](http://vuejs.org/v2/guide/render-function.html) 的相关内容。注意，使用 JSX 来写 Render Function 的话，需要安装 `babel-plugin-transform-vue-jsx`，并参照其[文档](https://github.com/vuejs/babel-plugin-transform-vue-jsx)进行配置。
</details>

<details>
<summary>如何使用第三方图标库？</summary>

只要修改第三方图标库的前缀（具体方法参阅第三方库的文档），并编写相应的 CSS，即可在 Element 中像使用内置图标一样使用第三方图标。例如，将第三方库的前缀改为 `el-icon-my`，然后在其 CSS 文件中添加：
```css
[class^="el-icon-my"], [class*=" el-icon-my"] {
  font-family:"your-font-family" !important;

  /* 以下内容参照第三方图标库本身的规则 */
  font-size: inherit;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```
具体使用时，和 Element 内置的图标用法一样。比如在 `el-input` 中：
```html
<el-input icon="my-xxx" />
```
</details>

<details>
<summary>所有组件的任意属性都支持 `.sync` 修饰符吗？</summary>
  
不是。对于支持 `.sync` 修饰符的属性，我们会在文档的 API 表格中注明。更多 `.sync` 的用法请查看 [Vue 文档](https://vuejs.org/v2/guide/components.html#sync-Modifier)。
</details>

<details>
<summary>你们的文档怎么偷偷更新了？</summary>

我们只会在 Element 发布新版本时同步更新文档，以体现最新的变化。详细的更新内容可以查看 [changelog](https://github.com/ElemeFE/element/blob/master/CHANGELOG.zh-CN.md)。
</details>

<details>
<summary>在项目中引入 Element，但是 CSS 报错/字体文件报错/组件没有样式是什么原因？</summary>

请参考我们提供的 [starter kit](https://github.com/ElementUI/element-starter)，在 webpack 的 loaders 中正确配置 file-loader、css-loader 和 style-loader。此外，我们还提供了基于 [cooking](https://github.com/ElementUI/element-cooking-starter) 和 [laravel](https://github.com/ElementUI/element-in-laravel-starter) 的项目模板。
</details>

<details>
<summary>将 Element 克隆至本地，运行时为何会报错/跑不起来？</summary>

首先，确保克隆的是 master 分支的最新代码，并且文件完整。其次，确保本地的 node 版本在 4.0 以上，npm 版本在 3.0 以上。最后，可以启动开发环境：

```bash
npm run dev
```

或是直接打包：

```bash
npm run dist
```
</details>

<details>
<summary>与 Element 官方的区别?</summary>

由于饿了么官方的组件库，部分组件不能满足现有项目的需求，所以在此基础上为部分组件进行定制或添加新组件。

@jd/Element-ui 是基于 Element 1.4.12 版本，所以较老的版本可能会出现非兼容性更新。（ 具体可以参考 CHANGELOG.zh-CN.md ）
例如:
- Select
  - 值为对象类型时，需要提供一个 `value-key` 作为唯一性标识，#5897
</details>

## LICENSE
MIT
