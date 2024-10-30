import { useState } from 'react'


import './App.css'
import Blogs from './components/blogs/blogs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1 className='text-6xl font-bold'>knowlodge cafe</h1>
      <header></header>
      <Blogs></Blogs>
      
    </>
  )
}

export default App


