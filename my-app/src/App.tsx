
import Comp1 from './components/C1/index'
import { Button } from 'antd';

function App() {
  const a = () =>{
    alert(1)
  }
  return (
    <div className="App">
      App
      <Button type="dashed" onClick={a}>Primary Button</Button>
      <Comp1 / >
    </div>
  )
}

export default App
