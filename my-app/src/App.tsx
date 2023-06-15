
import Comp1 from './components/C1/index'
import { Button } from 'antd';

import { useRoutes, Link } from "react-router-dom";
import router from './router'
import { Suspense } from 'react';

function App() {
  const a = () =>{
    alert(1)
  }

  const outlet = useRoutes(router)


  return (
    <div className="App">
      
      {/* <Link to='/home'>主页</Link>
      |
      <Link to='/about'>关于我们</Link>
      |
      <Link to='/user'>用户</Link> */}
      
      <Suspense fallback={<div>loading...</div>}> {outlet} </Suspense>
    </div>
  )
}

export default App
