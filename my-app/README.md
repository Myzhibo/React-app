# React-app
基于React18 hooks函数式组件的后台管理系统。

# 项目准备
## 项目搭建
-   npm init vite my-app        // react , ts
-   cd my-app
-   npm install react-redux
-   npm install react-router-dom@6 -S
-   npm install

## reset CSS
-   npm i reset-css
-   main.tsx 引入 import "reset-css"

## 引入scss
-   npm i --save-dev sass
-   组件自身css使用模块化管理, 创建命名为 xxx.moudle.scss。 保证组件间样式不会互相污染

## 引入UI组件库  Ant Design  
-   官网: https://ant.design/index-cn
-   npm install antd --save
-   npm install --save @ant-design/icons 

## 路由配置
-   对象写法 + 嵌套路由 配置路由表 router/index.js
```js
//对象写法


import Home from '../view/Home'
import About from '../view/About'

import { Navigate } from 'react-router-dom'


const routes = [
    {
        path: '/',
        element: <Navigate to='/page1' />            //重定向组件
    },
    {
        path: '/',                                  //为path:'/' 单独开一个配置子路由
        element: <Home />,
        children:[
            {
                path: '/page1',
                element: <Page1 />
            },
            {
                path: '/page2',
                element: <Page2 />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/user',
                element: <User />
            }
        ]            
    }
]

export default routes
```

-    main.tsx引入BrowserRouter
```js
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
```

-    App.tsx引入useRouter和 router的index.js文件
```js
import { useRoutes } from "react-router-dom";
import router from './router'

function App() {
  const outlet = useRoutes(router)                  //接收指定的路由

  return (
    <div className="App">
        App
        {outlet}
    </div>
  )
}
```

## 路由懒加载
-   使用react中的lazy
-   改写路由表 router/index.js
```js
import { lazy } from 'react'                        //路由懒加载
// import About from '../view/About'
// import User from '../view/User'
// import About from '../view/Page1'
// import User from '../view/Page2'
const About = lazy( () => import('../view/About') )
const User = lazy( () => import('../view/User') )
const Page1 = lazy( () => import('../view/Page1') )
const Page2 = lazy( () => import('../view/Page2') )
```

-   改写App.js的 outlet, 套上Suspense
```js
<Suspense fallback={<div>loading...</div>}> {outlet} </Suspense>
```

## Home组件引入Outlet
-   引入Outlet显示子路由

# 布局