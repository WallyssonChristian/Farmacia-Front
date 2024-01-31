import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import FormCategoria from './components/categorias/formCategoria/FormCategoria'
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria'
import ListaCategorias from './components/categorias/listaCategoria/ListaCategoria'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className='min-h-[80vh]'>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            {/** Categoria Crud */}
            <Route path='/categorias' element={<ListaCategorias />} />
            <Route path='/cadastroCategoria' element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

          </Routes>

        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
