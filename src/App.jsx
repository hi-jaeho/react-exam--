import './App.css'
import Header from './layouts/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Notice from './pages/Notice'
function App() {

  return (
      <section className="app">
        <BrowserRouter>
          <Header />
          <div>
            <Routes>
              <Route path='/' element={<ProductList />} />
              <Route path='/notice' element={<Notice />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
  )
}

export default App

