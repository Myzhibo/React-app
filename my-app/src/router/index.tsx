//对象写法

import Home from '../view/Home'
// import About from '../view/About'
// import User from '../view/User'

import { Navigate } from 'react-router-dom'

import { lazy } from 'react'                        //路由懒加载
const About = lazy( () => import('../view/About') )
const User = lazy( () => import('../view/User') )
const Page1 = lazy( () => import('../view/Page1') )
const Page2 = lazy( () => import('../view/Page2') )


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