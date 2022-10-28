import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/Home'
import Loja from './pages/Loja'
import Sobre from './pages/Sobre'
import NotFound from './pages/NotFound'

import Navbar from './components/Navbar'

function App(): JSX.Element {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/loja' element={<Loja />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
