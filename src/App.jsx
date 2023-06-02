import CartContent from './component/CartContent/cartContent';
import DataProvider from './component/Context/dataContext';
import Home from './component/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
          

        </Routes>
      </BrowserRouter>
    </DataProvider >

  )
}

export default App
