# vc

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# 项目架设

    ├── README.md
    ├── babel.config.js
    ├── example // 示例代码
    ├── package-lock.json
    ├── package.json
    ├── public
    ├── src // 组件代码
    └── vue.config.js

## 示例代码规范

    ./example
    ├── App.vue
    ├── assets
    │   └── logo.png
    ├── components // 组件
    │   └── HelloWorld.vue
    ├── main.js
    ├── pages // 只能存放页面级别组件
    │   └── home.vue
    └── router.js

直接在 `pages/` 目录下创建`**.vue`文件作为页面组件，已经自动引入vue-router配置，通过`localhost:8080/#/${页面文件名称}`可以查看到页面

## 组件代码

    ./src
    ├── components 组件文件
    │   ├── button
    │   │   ├── Button.vue
    │   │   └── index.js
    │   └── index.js
    ├── directives // 指令文件
    │   └── index.js
    ├── index.js
    ├── prototypes // 实例方法
    │   └── index.js
    ├── styles // 样式文件
    │   ├── _variables.scss
    │   └── index.scss
    └── utils // 工具函数
        └── index.js


### 关于组件文件

格式：

    ./src/components/button/
    ├── Button.vue
    └── index.js 必须

`index.js`
```js
// 引入并导出组件
import Button from './Button'

// ...

export default [
    Button
]
```

按照这种格式创建组件，不需要再其他地方引入注册，可以直接在案例代码中使用，如：

```html
<vc-button>..</vc-button>
```

