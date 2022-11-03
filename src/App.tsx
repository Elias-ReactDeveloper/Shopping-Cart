import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './paginas/Home'
import Loja from './paginas/Loja'
import Sobre from './paginas/Sobre'
import NotFound from './paginas/NotFound'

import Navbar from './components/Navbar'
import Carrinho from './components/Carrinho/Carrinho'

function App(): JSX.Element {

  const [carrinhoAberto, setCarrinhoAberto] = useState<Boolean>(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar carrinhoAberto={carrinhoAberto} setCarrinhoAberto={setCarrinhoAberto} />
        { carrinhoAberto && <Carrinho  carrinhoAberto={carrinhoAberto} setCarrinhoAberto={setCarrinhoAberto} /> }
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
