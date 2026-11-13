import React from 'react'
import HotelDetails from '../components/hotels/HotelDetails'
const hotel = {
  name: "The Grand Residency",
  image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  location: "Lucknow, Uttar Pradesh",
  description: "Enjoy comfortable rooms and premium hospitality.",
  rating: 4.8,
  likes: 245,
  reviews: 120,
  price: 2499
};

function HotelDetailPage() {
  return (
    <div><HotelDetails hotel={hotel}/></div>
  )
}

export default HotelDetailPage