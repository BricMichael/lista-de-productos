// import { useState } from 'react'
import style from'./app.module.css'
import Products from './components/products/Products'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className={style.app}>
      <h1>Lista de Productos</h1>
      <Products />
    </div>
  )
}

export default App
