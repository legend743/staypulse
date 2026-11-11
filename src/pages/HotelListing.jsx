import React from 'react'
import HotelCard from '../components/hotels/HoelCard'

function HotelListing() {
  const hotels=[
    {id:1,name:"Grand Sinovia Hotel",location:"Gomti Nagar,Lucknow",rating:4.3,price:"2,499",details: "Experience luxury and comfort with premium rooms and excellent hospitality.", img:"https://images.unsplash.com/photo-1566073771259-6a8506099945"},
    {id:1,name:"Surya Galaxy Hotel",location:"Arya Nagar,Unnao",rating:4.3,price:"4,909",details: "Experience luxury and comfort with premium rooms and excellent hospitality.", img:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
    {id:1,name:"Hawel Hotel",location:"Suklaganj,Unnao",rating:4.3,price:"2,399",details: "Experience luxury and comfort with premium rooms and excellent hospitality.", img:"https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
    {id:1,name:"Grand Sinovia Hotel",location:"Gomti Nagar,Lucknow",rating:4.3,price:"2,499",details: "Experience luxury and comfort with premium rooms and excellent hospitality.", img:"https://images.unsplash.com/photo-1566073771259-6a8506099945"}
  ]
  return (
    <>
<div className="w-full max-w-full min-w-0 bg-gray-700/30 mx-3 mt-10 rounded-xl py-5">
    <div className="hotel-scroll flex gap-3 px-4 overflow-x-auto pb-4">{hotels.map((hotel)=>(<div  key={hotel.id} className='flex-none w-100'> <HotelCard hotel={hotel}/></div>))}</div>


    {/* <div className='container flex mt-10 px-5'><HotelCard/></div>
    <div className='container flex mt-10 px-5'><HotelCard/></div>
    <div className='container flex mt-10 px-5'><HotelCard/></div>
    <div className='container flex mt-10 px-5'><HotelCard/></div>
    <div className='container flex mt-10 px-5'><HotelCard/></div> */}
    </div>
    </>
  )
}

export default HotelListing