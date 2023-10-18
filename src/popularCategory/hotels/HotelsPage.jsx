import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const HotelsPage = () => {
  const navigate = useNavigate()
  const category = 'hotel' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]

  const [hotel, sethotel] = useState([])
  useEffect(() => {
    const getHotel = async () => {
      let fetchHotel = await fetch(`${import.meta.env.VITE_REACT_APP}/get/hotel`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      fetchHotel = await fetchHotel.json()
      // console.log(fetchHotel.gotHotel)
      sethotel(fetchHotel.gotHotel)
      console.log(hotel)
    }
    getHotel()
  }, [])

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">

        {hotel &&
          hotel.map((item, i) => {
            return (
              <CardSection
               hotelName={item.hotelName}
                address={item.address}
                 price={`${item.price}/day`}
                  image={item.image}
                   description={item.description}
                    rating={item.rating}
                     onClick={() => navigate('/hotel/Product_Detail')} 
                    />
            )
          })}
          

        {/* <CardSection onClick={() => navigate('/hotel/Product_Detail')} />
        <CardSection onClick={() => navigate('/hotel/Product_Detail')} />
        <CardSection onClick={() => navigate('/hotel/Product_Detail')} />
        <CardSection onClick={() => navigate('/hotel/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default HotelsPage
