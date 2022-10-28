import { useState } from 'react'

import Item from './components/Item'
import Navbar from './components/Navbar'

function App(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Item />
    </div>
  )
}

export default App
