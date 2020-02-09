# dantd

[预览地址](http://10.160.121.72:8080/)

一个基于 [Antd-v3](https://github.com/ant-design/ant-design/) 所封装的业务组件库

# Features

- 支持 TypeScript
- 支持 单元测试 Jest + @testing-library/react
- 支持 less
- 支持 eslint & prettier
- 支持 react-app-rewired
- 基于 [umijs/father](https://github.com/umijs/father) 完成打包，可使用 cjs、esm 和 umd 三种格式的引用
- 支持 mdx 文档

# Installation

```
$ npm install
```

# Usage

```
# 开发组件
$ npm start

# 组件测试
$ npm test

# 开发文档
$ npm run doc:start

# 文档构建
$ npm run doc:build

# 打包
$ npm run lib:build
```

# 目录结构

```
── README.md
├── build.sh
├── config-overrides.js
├── document // 文档
|  ├── changeLog.mdx
|  └── home.mdx
├── elevate
|  └── pipeline.doc.yml
├── entry // 这个是开发的入口
|  ├── App.less
|  ├── App.tsx
|  ├── config.tsx // 路由等配置
|  ├── index.css
|  ├── index.tsx
|  ├── pages
|  |  ├── Component
|  |  |  ├── index.tsx
|  |  |  └── style.less
|  |  ├── Home
|  |  |  ├── index.tsx
|  |  |  └── style.less
|  |  └── NotFound
|  |     └── index.tsx
├── es
├── jest.config.js
├── lib
├── package-lock.json
├── package.json
├── public // 公共文件
├── scripts // 构建用到的脚本
├── server.conf // 用于部署的 Nginx 配置
├── src
|  ├── App.less
|  ├── App.tsx
|  ├── config.tsx // 路由等配置
|  ├── index.css
|  ├── index.tsx
|  ├── pages
|  |  ├── Component
|  |  |  ├── index.tsx
|  |  |  └── style.less
|  |  ├── Home
|  |  |  ├── index.tsx
|  |  |  └── style.less
|  |  └── NotFound
|  |     └── index.tsx
|  |—— components // 写组件的地方
|  |  ├── empty-line
|  |  |  ├── EmptyLine.tsx // 组件
|  |  |  ├── __tests__ // 测试目录
|  |  |  |  └── index.test.tsx 
|  |  |  ├── demo.tsx // demo
|  |  |  ├── index.mdx // 组件文档
|  |  |  ├── index.tsx // 组件入口
|  |  |  └── style // 组件样式
|  |  |     ├── index.less
|  |  |     └── index.tsx
|  |  └── index.tsx
├── test-report.html 测试报告
└── tsconfig.json
```

# 组件

### 开发
在 `src` 目录下，新增一个组件的目录，类似上面的 `empty-line` 组件。
目录名需要保持**小写**。
如果是自定义组件，需要取一个 `antd` 中所不包含的组件名称。
添加完文件之后，在 `entry/config.tsx` 中增加 `demo` 的配置。
此时应该可以看到组件，并继续开发了。

更多请参考：[手摸手，打造属于自己的 React 组件库 —— 基础篇](http://way.xiaojukeji.com/article/20141)

### 测试
测试文件需要保持 `.test.tsx` 的后缀。
相关技术栈以及文档：
- [Jest](https://jestjs.io/)：JavaScript 测试框架。
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)：将 React 组件转化成 Dom 节点来测试，而不是渲染的 React 组件的实例，可以当做是 [Enzyme](http://airbnb.io/enzyme/) 的替代。
编写测试脚本，并保证希望测试到的地方已经覆盖。

更多请参考：[手摸手，打造属于自己的 React 组件库 —— 测试篇](http://way.xiaojukeji.com/article/20144)

### 发布

如果没有安装过 `dnpm`，需要先安装一下：
```
$ npm install -g dnpm --registry=http://registry.npm.xiaojukeji.com
```

登录 `dnpm` 账号，提交所有代码

```
$ npm run lib:build
$ dnpm login
$ npm version patch
$ git push
$ dnpm publish
```

# 文档

### 开发文档
编写组件里面的 `index.mdx`，并运行命令查看效果
```
npm run doc:start
```
### 构建文档
```
npm run doc:build
```
### 上传文档
添加文件，提交代码至 `master` 分支，
查看流水线 [OE](http://eng.xiaojukeji.com/group/38581/service/23470/pipeline)，并触发 `Odin` 部署。

# blog

- [手摸手，打造属于自己的 React 组件库 —— 基础篇](http://way.xiaojukeji.com/article/20141)
- [手摸手，打造属于自己的 React 组件库 —— 测试篇](http://way.xiaojukeji.com/article/20144)
- [手摸手，打造属于自己的 React 组件库 —— 打包篇](http://way.xiaojukeji.com/article/20151)
