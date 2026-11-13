import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Footer from './components/common/Footer'
import HotelListing from './pages/HotelListing';
import HotelDetailPage from './pages/HotelDetailPage';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HotelListing/>}></Route>
        <Route path='/hotelDetails' element={<HotelDetailPage/>}></Route>

      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App